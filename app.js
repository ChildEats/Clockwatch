// es6-->var-->let,const
// eventlistener -> click, doubleclick, scroll, key;
const time = document.getElementsByTagName('h1')[0];
const start = document.querySelector('.start');
const stop = document.querySelector('.stop');
const reset = document.querySelector('.reset');
const lap= document.querySelector('.lap');
const ol = document.getElementsByTagName('ol')[0]
let second=0,minute=0,hour=0,dool=0;
let st;
function watch(){
    dool++;
    if(dool==100){
        second++
        dool=0
        if(second==60){
            minute++;
            second=0;
            if(minute==60){
                hour++
                minute=0;
            }
        }
    }
    let s =second<10 ? "0"+second : second;
    let m =minute<10 ? "0"+minute : minute;
    let h =hour<10 ? "0"+hour : hour;
    let d =dool<10 ? "0"+dool : dool;
    time.innerText =h+":"+m+":"+s+":"+dool;
}
/* setTimeout clearTimeout => 1 udaa 1 ajilna
setInterval clearInterval => hyzagaargui ajilna*/
start.addEventListener('click',()=>{
    st=setInterval(watch,10)
    document.querySelector(".start").disabled = true;
    document.querySelector(".stop").disabled = false;
})
stop.addEventListener('click',()=>{
    clearInterval(st);
    document.querySelector(".stop").disabled = true;
    document.querySelector(".start").disabled = false;
})
reset.addEventListener('click',()=>{
    time.innerText="00:00:00:00";
    clearInterval(st);
    hour=0;
    minute=0;
    second=0;
    ol.innerText="";
    document.querySelector(".stop").disabled = true;
    document.querySelector(".start").disabled = false;
})
lap.addEventListener('click',()=>{
    let liEl = document.createElement('li')
    let s =second<10 ? "0"+second : second;
    let m =minute<10 ? "0"+minute : minute;
    let h =hour<10 ? "0"+hour : hour;
    liEl.innerText=h+":"+m+":"+s+":"+dool;
    ol.append(liEl);
})