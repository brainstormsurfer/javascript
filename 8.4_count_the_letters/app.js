const countLetters = (wordsArr) => {
  let wordsStr = wordsArr.join("").toUpperCase();
  let charCounterObj = {};
  let mostAppearancesChar

  for (const char of wordsStr) {
    if (char !== " ")
      if (!charCounterObj[char]) {
        charCounterObj = {
          ...charCounterObj,
          [char]: 1,
        };
      } else {
        charCounterObj = {
          ...charCounterObj,
          [char]: charCounterObj[char] + 1,
        };
      }
  }

  let maxOccursCharCounter = 0;
  let mostOccursCharsArr = ['']

  for (const char in charCounterObj) {
     if (charCounterObj[char] > maxOccursCharCounter) {
        maxOccursCharCounter = charCounterObj[char]
        // An EXISTING ARRAY with (recent) MAX OCCURRENCES CHARS is getting DELETED (/"SHIFTED out") for a CHAR with MORE occurrences
        for (let i = 0 ; i <= mostOccursCharsArr.length ; i++) {         
            mostOccursCharsArr.shift()
        }
        // (*long live the NEW king)
        mostOccursCharsArr.push(char)                
     } else if (charCounterObj[char] === maxOccursCharCounter) { /* (*sharing the crown) */    
       mostOccursCharsArr.push(char)
     }
     mostAppearancesChar = { [maxOccursCharCounter] : mostOccursCharsArr }
}
console.log("Most Occurrences Chars: ", mostAppearancesChar);
  return charCounterObj;
};

const array = ["Heeello la la laa", "Good Day", "Your Welcome", "hotdog", "hamburgers"];

console.log(countLetters(array));