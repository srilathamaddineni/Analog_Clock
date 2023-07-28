const hourEl=document.querySelector(".hour");
const minEl=document.querySelector(".minute");
const secEl=document.querySelector(".second");


function updateClock(){
    const currentDate=new Date();
 
    const hour=currentDate.getHours();
    const minute=currentDate.getMinutes();
    const second=currentDate.getSeconds();
    const hourDeg=(hour/12)*360;
    hourEl.style.transform='rotate(${hourDeg}deg)';
    const minuteDeg=(minute/60)*360;
    minEl.style.transform='rotate(${minuteDeg}deg)';
    const secondDeg=(second/60)*360;
    secEl.style.transform='rotate(${secondDeg}deg)';
}
setInterval(updateClock,1000);
