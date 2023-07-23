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
        // AN EXISTING ARRAY WITH (recent) MAX OCCURRENCES CHARS, GETTING DELETED (/"SHIFTED OUT") FOR A CHAR WITH MORE OCCURRENCES
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

const array = ["Heeelloa la la la", "Good Day", "Your Wellcome", "hhhotdog", "hamburgers"];

console.log(countLetters(array));