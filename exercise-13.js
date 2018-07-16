function xo(str) {
    // you can only write your code here!
    var jumlahX = 0;
    var jumlahO = 0;
    length = str.length - 1
    for(x=0; x<= length;x++){
      if(str[x] == "x"){
        jumlahX = jumlahX + 1
      } else if(str[x] =="o"){
        jumlahO = jumlahO + 1
      }
    }
    
    if(jumlahO > jumlahX || jumlahO < jumlahX){
      return false;
    } else{
      return true;
    }
  }
  
  // TEST CASES
  console.log(xo('xoxoxo')); // true
  console.log(xo('oxooxo')); // false
  console.log(xo('oxo')); // false
  console.log(xo('xxxooo')); // true
  console.log(xo('xoxooxxo')); // true