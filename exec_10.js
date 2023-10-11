const simboloMais = number => {
    let string = '';
    for(let i = 0; i < number; i++){
        string += '+';
    }

    return string;
}

console.log(simboloMais(3));
console.log(simboloMais(7));
console.log(simboloMais(10));
console.log(simboloMais(2));