import {Cliente} from "./Cliente.js"; // informa que e para importa a classe 'Cliente' do arquivo "./Cliente.js"

import {ContaCorrente} from "./ContaCorrente.js"; // informa que e para importa a classe "ContaCorrente" do arquivo "./ContaCorrente.js"

import {exemplo_get_e_set} from "./exemplo_get_e_set.js";

import {MetodoConstrutor} from "./MetodoConstrutor.js";

import {MetodosFuncoes} from "./MetodosFuncoes.js";


/* Metodos magicos GET e SET */

const teste = new exemplo_get_e_set(); // forma de instanciar a classe 

teste.setMeuNome = 1000; // forma de utilizar um metodo SET

console.log(teste.getMeuNome); // forma de utilizar um metodo GET

//teste._meuNome = 2000; // mesmo os parametros protegidos ainda não serem protegidos esse '_' na frente do parametro e só para informa que ele não deve ser acessado "nada mais que uma boa prática"

teste.setMinhaIdade = 50; // metodo set 

console.log(teste.getMinhaIdade); // metodo get


/* Metodo construtor javascript*/

const meuTeste = new MetodoConstrutor(1000,5000);

console.log(meuTeste.campoA, meuTeste.campoB); // mostra que realmente na instancia da classe o valor foi passado 


/* Utilizando metodos dentro de funções */

const testeFuncoes = new MetodosFuncoes();

console.log(testeFuncoes.imprimirPontos(45));

// const cliente1 = new Cliente(); // instanciando em uma variavel
// cliente1.nome = "Ricardo"; // adicionado um valor a sua instancia
// cliente1.cpf = 888888554556;


// const cliente2 = new Cliente();
// cliente2.nome = "Alice";
// cliente2.cpf = 8888854556;



// const ContaCorrenteRicardo = new ContaCorrente();
// ContaCorrenteRicardo._saldo = 11110;
// ContaCorrenteRicardo.agencia = 1001;
// ContaCorrenteRicardo.cliente = cliente1; // essa a forma de juntar parametros de duas classes

// ContaCorrenteRicardo.cliente = 100;


// ContaCorrenteRicardo.depositar(100);
// ContaCorrenteRicardo.depositar(100);
// ContaCorrenteRicardo.depositar(100);

// const valorSacado = ContaCorrenteRicardo.sacar(50);

// console.log(valorSacado);
// console.log(ContaCorrenteRicardo);

