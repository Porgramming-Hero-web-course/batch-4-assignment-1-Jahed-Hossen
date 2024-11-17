{const sentence = "typeScript is great.I love typeScript";
  const word = "TypeScript";
  

const CountWord = (Sentence: string, Word: string): number => {
    const lowerCaseS = Sentence.toLowerCase();
    const lowerCaseW = Word.toLowerCase();
    const words = lowerCaseS.split(' ');
    const allword= words.filter(word => word === lowerCaseW);
    return allword.length;
  };

  const resultCount = CountWord(sentence, word);

  
  console.log(resultCount);
}