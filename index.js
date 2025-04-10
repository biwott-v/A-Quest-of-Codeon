document.addEventListener("DOMContentLoaded",()=>{
    let minutes=3,seconds=0;
    let mytimer=document.querySelector("#timer");
    let lifeone=document.querySelector("#lifeone");
    let lifetwo=document.querySelector("#lifetwo");
    let lifethree=document.querySelector("#lifethree");
    mytimer.textContent=`${minutes} : ${seconds}`;
    console.log("hello")
    function timer(){
       if(seconds===0 && minutes!==0){
        seconds=59;
        minutes-=1;
       }
       else {seconds-=1;}
       mytimer.textContent=`${minutes} : ${seconds <10 ? '0' + seconds : seconds}`;
       if(minutes===0 && seconds===0){
        if(num===1){
         lifeone.style.visibility="hidden";
         minutes=3;
        }    
        else if(num===2){
         lifetwo.style.visibility="hidden";
         minutes=3;
        }
        else if(num===3){
         lifethree.style.visibility="hidden";
         lose.syle.visibility="visible";
         clearInterval(interval)
        }
        num+=1;
      }    
    }
    interval=setInterval(timer,1000);
})