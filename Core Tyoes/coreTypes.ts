//: number depois das variavéis vai tipar o js e diminuir os erros, pois se passarmos uma string no lugar, 
//por exemplo, o erro vai aparecer já na IDE antes do código ser compilado. Isso só é entendido pelo ts, pelo js não
function add(n1: number, n2: number, showResult: boolean, phrase: string) {

//"printa" o tipo de variável que está sendo utilizada
    //console.log(typeof number1);

//verifica os tipos de variaveis e caso uma delas não seja number, que é o que queremos, então lança um erro
    //if(typeof n1 !== 'number' || typeof n2 !== 'number'){
        //throw new Error('Acesso negado')
    //}

//fizemos essa constante aqui para guardar o resultado, pois se não no console.log ia impimir errado, pois
//ia interpretar tudo como uma string
    const result = n1 + n2;

//no js if não precisa fazer === true, ele já entende que ser for true entra no if, se não no else.    
    if(showResult) {
        console.log(phrase + result);
    }else {
        return result;
    }
}

//aqui não precisamos especificar que tipo de variável que é pois o ts consegue inferir sozinho, 
//então ficaria redundante colocar aqui, a não ser que não fosse declarada logo que é inicializada, 
//daí é uma boa prática. Ficaria assim: 
//let number1: number;
//e caso não faça como acima (let number1;) ai podemos atribuir qualquer tipo de variável a number1,
//pois não foi especificado, poderíamos colocar uma string, por exemplo.
const number1 = 5;
const number2 = 2.8;
const printResult = true;
const resultPhrase = 'Result is: ';

//const result = add(number1, number2, printResult);
//só usamos add aqui por causa do if/else, daí não precisa do console.log tbm
add(number1, number2, printResult, resultPhrase);
//console.log(result);