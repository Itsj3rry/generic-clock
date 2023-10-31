//Refresh Page Every 30 Seconds
function updateTime(){
 //Declaring AM/PM Var
 let apm
 //Getting The Hour
 const d = new Date();
 let hour = d.getHours();
 //Getting The Minutes
 let minute = d.getMinutes();
 //Final Time
 if (minute<10){
  minute=("0" + minute).slice(-2);
 }
 if (hour>12) {
  hour=hour-12;
  apm=' pm'
 }
 else {
  apm=' am'
 }
 document.getElementById('time').innerHTML = hour+':'+minute+' '+apm;
}
setInterval(updateTime, 30000);
