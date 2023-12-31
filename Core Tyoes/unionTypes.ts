//Queremos que funcione com números e strings, então adicionamos o | e os tipos que desejamos
//que a função aceite. Chamamos de union types
function combine(input1: number | string, input2: number | string){
    let result;
    if (typeof input1 === 'number' && typeof input2 === 'number') {
        result = input1 + input2;
    } else {
        result = input1.toString() + input2.toString();
    }
    return result;
}

const combinedAges = combine(30, 26);
console.log(combinedAges);

const combinedNames = combine('Max ', 'Ana');
console.log(combinedNames);