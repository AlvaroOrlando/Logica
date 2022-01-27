
/*let listaDeNomes = ['Cesar', 'Pamela', 'Camila', 'Hendy']
let busca = 'Cesar'

for(var i = 0; i < listaDeNomes.length; i++){
    if(listaDeNomes[i] == busca){
        console.log(busca + ' está na lista!')
        
    }else{console.log('Not a Fucka!')}
    break
}*/

/*Temos uma lista com nomes de todos os integrantes da família mas esqueceram de colocar o sobrenome! 

Seu desafio será imprimir nome junto com o sobrenome “Macedo” para cada integrante da família. 

Mas temos uma exceção, temos um integrante com sobrenome diferente, se tiver algum “Pedro”, coloque o sobrenome “Sousa”.*/


var familia = ["Joana", "Felipe", "Gabriela", "Carlos", "Pedro", "Bruno"]

for(var i = 0; i < familia.length; i++){
    if(familia[i] == 'Pedro')
    continue
    console.log(familia[i] + ' Macedo')
    
    
}