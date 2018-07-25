// Logic Challenge - Check AB
/*Problem
Diberikan sebuah function checkAB(str) yang menerima satu parameter berupa string. function tersebut mengembalikan nilai true jika di dalam string tersebut terdapat karakter a dan b yang memiliki jarak 3 karakter lain minimal satu kali. Jika tidak ditemukan sama sekali, kembalikan nilai false.

Code
*/
function checkAB(num) {
  // you can only write your code here!
  var arrSatu = num.split ('')
  var arrDua = []
  for (var i =0; i < arrSatu.length; i++){
      if (arrSatu[i] !==' '){
          arrDua.push(arrSatu[i])
      }
  }
  for (var a=0; a < arrDua.length; a++){
      if (arrDua[a] === 'a'){
          for (var b=a; b <= (a+3);b++){
              if (arrDua[b] === 'b'){
                  return true
              }
          }
      }
  }
  return false
}

// TEST CASES
console.log(checkAB('lane borrowed')); // true
console.log(checkAB('i am sick')); // false
console.log(checkAB('you are boring')); // true
console.log(checkAB('barbarian')); // true
console.log(checkAB('bacon and meat')); // false