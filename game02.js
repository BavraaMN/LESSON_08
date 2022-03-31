
    const closecommand='отмена'; 
    let enteredcommand='';
    let myrandom=-1;
    const array=[];
    let reqtotalattempt=-1;
    let counter=0; 
    do
    {      
        if (myrandom==-1) 
        {

            let m = Number(prompt("Первый интервал  ?", ""));
            console.log('Первый интервал  ?: ', m);
            
            let n = Number(prompt("Второй интервал  ?", ""));
            console.log('Второй интервал  ?: ', n);
            
              if ( m > n )       //Если значение n больше чем m меняем значение нам это достаточно
              { 
                    let temp = m;

                    m = n;

                    n = temp;
              }           

           counter = 0;                     
           
             if (50 <= m && n <=100)
           {               
             reqtotalattempt=15;           
           }
           else 
           {
            reqtotalattempt =Math.round((n - m) * 0.3);             
             
           }

           console.log(' Всего шанс '+reqtotalattempt); 
           alert(' ЗВсего шанс '+reqtotalattempt) ;      


           myrandom=Math.floor((Math.random() * (n - m) + m) + 1);  //cлучайное число в этом диапазоне между m и n
           console.log(' Загадка число '+myrandom); 
           alert(' Загадка число '+myrandom) ;     
        }

          const totaleuro=prompt('Какой число загадываете (чтобы закончить игру используете слова "Отмена" ) ?', "");          
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
            else
            {
              if (reqtotalattempt==counter)
               {
                console.log('Вы исчерпали все шансы !');
                alert('Вы исчерпали все шансы !');
                myrandom=-1;
                counter=0;
               }

            if (myrandom != -1 && !array.includes(Number(totaleuro)))
             {
               array.push(Number(totaleuro));
              if (Number(totaleuro) > myrandom)
              {              
                counter=counter+1;
                console.log('Меньше!');
                 alert('Меньше!');
              }
              else if (Number(totaleuro) < myrandom)
              {
                counter=counter+1;
                console.log('Больше!');
                alert('Больше!');
              }
              else 
              {
                  myrandom=-1;
                  console.log("Правильно!");
                  alert('Правильно!');       
                  counter=0;     
               }                
             }  
              else if (myrandom != -1)
               {
                console.log("Это число вы уже вводили!");
                alert('Это число вы уже вводили!');            
               }
            }
               
     } 
   while (true)
