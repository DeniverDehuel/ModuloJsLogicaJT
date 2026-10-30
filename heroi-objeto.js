// vamos criar as informações em OBJETO.

const heroi = {
    nome: "Denkari", // nome do heroi que eu escolhi
    dano: 3,
    vida: 10,
    veneno: 0,
    critico: 0.2,
    danoCritico: 2,
    inventario: [],
    sorte: Math.random()
}

const aranha = {
    nome: "aranha da caverna",
    vida: 10,
    dano: 2,
    chanceVeneno: 0.4,
    danoVeneno: 3
}


// console.log(heroi.vida)
// heroi.vida = 15; 
// heroi = 15; // erro de constante sendo mudada (TypeError: Assignment to constant variable)
// console.log(heroi.vida)

function tomarDano(heroi, inimigo){
    heroi.vida = heroi.vida - inimigo.dano
    let chance = Math.random()

    if(heroi.sorte >= chance){
        console.log("Deu sorte!")
    } else if(chance <= inimigo.chance){
        heroi.veneno = inimigo.danoVeneno
        console.log("A Aranha invejta veneno em voce", + heroi.veneno + "O heroi se sente mal...")
    }


    if( heroi.vida <= 0){
        console.log("Você morreu!")
        combate = false;
        jogo = false;
    }
}
