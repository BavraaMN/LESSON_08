{
        function GetRandom(mytotalitem,m,n)
   {
     let athletes = new Array(mytotalitem); 

     for  (let i=0; i<mytotalitem; i++)
        {           

         athletes[i]=Math.floor((Math.random() * (n - m) + m) + 1);                           

        } 
     return athletes;          
   }

   const totalitem2 = Number(prompt("Количество  элементов  ?", ""));
   console.log('Количество элементов  ?: ', totalitem2);

   let m = Number(prompt("Первый интервал  ?", ""));
   console.log('Первый интервал  ?: ', m);

   let n = Number(prompt("Второй интервал  ?", ""));
   console.log('Второй интервал  ?: ', n);
    
     if ( m > n )       //Если значение n больше чем m меняем значение
      { 
              let temp = m;
              m = n;
              n = temp;
      }


   console.log(GetRandom(totalitem2,m-1,n));     
    }