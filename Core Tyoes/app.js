var userInput;
var userName;
userInput = 5;
userInput = 'Cadê meu lancho';
if (typeof userInput === 'string') {
    userName = userInput;
}
// Função utilitária que gera objetos de erro e os lança. 
// Podemos lançar qualquer objeto ou valor como um erro
function generateError(message, code) {
    throw { message: message, errorCode: code };
}
generateError('Ih deu ruim', 500);
