{
  function GetRandom(mytotalitem)
{

   let athletes = new Array(mytotalitem); 
    for  (let i=0; i<mytotalitem; i++)
        {           

         athletes[i]=Math.floor((Math.random() * 100) + 1);                           

        } 
    return athletes;          

}
const totalitem = Number(prompt("Количество  элементов  ?", ""));
console.log('Количество элементов  ?: ', totalitem);
if (!isNaN(totalitem))
 {   
   console.log(GetRandom(totalitem));     
 }
 else 
 {
   console.log('Ошибка !!!! Должен бить целый числа  ');
 }
}