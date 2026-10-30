// vamos criar as informações em OBJETO.

const heroi = {
    nome: "Denkari", // nome do heroi que eu escolhi
    dano: 3,
    vida: 10,
    veneno: 0,
    critico: 0.2,
    danoCritico: 2,
    inventario: []
}

const aranha = {
    nome: "aranha da caverna",
    vida: 10,
    dano: 2,
    chanceVeneno: 0.4,
    veneno: 3
}


console.log(heroi.vida)
heroi.vida = 15; 
heroi = 15; // erro de constante sendo mudada (TypeError: Assignment to constant variable)
console.log(heroi.vida)