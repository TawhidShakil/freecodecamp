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

// add pass or fail 

function hasPassingGrade(score){
  const grade = getGrade(score)
  if(grade === 'F'){
    return false;
  }
  return true;
}

// final message

function studentMsg(scores, studentScore){
const average = getAverage(scores);
const grade = getGrade(studentScore);
const passed = hasPassingGrade(studentScore);

  if(passed){
    return `Class average: ${getAverage(scores)}. Your grade: ${getGrade(studentScore)}. You passed the course.`
  }

  return `Class average: ${getAverage(scores)}. Your grade: ${getGrade(studentScore)}. You failed the course.`
}