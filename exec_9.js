const repetir = function (elemento, repeticoes){
    let array = [];
    for(let i = 0; i < repeticoes; i++){
        array.push(elemento);
    }

    return array;
}

console.log(repetir(7,3));
console.log(repetir('console', 7));
console.log(repetir({}, 4));