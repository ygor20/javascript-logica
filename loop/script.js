//For

for (i = 0; i<=5; i++ )
{
    console.log(i);
}

let x =5;
for (x; x >2; x--)
{
    console.log(x);
}

//while (enquanto)
let z = 1;
while (z <=10)
{
    console.log(z);
    z= z+1;
}

let y =10;
while(y >=5){
    console.log(y);
    y--;
}

//Do... while (Faça enquanto)

let m =15;
do{
    console.log(`${m}`);
    m = m + 2;
} while (m <=21);

//Foreach
const frutas = ["maçã", "banana", "laranja"];

function mostrarFruta (fruta, indice){
    console.log(`índice ${indice}: ${fruta} `);
}

frutas.forEach(mostrarFruta);

//titulo
console.log ("iterando com forEach");
//arrow function
frutas.forEach ((fruta, indice) => {
    console.log(`Índice ${indice}: ${fruta}`);
});

// //Loop infinito
// let a = 0;
// while(a<5){
// console.log(a);
// Falta o incremento de a, o loop se torna infinito.
// }


