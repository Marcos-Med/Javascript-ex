const receberPrimeiroEUltimoElemento = array => {
    const new_array = [];
    new_array.push(array[0]);
    new_array.push(array[array.length - 1]);

    return new_array;
}

console.log(receberPrimeiroEUltimoElemento([7,9,12,14]));
console.log(receberPrimeiroEUltimoElemento([7,9,12,"olá"]));
console.log(receberPrimeiroEUltimoElemento([7,9,12,14, "aplicativo"]));
console.log(receberPrimeiroEUltimoElemento([7,9,12,14, "aplicativo", -110]));