
const removerPropriedade = function(object, proprety){
    const keys = Object.keys(object);
    const new_object = {};

    for(let i = 0; i < keys.length; i++){
        new_object[keys[i]] = object[keys[i]];
    }

    delete new_object[proprety];

    return new_object;
}



const obj = {nome: 'Ana', idade: 18};

console.log(Object.keys(obj));

console.log(removerPropriedade(obj, 'idade'));

console.log(obj);