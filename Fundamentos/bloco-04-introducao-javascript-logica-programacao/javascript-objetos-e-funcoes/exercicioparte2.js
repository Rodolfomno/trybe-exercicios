function palindromo(str) {     
    let reversed = str.split("").reverse().join("");
    if(reversed === str) return true;

    return false;
}

palindromo("rodolfo");