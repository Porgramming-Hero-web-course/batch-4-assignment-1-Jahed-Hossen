"use strict";
{
    var sentence = "typeScript is great.I love typeScript";
    var word = "TypeScript";
    var CountWord = function (Sentence, Word) {
        var lowerCaseS = Sentence.toLowerCase();
        var lowerCaseW = Word.toLowerCase();
        var words = lowerCaseS.split(' ');
        var allword = words.filter(function (word) { return word === lowerCaseW; });
        return allword.length;
    };
    var resultCount = CountWord(sentence, word);
    console.log(resultCount);
}
