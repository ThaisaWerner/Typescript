//se clicarmos em 'person' veremos o tipo de objeto que é inferido pelo ts e são escritos quase como objetos
//se colocarmos : object, ele fica mais genérico e agora só identifica que é um objeto e não os tipos das 
//variáveis dentro dele. Mas se formos genéricos assim, não receberemos total suporte do ts, por exemplo
//tentanto acessar person.name ele dará um erro também, porque é muito genérico. 

//normalmente especificar abaixo não seria uma boa prática, mas porque queremos que role seja um
//tuple, então devemos especificar.
const person:{
    name: string;
    age: number;
    hobbies: string[];
//tuple - diz ao ts que quer uma array com exatamente 2 elementos e o primeiro tem que ser um number
//e o segundo uma string, obrigatoriamente.
    role: [number, string];
} = {
    name: 'Thaísa',
    age: 27,
    hobbies: ['Sports', 'Cooking'],
    role: [2, 'author']
};

//esse código dá erro na compilação pois não é a regra do tuple que foi estabelecida anteriormente
//person.role[1] = 10;

//esse código também dá erro pois não é o tamanho que estipulamos
//person.role = [0, 'admin', 'user'];

//exemplo de como declarar uma array de string sem inicializá-la. O any diz que é uma array que possui
//tipos mistos, como string e number, por exemplo. Mas use com parcimônia pois assim 
//perde-se os benefícios do ts
//let favoriteActivities: any[];
//favoriteActivities = ['Sports', 1];

let favoriteActivities: string[];
favoriteActivities = ['Sports'];

console.log(person.name);

//acessando a propriedade hobbie e passando por seus elementos e armazenando o hobbie em hobby 
//a cada iteração
for(const hobby of person.hobbies) {
//isso é possível por causa que o ts infere o tipo de dado, nesse caso string. Então ele sabe que hobbies é
//uma array de strings, portanto hobby vai ser uma string, então podemos acessar todos os métodos de uma 
//string a partir da variável hobby, pois o ts sabe que é uma string
    console.log(hobby.toUpperCase());
}