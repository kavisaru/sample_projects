  const date=new Date();
  const hour=date.getHours();
  const button=document.querySelector('button');
  const messagearea=document.querySelector('#message');
  button.addEventListener('click', function(){
    if(hour>12){
      messagearea.innerHTML='<h1>Good Afternoon!</h1>';
    } else if(hour>17){
      mesaagearea.innerHTML='<h1>Good Evening!</h1>';
    } else{
      messagearea.innerHTML='<h1>Good Morning!</h1>';
    }
    
  })