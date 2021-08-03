function palindromo(str){
    let reversed = str.split("").reverse().join("");
    if(reversed === str){
        return console.log('é palindromo');
    } else{
        return console.log('nao e palindromo');
    }
}

palindromo('eye');