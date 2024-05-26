function convertToRoman(num) {
  let final = '';
  while(num > 0){
    if(num >= 1000){
      final +='M';
      num -= 1000;
    }else if(num >= 900){
      final +='CM';
      num -= 900;
    }else if(num >= 500){
      final +='D';
      num -= 500;
    }else if(num >= 400){
      final +='CD';
      num -= 400;
    }else if(num >= 100){
      final +='C';
      num -= 100;
    }else if(num >= 90){
      final +='XC';
      num -= 90;
    }else if(num >= 50){
      final +='L';
      num -= 50;
    }else if(num >= 40){
      final +='XL';
      num -= 40;
    }else if(num >= 10){
      final +='X';
      num -= 10;
    }else if(num >= 9){
      final +='IX';
      num -= 9;
    }else if(num >= 5){
      final +='V';
      num -= 5;
    }else if(num >= 4){
      final +='IV';
      num -= 1000;
    }else if(num >= 1){
      final +='I';
      num -= 1;
    }
  }
    return final;
}
  


convertToRoman(36);
