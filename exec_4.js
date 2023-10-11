const nomedoMes = number => {
    let mes = ['Janeiro', 'Fevereiro', 'Março', 'Abril',
                'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro',
                'Outubro', 'Novembro', 'Decembro'];
    
    return mes[number - 1];
}

console.log(nomedoMes(1));
console.log(nomedoMes(3));
console.log(nomedoMes(13));
console.log(nomedoMes(0));