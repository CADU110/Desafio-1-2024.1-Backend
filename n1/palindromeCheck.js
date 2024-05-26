function palindrome(str) {
  let strSemEspacos = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
  let tam = strSemEspacos.length
  let m = Math.floor(tam/2);
 
  let s;
  let d;
  if(tam%2==0){
    s = m;
    d = m-1;
  }else{
    s = m+1;
    d = m-1;
  }
  let i = 0;
  while(s < tam && d >= 0){
    if(strSemEspacos[s]==strSemEspacos[d]){
      i++;
    }
    s++;
    d--;
  }

  if(i == m){
    return true;
  }else{
    return false;
  }
}


palindrome("eye");
