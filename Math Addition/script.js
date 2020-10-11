let firstno=parseInt(Math.random()*10);
let secondno=parseInt(Math.random()*10);
let total=firstno+secondno;
let primary=document.getElementById('primary');
primary.innerHTML=`<p>${firstno}</p>`;
let second=document.getElementById('second');
second.innerHTML=`<p>${secondno}</p>`;
let button=document.getElementById('btn');
button.addEventListener('click', function (){
 let math=document.getElementById('math'). value;
 math=Number(math);
 if (math==total){
   alert('correct');
   window.location.reload();
 } else{
   alert ('That is incorrect. The correct answer was '+total+'.');
   window.location.reload();
 }
})

