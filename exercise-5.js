//Ubah Huruf


function ubahHuruf(kata) {
    var huruf = 'abcdefghijklmnopqrstuvwxyz'
    var kataBaru = ''

    for (a=0;a<kata.length;a++){
        for (b=0;b<huruf.length;b++){
            if (huruf[b]===kata[a]&&kata[a]==='z'){
                kataBaru += huruf[0]
            } else if (huruf[b]===kata[a]){
                kataBaru += huruf[b+1]
            }
        }
    }
    return kataBaru
}
  
   // TEST CASES
   console.log(ubahHuruf('wow')); // xpx
   console.log(ubahHuruf('developer')); // efwfmpqfs
   console.log(ubahHuruf('javascript')); // kbwbtdsjqu
   console.log(ubahHuruf('keren')); // lfsfo
   console.log(ubahHuruf('semangat')); // tfnbohbu