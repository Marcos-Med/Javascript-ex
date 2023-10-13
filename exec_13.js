const filtrarNumeros = function(array){
    const new_array = array.filter(element => typeof element === 'number');

    return new_array;
}

console.log(filtrarNumeros([1,2 ,"Javascript", 100, "JS", "Php", []]));
console.log(filtrarNumeros([1,2,3,4,5,6,7, [], {}]));
console.log(filtrarNumeros(['a', 'b']));