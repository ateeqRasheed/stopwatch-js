
let timerEl = document.getElementById('timer');
let stopEl = document.getElementById('stop');
let resetEl = document.getElementById('reset');
    let watchEl ;
    let miniSe = '00';
    let second = '0';
    let mint = '0';
    let hur= '0';
    let run = false;

    function stopWatch(){
    miniSe++;
    if (miniSe / 1000 ===1) {
      miniSe = 0;
      second++  
    }
    if(second / 60 ===1){
  second = 0;
        mint++
        if(mint / 60 ===1){
           mint=0;
            hur++;
          
        }
    } 
    
  
if (miniSe < 10) {
miniSe = '0' + miniSe
};
let se = second< 10 ? '0' + second : second;
let mi = mint< 10 ? '0' + mint : mint;
let hours = hur< 10 ? '0' + hur : hur;

//    }else{

//        leadS = second
//    }



    timer.innerHTML = `${hours}:${mi}:${se}:${miniSe}`;
    // console.log(second);
}
watch = setInterval(stopWatch,1);

function resetfu()
{
    
    // clearInterval(watch);
    miniSe = '00';
    second = '0';
    mint = '0';
    hur = '0';
    timer.textContent= "00:00:00:00";
    // stopEl.textContent= 'Start';

    run = false;

    // updatestart();
    
};



function updatestart(){
clearInterval(watch);
 
if (run) {
clearInterval(watch);
stopEl.textContent = 'Start';
run = false


}
else{
watch =setInterval(stopWatch, 1)
stopEl.textContent = 'Stop';
run = true
}  
}
updatestart();

resetEl.addEventListener('click' , resetfu)
stopEl.addEventListener('click' , updatestart);
