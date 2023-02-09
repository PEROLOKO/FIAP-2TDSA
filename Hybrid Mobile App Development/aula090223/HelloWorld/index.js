let string = ('b' + 'a' + + 'a' + 'a').toLowerCase();
console.log(string);

let a = 10;
let b = 20;

// Sem Template String
console.log('\n// Sem Template String')
let msg1 = "A = " + a + " B = " + b;
console.log(msg1);

// Com Template String
console.log('\n// Com Template String')
let msg2 = `A = ${a} B = ${b}`;
console.log(msg2);

// Funções
console.log('\n// Funções')
function soma(a, b = 2) {
    return a + b;
}

console.log( soma(a, b) );

console.log( soma(a) );

// Funções em varíaveis
console.log('\n// Funções em varíaveis')
let digaOla = function(){
    console.log("ola")
}

digaOla();

// Arrow Functions
console.log('\n// Arrow Functions')
const soma2 = (a, b) =>  a + b;

console.log(soma2(1,2))

const dobro = n => n * 2;
console.log(dobro(2));

// Arrays & Spread Operator
console.log('\n// Arrays & Spread Operator')
const array = [1, 2, 3];

console.log(array);

console.log(...array);

console.log([...array, 4, 5, 6]);

console.log(...[...array, 4, 5, 6]);

const [primeiro, ...resto] = [...array];

console.log(primeiro, resto);

// For com Array
console.log('\n// For com Array')

for(const i in array) {
    console.log(i)
}

// Destructing
console.log('\n// Destructing')

const meuArray = ['azul', 'vermelho', 'verde'];
const [cor1, cor2, cor3] = meuArray;
console.log(cor1);
console.log(cor2);
console.log(cor3);

const meuObjeto = {x : 10, y : 20, z : 30};
const {x, y} = meuObjeto;
console.log(x);
console.log(y);
console.log(meuObjeto.z)

// Orientação a objetos
console.log('\n// Orientação a objetos')

let carro1 = {marca : 'fiat', modelo : '500', cor : 'branco'};
let carro2 = {marca : 'renault', modelo : 'sandero', cor : 'preto'};

console.log(carro1);
console.log(carro1.marca);
console.log(carro1.modelo);
console.log(carro1.cor);

console.log(carro2);
console.log(carro2.marca);
console.log(carro2.modelo);
console.log(carro2.cor);

let pessoa = {
    nome : 'Mario',
    sobrenome : 'de Andrade',
    id : 5566,
    nomeCompleto : function() {
        return this.nome + ' ' + this.sobrenome;
    }
}

console.log(pessoa);
console.log(pessoa.nomeCompleto());

function criarNovaPessoa(nome) {
    // obj vazio
    let obj = {};

    // atributo
    obj.nome = nome;

    // metodo
    obj.saudacao = function() {
        console.log('Olá, ' + obj.nome);
    }

    return obj;
}

let pessoaCriada = criarNovaPessoa("Pessoa");
pessoaCriada.saudacao();

function Pessoa(nome) {
    this.nome = nome;
    this.saudacao = function() {
        console.log("Olá, " + this.nome);
    };
}

let pessoaCriada2 = new Pessoa("Pessoa2");
pessoaCriada2.saudacao();

class Pessoa2 {
    // Construtor
    /*
    constructor() {
        this.nome = "";
        this.email = "";
    }
    */
    constructor(nome, email) {
        this.nome = nome;
        this.email = email;
    }
}

const pessoaCriada3 = new Pessoa2();
pessoaCriada3.nome = "João"

console.log(pessoaCriada3.nome);

const pessoaCriada4 = new Pessoa2("Maria", "maria@email.com");

console.log(pessoaCriada4.nome);