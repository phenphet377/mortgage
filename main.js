'use strict';
  
    
    function first(){
          let amount = Number(document.getElementById('amount').value);
          let term = Number(document.getElementById('term').value);
          let rate = Number(document.getElementById('rate').value);
           let selected = document.querySelector('input[name="meet"]:checked');


                  const display1 = document.querySelector('.Bb')
     const display2 = document.querySelector('.D')
            const setDisplay1 =  value=> display1.textContent = value;
            const setDisplay2 = value=> display2.textContent = value;

                

               let t = term *12;
               let r = rate/(1200);

                    let m = amount * ( ( r* ((1+r)**t))/( ((1+r)**t) - 1))
                    let T = m * t;
                       
                    let I = T- amount;
                    let Im = I/t
                       
                
                           
                   if(selected.value === 'Repayment'){
                    setDisplay1("$" + m.toFixed(3))
                    setDisplay2( "$ " + T.toFixed(3))}
                    else{
                    setDisplay2("$" + I.toFixed(3))
                    setDisplay1("$" + Im.toFixed(3))}
    }
      function change(){
        document.querySelector('.twoBack').style.zIndex = 3
        document.querySelector('.twoFront').style.zIndex = 1
      }




const submit = document.querySelector('.submit') 

     submit.addEventListener('click', e=>{
        e.preventDefault();
       
        first();
        change();

         
     })


    
