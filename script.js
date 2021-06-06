function updateclock(){
    var currentDate = new Date()
    var hours = currentDate.getHours();
    var minutes = currentDate.getMinutes();
    var seconds = currentDate.getSeconds();
    if(seconds < 10){
        seconds = "0"+seconds;}
    if(minutes < 10){
            minutes = "0"+minutes;}
    if(hours < 10){
             hours = "0"+hours;}
    document.getElementById('clock').innerHTML = hours + ":" + minutes + ":" + seconds }
   
    
      
    setInterval(updateclock, 1000)

