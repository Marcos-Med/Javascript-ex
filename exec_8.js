const multiplicar = (number_1, number_2) => {
    
    if(number_1 < 0  || number_2 < 0){
        return 'Valores Inválidos!';
    }
    
    let resultado = 0;
    for(let i = 0; i < number_2; i++){
        resultado += number_1;
    }

    return resultado;
}

console.log(multiplicar(5,5));
console.log(multiplicar(-1, -2));
console.log(multiplicar(0,7));
console.log(multiplicar(2,3));

