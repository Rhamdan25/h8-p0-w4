function digitPerkalianMinimum(angka) {
 
    var sementara =0
    var hitungDigit =[]
    for (a=1;a<angka+1;a++){ 
        sementara = angka/a
        if (sementara-Math.floor(sementara)===0){
            hitungDigit.push(sementara.toString()+a.toString())
        }
    }
    // console.log(hitungDigit)
    var terkecil = hitungDigit[0].length
    for (a=0;a<hitungDigit.length;a++){
        if ( hitungDigit[a].length < terkecil){
            terkecil = hitungDigit[a].length
        }
    } return terkecil
}
  
  // TEST CASES
  console.log(digitPerkalianMinimum(24)); // 2
  console.log(digitPerkalianMinimum(90)); // 3
  console.log(digitPerkalianMinimum(20)); // 2
  console.log(digitPerkalianMinimum(179)); // 4
  console.log(digitPerkalianMinimum(1)); // 2