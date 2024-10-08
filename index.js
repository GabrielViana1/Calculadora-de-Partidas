// Função
function calcularRankeadas(vitorias, derrotas) {
    // Variáveis e Operadores
    let saldoVitorias = vitorias - derrotas;
    let nivel;

    // Estruturas de decisão
    if (vitorias < 10) {
        nivel = "Ferro";
    } else if (vitorias >= 11 && vitorias <= 20) {
        nivel = "Bronze";
    } else if (vitorias >= 21 && vitorias <= 50) {
        nivel = "Prata";
    } else if (vitorias >= 51 && vitorias <= 80) {
        nivel = "Ouro";
    } else if (vitorias >= 81 && vitorias <= 90) {
        nivel = "Diamante";
    } else if (vitorias >= 91 && vitorias <= 100) {
        nivel = "Lendário";
    } else if (vitorias >= 101) {
        nivel = "Imortal";
    }

    return { saldoVitorias, nivel };
}

// Lista de jogadores
const jogadores = [
    { nome: "Jogador1", vitorias: 5, derrotas: 3 },
    { nome: "Jogador2", vitorias: 15, derrotas: 5 },
    { nome: "Jogador3", vitorias: 30, derrotas: 10 },
    { nome: "Jogador4", vitorias: 60, derrotas: 20 },
    { nome: "Jogador5", vitorias: 85, derrotas: 15 },
    { nome: "Jogador6", vitorias: 95, derrotas: 5 },
    { nome: "Jogador7", vitorias: 120, derrotas: 10 }
];

// Laço de repetição
for (let i = 0; i < jogadores.length; i++) {
    const jogador = jogadores[i];
    const resultado = calcularRankeadas(jogador.vitorias, jogador.derrotas);
    console.log(`O ${jogador.nome} tem um saldo de ${resultado.saldoVitorias} vitórias e está no nível ${resultado.nivel}.`);
}
