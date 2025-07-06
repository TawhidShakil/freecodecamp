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


// get puncuation count

function getPunctuationCount(sentence){
  sentence = sentence.toLowerCase();
  let count = 0;
  for(const char of sentence){
    if(!char.match(/[a-z0-9\s]/)){
      count++;
    }
  }
  return count;
}

const punctuationCount = getPunctuationCount("WHAT?!?!?!?!?");
console.log(`Punctuation Count: ${punctuationCount}`);


// word count function

function getVowelCount(sentence) {
  const vowels = "aeiou";
  let count = 0;

  for (const char of sentence.toLowerCase()) {
    if (vowels.includes(char)) {
      count++;
    }
  }
  return count;
}

const vowelCount = getVowelCount("Apples are tasty fruits");
console.log(`Vowel Count: ${vowelCount}`);

function getConsonantCount(sentence) {
  const consonants = "bcdfghjklmnpqrstvwxyz";
  let count = 0;

  for (const char of sentence.toLowerCase()) {
    if (consonants.includes(char)) {
      count++;
    }
  }
  return count;
}

const consonantCount = getConsonantCount("Coding is fun");
console.log(`Consonant Count: ${consonantCount}`);

function getPunctuationCount(sentence) {
  const punctuations = ".,!?;:-()[]{}\"'–";
  let count = 0;

  for (const char of sentence) {
    if (punctuations.includes(char)) {
      count++;
    }
  }
  return count;
}

const punctuationCount = getPunctuationCount("WHAT?!?!?!?!?");
console.log(`Punctuation Count: ${punctuationCount}`);

function getWordCount(sentence){
  let numberOfWord = 0;
  let isWord = false;
  for(let i=0; i<sentence.length; i++){
    const char = sentence[i];
    if(char !== " " && !isWord){
      isWord = true;
      numberOfWord++;
    }else if(char === " "){
      isWord = false;
    }
  }
  return numberOfWord;
}

const wordCount = getWordCount("I love freeCodeCamp")
console.log(`Word Count: ${wordCount}`);