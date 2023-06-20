//funcionam praticamente da mesma forma que function types
function add(n1: number, n2: number) {
    return n1 + n2;
}

function printResult(num: number) {
    console.log('Result: ' + num);
}

//cb = callback function, 
//que é uma função que é passada como um argumento e deve fazer algo com o resultado
//e deve ser uma função, aqui estamos usando a definição function type
function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
    const result = n1 + n2;
    cb(result);
}

printResult(add(5, 12));

let combineValues: (a: number, b: number) => number;

combineValues = add;

console.log(combineValues(8, 8));

//passando os números e passando uma função anônima
//passamos result dentro dela porque no addAnd... cb(result) - linha 15
//e o ts está inferindo que result será um número porque lá em cima
//dissemos que o que quer que seja que passemos aqui, 
//deve ser um número (cb: (num: number)) - linha 13
addAndHandle(10, 20, (result) => {
    //aqui dentro podemos fazer o que quisermos
    console.log(result);

    //se fizermos um return aqui, ele não será usado por conta do cb ... => void
    //não vai dar um erro, mas ele não será usado!
    //return result;
});