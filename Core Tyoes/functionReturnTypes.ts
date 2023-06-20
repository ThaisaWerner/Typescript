//o tipo de retorno é inferido pelo ts, clicando em add, podemos verificar isso
//podemos também declarar o tipo de retorno que queremos: 
//function add(n1: number, n2: number): number
//mas se não tiver um motivo para colocar, não precisa, pois o ts faz sozinho
function add(n1: number, n2: number) {
    return n1 + n2;
}

//tipo void, se clicarmos no nome vamos ver : void
//tipo que não retorna nada
function printResult(num: number) {
    console.log('Result: ' + num);
}

printResult(add(5, 12));

//porém se tentarmos imprimir no console, ele vai imprimir "undefined"

//console.log(printResult(add(5, 12)));

//isso acontece se usarmos o valor de retorno de uma função que não retorna nada
//e em js, "undefined" é um valor real, que você receberá se tentar acessar uma propriedade
//de um objeto que não existe
//e undefined é um tipo dem js