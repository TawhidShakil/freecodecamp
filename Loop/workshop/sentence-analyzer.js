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