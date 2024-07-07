let milli = 0;
let sec = 0;
let min = 0;
let hr = 0;

let timer = false;

function start(){
    timer = true;
    myFun();
}
function stop(){
    timer= false;
    myFun();
}
function reset(){
    timer= false;
    milli = 0;
    sec = 0;
    min = 0;
    hr = 0;
    updateDisplay();
}

function myFun(){
    if(timer == true){
        milli = milli + 1;
        if(milli == 100){
            sec = sec + 1
            milli = 0;
        }
        if(sec == 60){
            min = min + 1
            sec = 0;
        }
        if(min == 60){
            hr = hr + 1
            min = 0;
        }

        let getSec = sec;
        let getMin = min;
        let getHr = hr;

        if(sec < 10){
            getSec="0"+sec;
        }
        if(min < 10){
            getMin="0"+min;
        }
        if(hr < 10){
            getHr="0"+hr;
        }

        updateDisplay();
        setTimeout("myFun()",10 )

    }
}

function updateDisplay(){
    let getSec = sec < 10 ? "0" + sec : sec;
    let getMin = min < 10 ? "0" + min : min;
    let getHr = hr < 10 ? "0" + hr : hr;

    
         document.getElementById("milli").innerHTML=milli;
        document.getElementById("sec").innerHTML=getSec;
        document.getElementById("min").innerHTML=getMin;
        document.getElementById("hr").innerHTML=getHr;

}





