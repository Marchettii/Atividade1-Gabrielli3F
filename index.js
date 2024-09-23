const prompt = require('prompt-sync')
  const entrada = prompt('');

const nomeCompleto = "Gabrielli Marchetti";
const anoNascimento = 2007;
let anoAtual = 2024;
let idade = 17;
const anoFormatura = 2029;

console.log("olá eu sou " +  nomeCompleto + " estamos no ano " + anoAtual + " minha idade é " + idade + " anos " + " e nasci no ano de " + anoNascimento);

idade = idade + 1;
anoAtual = anoAtual + 1;
console.log("Eu vou fazer " + idade + " anos, ano que vem, em " + anoAtual + ". Quero estar cursando direito, e pretendo me formar em " + anoFormatura);


//Agência de viagens Hawaii Paris China Russia Cuba
const listaDeDestinos = new Array(
  "orlando",
  "mexico",
  "dubai",
  "Paris",
  "Rio de Janeiro"
);
var idadeComprador = entrada("Qual sua idade?");
var nomeComprador = entrada("Qual seu nome?");  
if(idadeComprador >= 18) {
  console.log("Ola Senhor(a) " + nomeComprador)
  console.log("Comprador maior de idade");
  console.log("Destinos disṕniveis: " + listaDeDestinos)

;
}
console.log(listaDeDestinos);
console.log(listaDeDestinos[3]);
listaDeDestinos.push("Coronel Vivida");
console.log(listaDeDestinos);
listaDeDestinos.push("Campo Mourão");
console.log*(listaDeDestinos);
listaDeDestinos.push("Ponta grossa");
console.log(listaDeDestinos);
listaDeDestinos.push("Cabo Frio");
console.log(listaDeDestinos);

if(idadeComprador <= 18)
console.log("O senhor(a))não é maior de idade")


var contador= 1;
while(contador <9){
console.log(listaDeDestinos[contador]);  
  contador++;


}