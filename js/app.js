//task1

var time=new Date();
var h=time.getHours();


    if  (h>6 && h<=12) {
    alert('Sabahiniz xeyir');
    document.body.style.backgroundColor='pink'
    }

 else if(h>12 && h<=18){
     alert('Gunortaniz  xeyir');
     document.body.style.backgroundColor='blue'
   }
else{
    alert('axsaminiz xeyir')
    document.body.style.backgroundColor='black'
   
}




 
    //task2

     var r=2;
     var s=r*r*Math.PI;
    console.log(s);

    //task3
    
  function mode() {
     var body=document.body;
      var button=document.getElementById('btn')
     if (body.style.backgroundColor==='black') {
     body.style.backgroundColor='white'
      body.style.color='black'
     button.innerHTML='Dark mode'
      button.style.backgroundColor='black'
      button.style.color='white'
    }
     else{
     body.style.backgroundColor='black'
    body.style.color='white'
     button.innerHTML='Light mode'
     button.style.backgroundColor='white'
    button.style.color='black'
    }
  }

 