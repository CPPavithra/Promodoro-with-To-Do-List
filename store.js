/*const txt1=document.getElementById('focusTime');
const txt2=document.getElementById('breakTime');
const btn1=document.getElementById('btn1');
const out1=document.getElementById('output1');
const out2=document.getElementById('output2');

function fun1(){
   out1.innerHTML=txt1.value;
   out2.innerHTML=txt2.value;
}

btn1.addEventListener('click',fun1);*/

function saveData()
{
let focusTime,breakTime;
focusTime=document.getElementById("focusTime").value;
breakTime=document.getElementById("breakTime").value;

localStorage.setItem("focusTime",focusTime)
localStorage.setItem("breakTime",breakTime)
}
    



