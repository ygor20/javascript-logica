//Superclasse
class Ave {
    //método
    voar() {
        console.log("A ave voa");
    }
}

//Subclasse 
class Pinguim extends Ave {
    //polimorfismo 
    voar() {
        console.log("Pinguins não podem voar");
    }
}

//Instânciando
let ave = new Ave (); //Declara variável e atribui a Ave
let pinguim = new Pinguim(); //Declara a variável e atribui a um classe ou subclasse (Pinguim)
ave.voar(); 
pinguim.voar();