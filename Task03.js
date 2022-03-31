{
    /* функция добовление или удаление +1 -1 " */

   function get_even_or_odd_data(m,n,mydata)
   {
     if (m == n)
      {
        mydata=-1;  //Неn возможноcnm найти если m=n
      }
     else 
    if (mydata < n)
     {
          mydata ++;
     }    
    else if (mydata == n)
     {
          mydata--;
     }        
     return mydata;  
  }

  function GetRandom(mytotalitem,m,n,myoption)
  {
      
    let athletes = new Array(mytotalitem); 
    console.log(myoption);
   for  (let i=0; i<mytotalitem; i++)
     { 
        let mydata=Math.floor((Math.random() * (n - m) + m) + 1);          
        if (myoption=='even')
           {
            if (mydata % 2==0)
            {
                athletes[i] = mydata;                                    
            }
          else 
            {
                athletes[i] = get_even_or_odd_data(m,n,mydata);         // +1   -1 делаем  если m != n                               
            }
           }
           else if (myoption=='odd')
           {
            if (mydata % 2==0)
             {
                athletes[i] = get_even_or_odd_data(m,n,mydata);     // +1   -1 делаем  если m != n                               
             }
          else 
            {
                athletes[i]=mydata;                                    
            } 
         }
           
           else 
           {
            athletes[i]=mydata;                           
           }                 
            
      } 
    return athletes;          
  }

   const totalitem2 = Number(prompt("Количество  элементов  ?", ""));
   console.log('Количество элементов  ?: ', totalitem2);

   let m = Number(prompt("Первый интервал  ?", ""));
   console.log('Первый интервал  ?: ', m);
 
   let n = Number(prompt("Второй интервал  ?", ""));
   console.log('Второй интервал  ?: ', n);

   const even_or_add = prompt("Even[even] or Odd-[odd] or Все/ [all] ?", "");
   console.log('Even or Add  ?: ', n);
 
   if ( m > n )       //Если значение n больше чем m меняем значение
    { 
           let temp = m;
           m = n;
           n = temp;
   }

  
    console.log(GetRandom(totalitem2,m-1,n,even_or_add));     
}
   