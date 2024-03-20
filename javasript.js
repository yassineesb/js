let myString = "Customizing Neovim on Linux Ubuntu 22.04 involves configuring its settings, installing plugins, and possibly tweaking the appearance. Here's a basic guide:Install Neovim: If you haven't already installed Neovim, you can do so via the terminal using:"

function reverseString (param) {
    let car = ""
    let words = []

        for(let i = 0 ; i < param.length ; i++){

            car =  car + param[i]
            console.log(car)


            if(param[i] == " "){
                console.log(car)
                words.push(car)
                car = ""
            }

        }
        return words
}

console.log(reverseString(myString))






function addition (a,b){
  return a + b
}


console.log(addition(1,3))
console.log(addition(3,5))


console.log("---------------------------------------------")


let myArr = [1,8,9,7,89,5,230,98,678,90,65,45,0,1000]




function findMax (arr) {
  let max = arr[0]
  for (let i = 0;i<arr.length;i++){
      if(arr[i] > max){
          max = arr[i]
      }
  }
  return max
}
console.log("max======++++>",findMax(myArr))


function findMin(arr){

  let min = arr[0]

  for(let i = 0 ; i < arr.length ; i++){
      if(arr[i] < min){
          min = arr[i]
      }
  }
  return min
}


console.log("min ============++++> ;" ,findMin(myArr))










function addition (a,b){
  return a + b
}


console.log(addition(1,3))
console.log(addition(3,5))


console.log("---------------------------------------------")


let myArr = [1,8,9,7,89,5,230,98,678,90,65,45,0,1000]




function findMax (arr) {
  let max = arr[0]
  for (let i = 0;i<arr.length;i++){
      if(arr[i] > max){
          max = arr[i]
      }
  }
  return max
}
console.log("max======++++>",findMax(myArr))


function findMin(arr){

  let min = arr[0]

  for(let i = 0 ; i < arr.length ; i++){
      if(arr[i] < min){
          min = arr[i]
      }
  }
  return min
}


console.log("min ============++++> ;" ,findMin(myArr))














//Reverse a String: Write a function that reverses a given string.

function sumOfArr (arr){
  let result = 0 ;
  for(let i = 0 ; i < arr.length ; i++){
          result = arr[i] + result
  }
  return result
}
console.log(sumOfArr(myArr))






let myVoid = [1,3,77,56,99,66,46,34,12,90]

function filterEven (arr){
    let evenNumber = []
    for(let i = 0 ; i < arr.length ; i++){
        if(arr[i] % 2 == 0){
            evenNumber.push(arr[i])
        }
    }
    return evenNumber
}
console.log(filterEven(myVoid))

// Factorial: Write a function to calculate the factorial of a given number.
function factor (num){
    let factorial = 1
    for(let i = num ;i > 0 ; i--){
        factorial = factorial * i
    }
    return factorial
}
console.log(factor(20))










function reverseString (str){
  let result = ""
  for(let i = str.length -1 ; i >= 0 ; i--){
          result = result +  str[i]
  }
  return result
}

console.log(reverseString("hello from sellycon valley"))








function capitalase(str){
  let result = []
  let word = ""
  for(let i = 0 ; i < str.length;i++ ){
      if(str[i] != " "){
          word = word + str[i]
      }else{
          result.push(word)
          word = ""
      }
  }
  result.push(word)
   return result
}
console.log(capitalase("hello world from casa"))











function capitalase(str){
  let result = []
  let word = ""
  for(let i = 0 ; i < str.length;i++ ){
      if(str[i] != " "){
          word = word + str[i]
      }else{
          result.push(word)
          word = ""
      }
  }
  result.push(word)

  for(let i = 0 ; i < result.length ; i++){
       result[i][0] = result[i][0].toUpperCase()
       console.log(result[i][0].toUpperCase())
  }
  return result
}
console.log(capitalase("hello world from casa"))







// var myage = 19 ;
// var myName = "yassine"
// console.log(myName)
// if (myage>18){
// console.log("majeur")

// }
// else{
// console.log("mineur")

// }

// var present = true


// if(present==true){
// console.log("present")

// }

// else{
// console.log("not present")

// }  

//var mark = 100

//if(0<mark&&mark<30){
  //  console.log("E");
//}
//else if (30<mark&&mark<60){
    //console.log("D");
//}
//else if (60<mark&&mark<90){
  //  console.log("c");
//}
//else if (90<mark&&mark<120){
  //  console.log("B");
//}
//else if (120<mark&&mark<150){
   // console.log("A");
//}








//for (var i=1;i<=10;i++)
  // if(i%2 != 0){
    //console.log(i)
   //}




   















