

    var alunos = [170, 159, 151, 187, 156, 191, 165, 154, 167, 169, 171, 170, 160]

    var grupoA = [] //150 - 159
    var grupoB=[] //160 - 169
    var grupoC =[] //170 -



    for(var i = 0; i < alunos.length; i++){
        if(alunos[i] >= 150 && alunos[i] <= 159){
            grupoA.push(alunos[i])
        }
        if(alunos[i] >= 160 && alunos[i] <= 170){
            grupoB.push(alunos[i])
        }
        if(alunos[i] >= 170) {
            grupoC.push(alunos[i])
        
        }
    }
    
    console.log([grupoA.length, grupoB.length, grupoC.length])

