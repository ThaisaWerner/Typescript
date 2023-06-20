//function type itself
function add(n1: number, n2: number) {
    return n1 + n2;
}

function printResult(num: number) {
    console.log('Result: ' + num);
}

printResult(add(5, 12));

//let combineValues;

//estamos armazenando a função add aqui, um ponteiro para ela
//combineValues = add;

//então, no final, podemos imprimir combineValues passando os parâmetros para a função add
//executamos a função através da variável
//console.log(combineValues(8, 8));

//mas o problema de combinevalues é o seu tipo é any, então se atribuirmos um valor
//para ela, mesmo depois de já termos armanezado add nela, não teremos um erro no código
//apenas terra erro em runtime
//combineValues = 5;

//para evitar isso precisamos deixar claro que essa variável vai armazenar uma função, dessa
//forma só poderemos armazenar uma função nessa variável
//Function é um tipo provido pelo ts
//let combineValues: Function;

//e é bom, mas ainda não é o ideal, pois ainda poderíamos fazer como abaixo e armazenar printResult nela
//e não vai dar erro, mas vai dar "undefined" no console e também vai printar um resultado que não é o correto
//combineValues = printResult;
//combineValues = add;

//e ai que entra function types, que são tipos que descrevem uma função, 
//independente dos parâmetros e do valor de retorno
//agora aceita qualquer função que tenha 2 parâmetros numéricos e retorna um número
//não precisamos de um match no nome dos parâmetros, apenas dos tipos
let combineValues: (a: number, b: number) => number;

combineValues = add;

//e agora se tentarmos armazenar o printResult, vai dar um erro, pois essa função não se
//encaixa nos pré-requisitos da nossa type function :}

console.log(combineValues(8, 8));
