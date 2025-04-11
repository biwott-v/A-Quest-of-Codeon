document.addEventListener("DOMContentLoaded",()=>{
  let image=document.querySelector("#game-image");
  let controller = new AbortController()
  function fetchData(i){
    fetch("db.json")
    .then(res => res.json())
    .then(data => {
      image.src=data[i].image
      choice.forEach(element => {
        if(element.textContent===data[i].answer){
          element.addEventListener("click",(event)=>{
            element.style.backgroundColor="green";
            setTimeout(()=> element.style.backgroundColor="#6b5b95",2000)
            points+=100;
            playerPoints.textContent=points;
            {signal : controller.signal}
          },{once:true})
        }
        else{
          element.addEventListener("click",event => {
            element.style.backgroundColor="red";
            setTimeout(()=> element.style.backgroundColor="#6b5b95",2000);
            controller.abort();
            if(num===1){
              lifeone.style.visibility = "hidden";
              num++;
            }
            else if(num===2){
              lifetwo.style.visibility = "hidden";
              num++;
            }
            else if (num===3){
              lifethree.style.visibility = "hidden";
              mytext="GAME OVER ... Press any key to try again";
              welcomeText.textContent="";
              setInterval(type,100);
              next.style.visibility="hidden";
              choice.forEach(element => {
                element.style.visibility="hidden";
              })
              mytimer.textContent="GAME OVER";
              if (points.textContent==="POINTS"){
                points.textContent=0;
              }
            }
          },{once:true})
        }
      })
      
    })
  }
  let playerPoints=document.querySelector("#points")
  let points=0;
  let minutes = 3;
  let seconds = 0;
  let num = 1;
  let mytimer = document.querySelector("#timer");
  let lifeone = document.querySelector("#lifeone");
  let lifetwo = document.querySelector("#lifetwo");
  let lifethree = document.querySelector("#lifethree");
  let name = document.querySelector("#name");
  let welcomeText=document.querySelector("#welcome");
  let mytext=`Hello ,welcome to Quest of Codeon! Your adventure begins...  Press any key to start `
  let start=document.querySelector("#start");
  let  interval;
  let quiznum=0;
  let next = document.querySelector("#next");
  let choice=document.querySelectorAll(".choice");

  /*start.addEventListener("click",(event)=>{
    interval = setInterval(timer, 1000);
    start.style.visibility="hidden";
    fetchData(quiznum);
    quiznum++;
    next.style.visibility="visible";
  })*/
  document.addEventListener("keydown",(event)=> {
    num=1;
    if(!interval){
      interval = setInterval(timer, 1000); 
    }
    fetchData(quiznum);
    quiznum++;
    next.style.visibility="visible";
    choice.forEach(element => {
      element.style.visibility="visible";
    })
    welcomeText.style.visibility="hidden";

  })
  next.addEventListener("click",(event)=>{
    if (quiznum===6){
      quiznum=0;
      welcomeText.textContent="Press any key try again";
      next.style.visibility="hidden";
      choice.forEach(element => {
        element.style.visibility="hidden";
      })
    }
    fetchData(quiznum);
    quiznum+=1;

  })
  mytimer.textContent = `${minutes} : ${seconds <10 ? '0' + seconds: seconds} `;
  let speed = 75;
  let i = 0;

  function type() {
    if (i < mytext.length) {
      welcomeText.textContent+=mytext[i];
      i++;
    }
    else{
      //start.style.visibility="visible";
      clearInterval(typeInterval);
    }

  }
  let typeInterval=setInterval(type,speed);

  function timer() {
    if (seconds === 0 && minutes !== 0) {
        seconds = 59;
        minutes -= 1;
    } 
    else {
      seconds -= 1;
    }
    if(num!==3){
      mytimer.textContent = `${minutes} : ${seconds < 10 ? '0' + seconds : seconds}`;
    }
    
    if (minutes === 0 && seconds === 0) {
        if (num === 1) {
            lifeone.style.visibility = "hidden";
            minutes = 3;
        } else if (num === 2) {
            lifetwo.style.visibility = "hidden";
            minutes = 3;
        } else if (num === 3) {
            lifethree.style.visibility = "hidden";
            mytimer.textContent=0;
            clearInterval(interval);     
        }
        num += 1;
    }
}
})