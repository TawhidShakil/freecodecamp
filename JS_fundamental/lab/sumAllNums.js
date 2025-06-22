function sumAll([n,m]){
  let sum = 0;
  for(let i=Math.min(n,m); i<=Math.max(n,m); i++){
    sum += i;
  }

  return sum;
}