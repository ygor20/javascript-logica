//Abrindo um banco de dados IndexedDb
const request = indexedDB.open("clienteDb", 1);

request.onupgradeneeded = function(event) {
    const db = event.target.result;
    const store = db.createObjectStore("clientes", {keyPatch: "id"});
    store.createIndex("nome", "nome", {unique: false});
}

request.onsuccess = function(event){
    const db = event.target.result;
    const transaction = db.transaction("clientes", "readwrite");
    const store = transaction.objectStore("clientes");

//Adicionando um novo cliente
store.add({ id: 1, nome: "Maria Eduarda", email: "maria@email.com"});

//Lendo um cliente pelo nome
const nome = store.index("nome");
const nomeIndex = index.get("Maria Eduarda");

nomeIndex.onsuccess = function(){
    console.log(nomeIndex.result);
}

}