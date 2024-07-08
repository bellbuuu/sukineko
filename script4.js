var date=new Date();
var month=date.getMonth();
var day=date.getDay();
var year=date.getFullYear();

var months=["January","February","March","April","May","June","July","August","September","October","November","December"];
var title=document.querySelector(".title");
title.innerHTML="🌸"+ months[month] + "🌸";

var habittitle=document.querySelector(".habittitle");
habittitle.onclick= function(){
    let habits= prompt("whats ur habit?", habittitle.innerHTML="my new habit");
    if(habits.length ==0){
        habittitle.innerHTML="untitled";}
    else{ habittitle.innerHTML= habits;
    }
}

var daystotal=[31,28,31,30,31,30,31,31,30,31,30,31];
var daysthismonth=daystotal[month];

var daysdone=0;
var totaldays=document.getElementsByClassName(".totaldays");
var daycount=0;
var rowcount=0;
var days=document.getElementsByClassName("days");

for(var i=0; i<days.length;i++){
    var day=days[rowcount].getElementsByClassName("day");
    for(var j=0;j< day.length;j++){
        if(daycount == date-1){
            day[j].setAttribute("style","border:2px solid black");
        }
        if(daycount<daysthismonth){
            day[j].innerHTML=daycount+1;
            //day[j].setAttribute("class","day" + (daycount+1));
            daycount++;
        }else{
            day[j].innerHTML="";
            
        }
    }
    rowcount++;
}

var completed= new Array(31);
for(var i=0;i<daycount;i++){
    var tempstring=""+ (month+1)+"-"+ (i+1)+"-"+year;
    console.log("storing date: "+tempstring);
    var tempday=localStorage.getItem(tempstring);
    console.log(tempday);
    if(tempday==null || tempday== "false"){
        localStorage.setItem(tempstring,"false");

    } else if(tempday=="true"){
        daysdone++;
    }
    totaldays.innerHTML=daysdone + "/"+ daysthismonth;
}
console.log("completed array: "+completed);
console.log("total days completed: "+daysdone);
