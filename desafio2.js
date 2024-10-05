// Função para calcular o saldo de vitórias e determinar o nível do jogador
function calcularNivel(vitorias, derrotas) {
    // Calcula o saldo de vitórias
    let saldoVitorias = vitorias - derrotas;
    let nivel;

    // Determina o nível com base no número de vitórias
    if (vitorias < 10) {
        nivel = "Ferro";
    } else if (vitorias <= 20) {
        nivel = "Bronze";
    } else if (vitorias <= 50) {
        nivel = "Prata";
    } else if (vitorias <= 80) {
        nivel = "Ouro";
    } else if (vitorias <= 90) {
        nivel = "Diamante";
    } else if (vitorias <= 100) {
        nivel = "Lendário";
    } else {
        nivel = "Imortal";
    }

    // Retorna o saldo de vitórias e o nível
    return { saldoVitorias, nivel };
}

// Função principal para obter entradas do usuário e exibir a mensagem final
function main() {
    const readline = require('readline');
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    rl.question("Digite a quantidade de vitórias: ", function(vitorias) {
        rl.question("Digite a quantidade de derrotas: ", function(derrotas) {
            vitorias = parseInt(vitorias);
            derrotas = parseInt(derrotas);

            const resultado = calcularNivel(vitorias, derrotas);
            console.log(`O Herói tem de saldo de ${resultado.saldoVitorias} está no nível de ${resultado.nivel}`);

            rl.close();
        });
    });
}

// Chama a função principal
main();