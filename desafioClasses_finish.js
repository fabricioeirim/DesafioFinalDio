
// Classe
class destHero {

        constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    atacar() {

        if (this.tipo == "mago") {
            this.ataque = "magia";

        } else if (this.tipo == "guerreiro") {
            this.ataque = "espada";

        } else if (this.tipo == "monge") {
            this.ataque = "artes marciais";

        } else if (this.tipo == "ninja") {
            this.ataque = "shuriken";

        } else {
            this.tipo = `- ${this.tipo} - invalido`;
            this.ataque = "incapaz";
        }

        // Saída -> ataque
        console.log(`O ${this.tipo} atacou usando ${this.ataque}`)
    }

}
let nome = new destHero ('Shogun',28,'guerreiro')
let nome2 = new destHero ('hariri','63','mago')
let nome3 = new destHero ('gungfung',35,'ninja')
nome.atacar() 
nome2.atacar()  
nome3.atacar()  

