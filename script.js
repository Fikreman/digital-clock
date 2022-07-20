function Time(){
    //date class
    let date=new Date();
    //get hour
    let hour=date.getHours();
    //get minute
    let minute=date.getMinutes();
    //get second
    let second=date.getSeconds();
    //AM and PM
    let timePeriod="";
    // assign AM and Pm
if (hour>=12){
    timePeriod="PM";
}
else{
    timePeriod="AM";

}
//converting the hour in 12-hour format
if(hour==0){
    hour=12;
}
else{
    if(hour>12){
        hour=hour-12;
    }
}
//updating hour, minute,second if less than 10
hour=update(hour);
minute=update(minute);
second=update(second);
// updating time elements to div
document.getElementById('digitalClock').innerText=hour+':'+minute+':'+second+':'+timePeriod;
    //set Timer
    setTimeout(Time,1000);
    //update time if the time is less than 10
    //apppend 0 before time elements
    function update(t){
        if (t<10){
            return "0"+t;
        }
        else{
            return t;
        }
    }
    
}
Time();