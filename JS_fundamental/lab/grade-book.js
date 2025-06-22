// get average Function
function getAverage(scores){
let result = 0;
  for(const score of scores){
    result += score;
  }

  const averageScore = result / scores.length;
  return averageScore;
}