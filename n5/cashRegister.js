function checkCashRegister(price, cash, cid) {
  let objt = 
  {
    status: "", 
    change: []
  };

  const unit = {
    "PENNY": 0.01,
    "NICKEL": 0.05,
    "DIME": 0.1,
    "QUARTER": 0.25,
    "ONE": 1,
    "FIVE": 5,
    "TEN": 10,
    "TWENTY": 20,
    "ONE HUNDRED": 100,
  }

  let retorno = cash - price;
  
  let somacid = cid.reduce((acc, curr) => acc + curr[1], 0);
let change = [];
let i;
for(i = cid.length-1; i>=0; i--){
  let moeda = cid[i][0];
  let valorcid = cid[i][1];
  let valorunit = unit[moeda];
  let x = 0;
  while(retorno >= valorunit && valorcid >0){
    retorno -= valorunit;
    retorno = retorno.toFixed(2);
    valorcid -= valorunit;
    x++;
  }
  if(x>0){
    change.push([moeda,(valorunit*x)]);
  }
  
}
let somafinal = change.reduce((acc, curr) => acc + curr[1], 0);
somafinal = somafinal - somacid;



if(retorno > 0){
  objt.status="INSUFFICIENT_FUNDS";
  objt.change=[];
}else if(somafinal == retorno){
  objt.status="CLOSED";
  objt.change=cid;
}else{
  objt.status="OPEN";
  objt.change=change;
}
  return objt;
}

checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]);
