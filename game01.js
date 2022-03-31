{
    const closecommand='отмена'; 
    let enteredcommand='';
    let myrandom=-1;
    do
    {      
        if (myrandom==-1) 
        {
           myrandom=Math.floor(Math.random()*100)+1;
           console.log(' Загадка число '+myrandom); 
           alert(' Загадка число '+myrandom) ;     
        }

          const totaleuro=prompt('Какой число загадываете чтобы закончить игру используете слова "Отмена" ?', "");          
          if (totaleuro.toLowerCase() == closecommand)
          {
            console.log('Игра финиш!');
            alert('Игра финиш') ;
            break;         
          }
          else if (!(/^\d+$/.test(totaleuro)))
          {          
             console.log('Введите число!');
             alert('Введите число!');
          }
            else  if (Number(totaleuro) > myrandom)
              {
                 console.log('Меньше!');
                 alert('Меньше!');
              }
              else if (Number(totaleuro) < myrandom)
              {
                console.log('Больше!');
                alert('Больше!');
              }
              else 
              {
                  myrandom=-1;
                 console.log("Правильно!");
                 alert('Правильно!');            
               }                
               
     } 
   while (true)
 }
