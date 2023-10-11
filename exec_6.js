function inverso(param){
    if(typeof param != 'boolean' && typeof param != 'number'){
        return `booleano ou número esperados, mas o parâmetro é do tipo ${typeof param}`;
    }
    else if(typeof param == 'boolean'){
        return param ? false: true;
    }
    else{
        return param * (-1);
    }
}

console.log(inverso(1));
console.log(inverso('param'));
console.log(inverso(true));
console.log(inverso(-200));
console.log(inverso({}));