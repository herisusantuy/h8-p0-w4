// Logic Challenge - Ubah Huruf
/*Problem
Diberikan function ubahHuruf(kata) yang akan menerima satu parameter berupa string. 
Functiona akan me-return sebuah kata baru dimana setiap huruf akan digantikan dengan huruf alfabet 
setelahnya. Contoh, huruf a akan menjadi b, c akan menjadi d, k menjadi l, dan z menjadi a.

Code
*/
function ubahHuruf(kata) {
  // you can only write your code here!
  var alphabet = 'abcdefghijklmnopqrstuvwxyz'
  var hasil = ''

  for (var i = 0; i < kata.length; i++){
    //   console.log ('Iterasi i ke- '+i+' '+kata[i])
      for (var j = 0; j < alphabet.length; j++){
          if (kata[i] === alphabet[j]){
              hasil += alphabet[j+1]
             
          }
        //   console.log (hasil+' Iterasi j ke- '+j+' '+alphabet[j])
      }
  }
  return hasil
}
ubahHuruf('wow')
// TEST CASES
// console.log(ubahHuruf('wow')); // xpx
// console.log(ubahHuruf('developer')); // efwfmpqfs
// console.log(ubahHuruf('javascript')); // kbwbtdsjqu
// console.log(ubahHuruf('keren')); // lfsfo
// console.log(ubahHuruf('semangat')); // tfnbohbu