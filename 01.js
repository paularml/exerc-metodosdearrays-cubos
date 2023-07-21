// Teste suas habilidades
// const frutas = ['Banana', 'Maçã', 'Abacaxi', 'Pêra', 'Uva'];
// Dado o array acima, faça o seguinte:
// a) Organize o array na ordem inversa e transforme em uma única string 
// separada por vírgulas de forma q seja impresso:
// Uva, Pêra, Abacaxi, Maçã, Banana
// b) Remova o primeiro e último item do array original e adicione a fruta Melão 
// ao novo array da seguinte forma:
// ['Maçã', 'Abacaxi', 'Pêra', 'Melão']

const frutas = ['Banana', 'Maçã', 'Abacaxi', 'Pêra', 'Uva']
frutas.reverse()
frutas.join()
console.log(frutas)
frutas.reverse()
frutas.shift(0)
frutas.splice(frutas.length - 1, frutas.length, "Melão")
console.log(frutas)

