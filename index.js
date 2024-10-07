const prompt = require('prompt-sync');
const entrada = prompt();

const meuNome = "Gabrielli";
const altura = "1.60";
const peso = "57";
const sexo = "Feminino";
const cidade = "São José";

console.log(meuNome)

console.log(altura)
console.log(peso)
console.log(sexo)
console.log(cidade)

const nomeCompleto = "Gabrielli de Paula Marchetti";
const anoNascimento = 2007;
let anoAtual = 2024;
let idade = 17;
const anoFormatura = 2029;

console.log("olá eu sou " +  nomeCompleto + " estamos no ano " + anoAtual + " minha idade é " + idade + " anos " + " e nasci no ano de " + anoNascimento);

idade = idade + 1;
anoAtual = anoAtual + 1;
console.log("Eu vou fazer " + idade + " anos, ano que vem, em " + anoAtual + ". Quero estar cursando Direito, e pretendo me formar em " + anoFormatura);


//Agência de viagens Dubai Paris Nova York Rio de Janeiro Canada
console.log(" ")
console.log("----------------------------");
console.log("|    agencia de viagens    |");
console.log("----------------------------");
console.log(" ");
const listaDeDestinos = new Array(
  " Dubai",
  " Paris",
  " Nova York",
  " Rio de Janeiro",
  " Canada"
  );

console.log(listaDeDestinos);
console.log(listaDeDestinos[4]);
listaDeDestinos.push(" Orlando");
console.log(listaDeDestinos);
listaDeDestinos.push(" São Paulo");
listaDeDestinos.push(" Mexico");
listaDeDestinos.push(" Bonito");

console.log(listaDeDestinos);

const LoginCerto = "gabrielli";
const SenhaCerta = "123";

console.log(" ")
console.log("----------------------------");
console.log("|      area de login       |");
console.log("----------------------------");
console.log(" ");

var login = entrada("Qual é o seu login?");
var senha = entrada("Digite sua senha:");

while(login != LoginCerto || senha != SenhaCerta){
  console.log("login ou senha incorretos");
login =  entrada("Qual é o seu login?")
  senha = entada(" Digite sua senha:")

}

console.log(" ")
console.log("--------------------------------");
console.log("|    area de dados pessoais    |");
console.log("--------------------------------");
console.log(" ");

var idadeComprador = entrada("Qual a sua idade?");
var nomeComprador = entrada("Qual o seu nome?");

if (idadeComprador >=18) {
  console.log("Olá senhor(a) " + nomeComprador );
  console.log("Comprador maior de idade");
  console.log ("destinos disponiveis: " + listaDeDestinos)
  console.log ("escolha seu destino");
}
else {
  console.log("olá senhor(a)" + nomeComprador);
  console.log("infelizmente, não será finalizado o procedimento, pois idade informada é menor de 18 anos de idade.");
  console.log("não será finalizado devido a idade");
}

 var contador = 0;
while (contador<9){
  console.log(listaDeDestinos[contador]);
  contador++;
}
var destino = entrada("digite o número que corresponde ao destino selecionado (0-8)");
console.log(`destino selecionado foi: ${listaDeDestinos[destino]}`);
