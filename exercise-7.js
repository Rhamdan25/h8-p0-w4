//Mengurutkan Abjad

function urutkanAbjad(str) {
    // you can only write your code here!
    tempArray = []
    for (var i = 0; i < str.length; i++) {
        tempArray.push(str[i])
    }
    tempArray.sort()
    tempString = ''
    for (var i = 0; i < tempArray.length; i++) {
        tempString += tempArray[i]
    }
    return tempString
}

// TEST CASES
console.log(urutkanAbjad('hello')); // 'ehllo'
console.log(urutkanAbjad('truncate')); // 'acenrttu'
console.log(urutkanAbjad('developer')); // 'deeeloprv'
console.log(urutkanAbjad('software')); // 'aeforstw'
console.log(urutkanAbjad('aegis')); // 'aegis'