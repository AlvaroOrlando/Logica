
function transformaParaMaiusculo(palavras){

    var maiusculas = [];

    for(var i = 0; i < palavras.length; i++) maiusculas.push(palavras[i].toUpperCase());
     return maiusculas;
} 



console.log(transformaParaMaiusculo(['arroz','feijao','farinha']))