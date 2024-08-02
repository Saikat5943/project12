let hr=document.getElementById('hour');
let min=documnet.getElementById('min');
let sec=documnet.getElementById('sec'); 
function displayTime(){
    let date=new Date();
    //Getting hour,mins,secs from date
    let hh=date.getHours();
    let mm=date.getUTCMinutes();
    let ss=date.getSeconds();
    let hRotation=30*hh + mm/2;
    let mRotation=6*mm;
    let sRotation=6*ss;
    hr.style.transform= `rotate(${hRotation}deg)`;
    min.style.transform=`rotate(${mRotation}deg)`;
    sec.style.transform=`rotate(${sRotation}deg)`;

}
setInterval(displayTime,1000);