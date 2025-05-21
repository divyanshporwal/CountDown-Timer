let x;
function startCountDown(){
    const startInput=document.getElementById("startDate").value;
    const endInput=document.getElementById("endDate").value;

    if (!startInput || !endInput) {
            alert("Please enter both start and end dates.");
            return;
    }

    const endDate = new Date(endInput).getTime();
    const startDate=new Date(startInput).getTime();

    if(startDate>endDate){
        alert("startDate should need to be smaller");
        return;
    }


    clearInterval(x);

    function updateTimer(){
        const currDate=new Date().getTime();

        const timeCovered=currDate-startDate;
        const timeRemaining=endDate-currDate;

        const oneDayInMilliSeconds=24*60*60*1000;
        const oneHourInMillis=60*60*1000;
        const oneMiniteInMilliSeconds=60*1000;
        const oneSecondInMillis=1000;

        const days=Math.floor(timeRemaining/oneDayInMilliSeconds);
        const hours=Math.floor((timeRemaining%oneDayInMilliSeconds)/oneHourInMillis);
        const mins=Math.floor((timeRemaining%oneHourInMillis)/oneMiniteInMilliSeconds);
        const secs=Math.floor((timeRemaining%oneMiniteInMilliSeconds)/oneSecondInMillis);

        document.getElementById("days").innerHTML=days;
        document.getElementById("hrs").innerHTML=hours;
        document.getElementById("mins").innerHTML=mins;
        document.getElementById("secs").innerHTML=secs;

        const totalDistance=endDate-startDate;
        const percentage=(timeCovered/totalDistance)*100;
        document.getElementById("progress-bar").style.width=percentage+"%";

        if(timeRemaining<0){
            clearInterval(x);
            document.getElementsByClassName("counters")[0].innerHTML="EXPIRED";
            document.getElementById("progress-bar").style.width="100%";
        }
    }

    x=setInterval(updateTimer,1000);
}