// Divisão de grupos
// Crie uma função que receba dois parâmetros, o primeiro sendo um array de 
// nomes e o segundo um número inteiro. A função deverá dividir o array em grupos 
// com a quantidade de nomes de acordo com o numero passado no segundo parâmetro. 
// Caso não seja possível separar em grupos iguais, o último grupo será o restante 
// dos nomes. A função deve imprimir o resultado da divisão dos grupos.
// const nomes = ['Juninho', 'Vidal', 'Guido', 'Dani', 'Ruli', 'Diego'];
// const tamanhoDoGrupo = 4;
// Para o exemplo acima deverá imprimir:
// Grupo 1: Juninho, Vidal, Guido, Dani.
// Grupo 2: Ruli, Diego.

const nomes = ['Juninho', 'Vidal', 'Guido', 'Dani', 'Ruli', 'Diego']
const tamanhoDoGrupo = 4
let grupo1 = ""
let grupo2 = ""
function divisaoDeGrupos(nomes, tamanhoDoGrupo) {
    grupo1 = nomes.slice(0, tamanhoDoGrupo)
    grupo2 = nomes.slice(tamanhoDoGrupo)
    return console.log(`Grupo 1: ${grupo1}
Grupo 2: ${grupo2}`)
}

divisaoDeGrupos(nomes, tamanhoDoGrupo)


// refatorar 