let n = Math.floor(Math.random() * 10) + 1;
let soma = '';

for(let index = 1; index <= n; index ++){
    for(let index2 =1; index2 <=n; index2 ++){
        soma += '*';
    }
    console.log(soma);
    soma ='';
}