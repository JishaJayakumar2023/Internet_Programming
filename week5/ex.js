//function myInterval()
//{
  //  var element= document.getElementById('circle');
    //var circleOapacity=element.style.opacity;
    //element.style.opacity=circleOapacity - 0.01;
//}
//function myClickEvent()
//{
  //  setInterval(myInterval,10);

//}
//function  myKeyDown(){
  //  var element = document.getElementById('circle');
    //var positionLeft =element.offsetLeft;
    //element.style.left = positionLeft - 10 +'px';
//}
function myKeyDown(event)
{
console.log(event.keyCode);
}
//document.addEventListener('keydown',myKeyDown);
function myLoadEvent()
{
//var element=document.getElementById('circle');
//element.addEventListener('click',myClickEvent);
//element.style.opacity =1;
document.addEventListener('keydown',myKeyDown);

}
document.addEventListener('DOMContentLoaded',myLoadEvent);


