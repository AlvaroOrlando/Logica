//função pop
/*var frutas = ['banana', 'abacate', 'limão', 'laranja']
var ultimaFruta = frutas.pop()

console.log(ultimaFruta)

console.log

//função push

frutas.push('mamão')
console.log(frutas)
console.log(ultimaFruta)

console.log(frutas.indexOf('abacate'))
console.log(frutas.indexOf('morango'))*/

var integrantes = ['Alvinho', 'Thrasher', 'Julio']
function bandaUglyTownDogMembers(nome, integrantes){
    return integrantes.indexOf(nome) != -1
}

console.log(bandaUglyTownDogMembers('klaus', integrantes))
var naoTiraMusica = integrantes.pop()

console.log(integrantes)

console.log(naoTiraMusica)

console.log(bandaUglyTownDogMembers('Thrasher', integrantes))

integrantes.push('Julio')

console.log(integrantes)

console.log(bandaUglyTownDogMembers('Julio', integrantes))