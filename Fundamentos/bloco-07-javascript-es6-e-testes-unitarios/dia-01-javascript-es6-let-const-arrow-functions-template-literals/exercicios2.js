const oddsAndEvens = [13, 3, 4, 10, 7, 2];

// Seu código aqui.
const ordem = (oddsAndEvens) => {
    let ordenado = oddsAndEvens.sort((a, b) => a - b);
    return console.log(`Os numeros ${ordenado[0]} ${ordenado[1]} ${ordenado[2]} ${ordenado[3]} ${ordenado[4]} estão em ordem crescente! `)
}
console.log(ordem(oddsAndEvens)); // será necessário alterar essa linha 😉
