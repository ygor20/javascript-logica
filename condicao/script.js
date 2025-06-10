//Estrutura condicional

const numerico = 5;


if (numerico >8)
{
    console.log("O número informado é maior que 8");
}
else {
    console.log("o número então é menor que 8");
}

//Estrutura aninhada e complexa 
const nomealuno = "Maria";

if(nomealuno === "Juliano")
{
    console.log("Olá " + nomealuno);
}else if (nomealuno === "Maria")
{
    console.log("Olá Maria");
}

else 
{
    console.log("O nome não é Juliano e nem Maria");
}

//Encadeamento de condição
let idade = 16;
let temRG = false;

if(idade >= 18 && temRG) //Se você tem mais de 18 anos e seu TemRG é contrario (true)
{
    console.log("Você pode votar");

} else
{
    console.log("Você não pode votar.");
}


//switch
let novaidade = 18;

switch(novaidade) 
{
    case 18:
    console.log ("O usuário tem 18.");
    break;
    case 17:
    console.log ("O usuário tem 17.");
    break;
    default:
    console.log("Idade Inválida");
}