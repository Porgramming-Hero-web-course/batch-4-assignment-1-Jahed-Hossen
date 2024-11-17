{
let sumArray:number[]=([1, 2, 3, 4, 5]);
let result = sumArray.reduce((h1:number,h2:number):number=>{
 return h1+h2;
} );

console.log(result);
}