// get average Function
function getAverage(scores){
let result = 0;
  for(const score of scores){
    result += score;
  }

  const averageScore = result / scores.length;
  return averageScore;
}

// get Grade function

function getGrade(score){
if(score === 100){
  return 'A+';
}else if(score>=90){
  return 'A';
}else if(score>= 80 ){
  return 'B';
}else if(score>=70){
  return 'C';
}else if(score>=60){
  return 'D';
}else{
  return 'F';
}


}