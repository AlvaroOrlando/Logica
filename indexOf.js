

var familia = ['Alvaro', 'Adriana', 'Ozzy', 'Dhara', 'Amy']

function fazParteDaFamilia (nome, familia){
    return familia.indexOf(nome) != -1
}

console.log(fazParteDaFamilia('Ozzy',familia))
console.log(fazParteDaFamilia('Adalberto',familia))