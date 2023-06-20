//aliases / custom types, aqui pode ser qualquer nome que você queira, desde que não seja
//uma keyword nem em js nem em ts e podemos usar para qualquer tipo
type Combinable = number | string;

//inclusive um literal types
type ConversionDescriptor = 'as-number' | 'as-text';

//Também queremos permitir que o chamador da função defina como o resultado será retornado
//então poderemos forçar uma conversão de número para string ou vice-versa

function combine(
//esses dois são union types - aceitam os dois tipos, daí colocamos nosso alias combinable que aceita os 2 tbm
    input1: Combinable, 
    input2: Combinable,
//isso é um literal type, literalmente ele só aceita um desses dois valores, dessa forma fica mais
//fácil percebermos caso tenhamos escrito algo errado... poderia usar enum também, mas como são 
//apenas 2 opções, podemos usar essa solução também 
    resultConversion: ConversionDescriptor
){
    let result;
    if (typeof input1 === 'number' && typeof input2 === 'number' || resultConversion === 'as-number') {
        //daí para evitar erros, convertemos cada dado colocando o + na frente
        result = +input1 + +input2;
    } else {
        result = input1.toString() + input2.toString();
    }
    return result;

//forçando uma conversão, mas como ele está checando o tipo de variável primeiro, ele faz a soma
    // if (resultConversion === 'as-number') {
    //     //+ converte para um número, é a mesma coisa que usar parseFloat(result)
    //     return +result;
    // } else {
    //     return result.toString();
    // }
}

const combinedAges = combine(30, 26, 'as-number');
console.log(combinedAges);

const combinedStringAges = combine('30', '26', 'as-number');
console.log(combinedStringAges);

const combinedNames = combine('Max ', 'Ana', 'as-text');
console.log(combinedNames);