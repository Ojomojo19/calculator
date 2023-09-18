// function toCamelCase(str){
//     let result = '';
//     let prev;
//     for(let i = 0; i < str.length; i++){
//         if(str[i] == "-" || str[i] == "_" || str[i] == " "){
//             result += str[i + 1].toUpperCase();
//             i++;
//         }else{
//             result += str[i];
//         }
//     }
//     console.log(result);

// }
// toCamelCase("The-Stealth-Warrior")

// function narcissistic(value) {
//     let result = 0;
//     value = value.toString();

//     for (let i = 0; i < value.length; i++) {
//         result += Math.pow(parseInt(value[i]), value.length) ;
//     }
//     if (value == result){
//         return true;
//     }else{
//         return false;
//     }
// }
  
// console.log(narcissistic(1652));

// function disemvowel(str) {

// }

// const disemvowel = str => { str = str.replace(/([aeiouAEIOU])/g, ""); return str;}

function isPrime(num) {
    if(num > 1){
        let res;
        for(let i = 2; i < num; i++){
           Math.sign(num)!= '-1' && !isEven(num) ? console.log(true) :  console.log(false);
        }
        // return res;
    }
    return false;
}

function isEven(num){
    if(num > 2 && num % 2 == 0){
        return true;
    }else return false
}

console.log(isPrime(2));
//.join('')