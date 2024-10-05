class Heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    // Método para realizar o ataque
    atacar() {
        let ataque;
        switch (this.tipo.toLowerCase()) {
            case 'mago':
                ataque = 'usou magia';
                break;
            case 'guerreiro':
                ataque = 'usou espada';
                break;
            case 'monge':
                ataque = 'usou artes marciais';
                break;
            case 'ninja':
                ataque = 'usou shuriken';
                break;
            default:
                ataque = 'realizou um ataque desconhecido';
        }
        console.log(`O ${this.tipo} atacou usando ${ataque}`);
    }
}

// Exemplo de uso da classe Heroi
const heroi1 = new Heroi('Arthur', 30, 'guerreiro');
heroi1.atacar(); // Saída: O guerreiro atacou usando espada

const heroi2 = new Heroi('Merlin', 150, 'mago');
heroi2.atacar(); // Saída: O mago atacou usando magia

const heroi3 = new Heroi('Bruce', 40, 'monge');
heroi3.atacar(); // Saída: O monge atacou usando artes marciais

const heroi4 = new Heroi('Naruto', 17, 'ninja');
heroi4.atacar(); // Saída: O ninja atacou usando shuriken