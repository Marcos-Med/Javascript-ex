const objetoParaArray = object => Object.entries(object);

console.log(objetoParaArray({nome: 'Ana', idade: 18, curso: {
    tipo: 'Ciencia da Computação',
    turno: 'Noturno'
}}))

console.log(objetoParaArray({nome: 'Marcos', idade: 20, profissao: 'Desenvolvedor de Software'}));