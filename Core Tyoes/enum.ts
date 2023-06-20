//constantes globais que podemos usar em qualquer lugar ao invés de ficar decorando seu número.
//totalmente ok usar assim, maas dai vem eleeh, o enum
// const ADMIN = 0;
// const READ_ONLY = 1;
// const AUTHOR = 2;

//o nome tem que começar com maiúscula.
//é comum ver enum com valores todos em maiúsculos, mas isso não é uma regra, é só uma convenção.
//por trás dos panos, admin tá recebendo 0 e assim por diante. Caso não quera iniciar com 0
//pode-se colocar = número que deseja. Ex: ...{ ADMIN = 5,...} e então os seguintes vão
//partir dai, mas também pode atribuir os números que quiser a cada um, sem ser necessariamente
//na sequência, ou pode atribuir string, ou os dois, mas o mais comum são números.
enum Role { ADMIN, READ_ONLY, AUTHOR };

const person = {
    name: 'Thaísa',
    age: 27,
    hobbies: ['Sports', 'Cooking'],
    role: Role.ADMIN
};

if (person.role === Role.ADMIN) {
    console.log('is admin');
}