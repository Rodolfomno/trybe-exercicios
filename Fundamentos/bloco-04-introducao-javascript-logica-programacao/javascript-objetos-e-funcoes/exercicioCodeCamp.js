function sumAll([num1, num2]) {
    let higher = 0;
    let lower = 0;
    let sum = 0;
    let result = 0;
    if(num1 > num2){
      higher = num1;
      lower = num2;
    } else if(num2>num1){
      higher = num2;
      lower = num1;
    }
    for(let cont = lower; cont <= higher; cont += 2){
      
      sum = cont + (cont+1);
      result = result + sum;
    }
  
  
    return result;
  }
  
  sumAll([1, 4]);