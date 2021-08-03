let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
}

info.recorrente = 'sim'

let info2 = {
    personagem: 'Tio Patinhas',
    origem: 'Christmas on Bear Mountain, Dells Four Color Comics #178',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
    recorrente: 'sim',  
}


for(let key in info && info2){
    if(info[key] === 'sim' && info2[key] === 'sim'){
        break
    }
    console.log(info[key] + ' e ' + info2[key]);
}

if(info.recorrente === 'sim' && info2.recorrente === 'sim'){
    console.log('Ambos recorrentes')
}