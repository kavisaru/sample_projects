const buttons=document.querySelectorAll('.button');
const body=document.querySelector('body');
console.log(buttons);
buttons.forEach(function(button){
  button.addEventListener('click',function(c){
     console.log(c.target);
if(c.target.id==='grey'){
   body.style.backgroundColor=c.target.id; }
if(c.target.id==='thistle'){
   body.style.backgroundColor=c.target.id;}
if(c.target.id==='tan'){
  body.style.backgroundColor=c.target.id;}
if(c.target.id==='steelblue'){
  body.style.backgroundColor=c.target.id;}
      })
})
