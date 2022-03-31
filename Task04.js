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
 
   const array=[];
   for (let q = m; q <= n; q++)
  {
    if  ((q % 4) ==0 )
     {
         array.push(q);
     }
  }
   console.log(array);
}


