const maiorOuIgual = (number_1, number_2) => {
    number_1 = Number.parseFloat(number_1);
    number_2 = Number.parseFloat(number_2);

    return number_1 >= number_2 ? true: false;
}

console.log(maiorOuIgual("2",5));
console.log(maiorOuIgual("14.5", "15"));
console.log(maiorOuIgual(2.5, 2.5));