function calcularSalário(dias_trabalhados, salario_hora){
    let salario = dias_trabalhados * salario_hora;

    return `Salário igual a R$${salario.toFixed(2).toString().replace(".", ",")}`;
}

console.log(calcularSalário(150, 40.5))
console.log(calcularSalário(20, 100.33));