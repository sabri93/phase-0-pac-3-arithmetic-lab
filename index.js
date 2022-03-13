
 
function add(a, b ){
    var result = a+b;
   return result; 
}

function subtract(a, b){
   var result = a-b;
   return result;
}

function multiply(a, b){
  var result = a*b;
  return result;
}
function divide(a, b){
   var result = a/b;
   return result;
}

function increment(n){
  return n+=1; 

}

function decrement(n){
 return n-=1;
}

function makeInt(string){
   return parseInt(string, 10);

}
function preserveDecimal(string){
    return parseFloat(string, 10);
}