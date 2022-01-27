

function gerarDezenas(){

var array = []

for(var i = 0; i < 6; i++){
    
array [i] = (Math.round(Math.random () * 60))

}
  return array
}

console.log(gerarDezenas())