function getVowelCount(sentence){
  let count = 0;
  sentence = sentence.toLowerCase();
  for(const char of sentence){
    if(char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u'){
      count += 1;
    }
  }

  return count;
}

const vowelCount = getVowelCount("Apples are tasty fruits")
console.log(`Vowel Count: ${vowelCount}`)

// consonant count function
function getConsonantCount(sentence){
  sentence = sentence.toLowerCase();
  let count = 0;
  for(const char of sentence){
    if(char >= 'a' && char <= 'z' && !'aeiou'.includes(char)){
      count++;
    }
      
    }
     return count;
  }

const consonantCount = getConsonantCount("Coding is fun");
console.log(`Consonant Count: ${consonantCount}`);