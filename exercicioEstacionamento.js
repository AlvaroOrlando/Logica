function calcularNumeroDeEntradas(placa){
    var placas = [
        'RXB-2525', 'AKX-3333', 'ORO-7142', 'RXB-2525',
        'AKX-3333', 'ORO-7142', 'AKX-3333', 'RXB-2525',
        'AKX-3333', 'AKX-3333', 'RXB-2525', 'AKX-3333',
        'RXB-2525', 'AKX-3333', 'ORO-7142', 'AKX-3333',
        'AKX-3333', 'RXB-2525', 'AKX-3333', 'ORO-7142',
        'ORO-7142', 'AKX-3333', 'AKX-3333', 'RXB-2525',
        'AKX-3333', 'AKX-3333', 'RXB-2525', 'AKX-3333',
        'AKX-3333', 'RXB-2525', 'AKX-3333', 'ORO-7142',
        'ORO-7142', 'AKX-3333', 'ORO-7142', 'ORO-7142',
        'ORO-7142', 'RXB-2525', 'AKX-3333', 'AKX-3333',
        'ORO-7142', 'ORO-7142', 'AKX-3333', 'RXB-2525',
        'AKX-3333', 'AKX-3333', 'RXB-2525', 'AKX-3333',
        'RXB-2525', 'AKX-3333', 'ORO-7142', 'AKX-3333',
        'AKX-3333', 'RXB-2525', 'AKX-3333', 'ORO-7142',
        'ORO-7142', 'AKX-3333', 'AKX-3333', 'RXB-2525',
        'AKX-3333', 'AKX-3333', 'RXB-2525', 'AKX-3333',
        'AKX-3333', 'RXB-2525'
     ]
    var entradas = 0
    for(var i = 0; i < placas.length; i++){
        if(placa == placas[i]) entradas++
    }
    return entradas
    
}


//console.log(calcularNumeroDeEntradas('AKX-3333'))

function calcularValorDevido(placa){
    var placas = [
        'RXB-2525', 'AKX-3333', 'ORO-7142', 'RXB-2525',
        'AKX-3333', 'ORO-7142', 'AKX-3333', 'RXB-2525',
        'AKX-3333', 'AKX-3333', 'RXB-2525', 'AKX-3333',
        'RXB-2525', 'AKX-3333', 'ORO-7142', 'AKX-3333',
        'AKX-3333', 'RXB-2525', 'AKX-3333', 'ORO-7142',
        'ORO-7142', 'AKX-3333', 'AKX-3333', 'RXB-2525',
        'AKX-3333', 'AKX-3333', 'RXB-2525', 'AKX-3333',
        'AKX-3333', 'RXB-2525', 'AKX-3333', 'ORO-7142',
        'ORO-7142', 'AKX-3333', 'ORO-7142', 'ORO-7142',
        'ORO-7142', 'RXB-2525', 'AKX-3333', 'AKX-3333',
        'ORO-7142', 'ORO-7142', 'AKX-3333', 'RXB-2525',
        'AKX-3333', 'AKX-3333', 'RXB-2525', 'AKX-3333',
        'RXB-2525', 'AKX-3333', 'ORO-7142', 'AKX-3333',
        'AKX-3333', 'RXB-2525', 'AKX-3333', 'ORO-7142',
        'ORO-7142', 'AKX-3333', 'AKX-3333', 'RXB-2525',
        'AKX-3333', 'AKX-3333', 'RXB-2525', 'AKX-3333',
        'AKX-3333', 'RXB-2525'
     ]

   
        if(calcularNumeroDeEntradas(placa) <= 20){
            return (calcularNumeroDeEntradas(placa) * 10)
        }
        else{
            return ((calcularNumeroDeEntradas(placa) -20) * 5 + 200)
        }
       
}   

console.log(calcularValorDevido('AKX-3333'))