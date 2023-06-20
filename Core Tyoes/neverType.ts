let userInput: unknown;
let userName: string;

userInput = 5;
userInput = 'Cadê meu lancho';

if(typeof userInput === 'string') {
    userName = userInput;
}

// Função utilitária que gera objetos de erro e os lança. 
// Podemos lançar qualquer objeto ou valor como um erro
// É um "never" porque nunca produz "undefined" e nunca retorna nada, 
// se colocarmos em um console.log, por exemplo, no console vai aparecer em branco.
// Ele aparece como void, mas no fundo é um never, para deixar claro para outros devs
// é interessante deixar o : never
function generateError(message: string, code: number): never{
    throw {message: message, errorCode:code};
}

// Ai podemos sempre chamar essa função e passar diferentes parâmetros para diferentes erros
generateError('Ih deu ruim', 500);