# Calculadora de Partidas Rankeadas

Este projeto implementa uma calculadora de partidas rankeadas para jogadores, onde o saldo de vitórias e derrotas determina o nível de cada jogador. O código em JavaScript utiliza funções, variáveis, laços de repetição e estruturas de decisão para classificar os jogadores de acordo com a quantidade de vitórias.

## Funcionalidade

A função `calcularRankeadas` calcula o saldo de vitórias com base no número de vitórias e derrotas de um jogador. A partir desse saldo, ela determina o nível do jogador em uma classificação rankeada.

### Classificação de Nível

- **Ferro**: Menos de 10 vitórias
- **Bronze**: Entre 11 e 20 vitórias
- **Prata**: Entre 21 e 50 vitórias
- **Ouro**: Entre 51 e 80 vitórias
- **Diamante**: Entre 81 e 90 vitórias
- **Lendário**: Entre 91 e 100 vitórias
- **Imortal**: Mais de 101 vitórias

### Requisitos Técnicos

Este projeto utiliza:
- **Variáveis**: Para armazenar o saldo de vitórias e o nível do jogador.
- **Operadores**: Para calcular o saldo de vitórias (vitórias - derrotas).
- **Laços de Repetição**: Um laço `for` para iterar sobre uma lista de jogadores.
- **Estruturas de Decisão**: Utilização de `if-else` para determinar o nível do jogador com base nas vitórias.
- **Funções**: A função `calcularRankeadas` encapsula a lógica de cálculo do saldo e classificação do jogador.

## Como Executar

Copie o código fornecido e cole-o em um arquivo .js.  
Execute o arquivo em um ambiente de execução JavaScript, como o Node.js, ou use o console do navegador.  
O resultado será exibido diretamente no console.

## Contribuição

Sinta-se à vontade para abrir uma issue ou enviar um pull request com melhorias ou correções.
