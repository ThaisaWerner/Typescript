//porque ainda não sabemos o que o usuário vai dar como entrada
//é diferente de any, que aceita qualquer valor, é mais restrito
//e é uma melhor escolha em relação ao any se eu não sei o que vou precisar armazenar
let userInput: unknown;
let userName: string;

//pode-se armazenar qualquer valor sem ter erros
userInput = 5;
userInput = 'Cadê meu lancho';

//isso vai dar um erro, porque unknow não pode ser associado a uma string
//userName = userInput;

//com o unknow, primeiro precisamos checar que 
//tipo de dado está armazenado na variável
if(typeof userInput === 'string') {
    //mas aqui ele deixa porque entende que estamos fazendo uma verificação primeiro
    userName = userInput;
}