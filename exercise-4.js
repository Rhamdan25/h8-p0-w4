//Cari Modus

function cariModus(arr) {
   var output = {}
   for(i=0; i<arr.length; i++){
       if (output[arr[i]]===undefined) {
            output[arr[i]]=1
       }
       else {
           output[arr[i]] += 1
       }
   }
    //console.log(output)



   //console.log(output[Object.keys(output)[?]]) //-> melihat value dari index
   //console.log(Object.keys(output)[?]) //-> melihat keys dari index
   //console.log(output[?])//-> melihat value dari key
   //console.log(Object.keys(output).length) //->melihat jumlah data dalam output
   var valueTerbesar = 0
   var posisiIndexTerbesar = 0
   for (i=0; i<Object.keys(output).length; i++){
       if (output[Object.keys(output)[i]]>valueTerbesar){
           valueTerbesar = output[Object.keys(output)[i]]
           posisiIndexTerbesar = i
       }
   }
   
   if (Object.keys(output).length < 2 || valueTerbesar<2){
        return -1
   } else {
        for (i=0; i<arr.length; i++){
            for (j=0; j<Object.keys(output).length; j++){
                if(output[arr[i]]===valueTerbesar){
                    return arr[i]
                }
            }
        }    
   }
}   

  // TEST CASES
   console.log(cariModus([10, 4, 5, 2, 4])); // 4
   console.log(cariModus([5, 10, 10, 6, 5])); // 5
   console.log(cariModus([10, 3, 1, 2, 5])); // -1
   console.log(cariModus([1, 2, 3, 3, 4, 5])); // 3
   console.log(cariModus([7, 7, 7, 7, 7])); // -1