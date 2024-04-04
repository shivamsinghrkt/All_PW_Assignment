// Q1. Write a JavaScript function called outerFunction that takes a parameter and returns an inner function.
// The inner function should access both the parameter of outerFunction and a variable declared within
// outerFunction. Demonstrate how lexical scoping allows the inner function to maintain access to these
// variables even after outerFunction has finished executing. 


function outerFunction(arr){
    var target = 4;
    function inner_Function(){
    if(arr.includes(target)){
       
       return true;
    }else{
       return false;
    }
}
    return  inner_Function
        
}

 res = outerFunction([2,3,46,56,4]);
console.log(res())