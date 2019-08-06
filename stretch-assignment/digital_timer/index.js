let timer = document.getElementsByClassName('digit')

const time = Array.from(timer)

start();

function start(){
    begin();

    function begin(){
        let ms = 0;
        time[0].textContent="0";
        time[1].textContent="0";
        time[3].textContent="0";
        time[4].textContent="0";

        const timerInterval = window.setInterval(()=>{
            ms += 100; //10
            if(ms === 10000){ 
                endTimer(timerInterval)

            }
            updateTimer(ms);
        
        },100);//10
    }
}
 function increment (string){
     let number = Number(string) +1;
     return number.toString();
 }
 function endTimer(intervalId){
     clearInterval(intervalId);
  }

function updateTimer(ms){
    if(ms === 10000){
        time[0].textContent="1";
        time[1].textContent="0";
        time[3].textContent="0";
        time[4].textContent="0";
        time[0].style.color="red";
        time[1].style.color="red";
        time[2].style.color="red"
        time[3].style.color="red";
        time[4].style.color="red";
       
    }else if(ms % 1000 === 0){
        time[1].textContent=increment(time[1].textContent);
        time[3].textContent="0";
        time[4].textContent="0";
    }else if (ms % 100 === 0){
        time[3].textContent=increment(time[3].textContent);
    }else{
        time[4].textContent=increment(time[4].textContent);
    }
}

