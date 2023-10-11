const estaEntre = (number, mininum, maximum, inclusive = false) =>{
    if(inclusive){
        return number >= mininum && number <= maximum ? true: false;
    }
    else{
        return number > mininum && number < maximum ? true: false;
    }
}

console.log(estaEntre(10, 50, 100));
console.log(estaEntre(16, 100, 160));
console.log(estaEntre(3, 3, 150));
console.log(estaEntre(3, 3, 150, true));
console.log(estaEntre(55, 50, 100));
console.log(estaEntre(50, 50, 100));
console.log(estaEntre(50, 50, 100, true));