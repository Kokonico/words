var alphabet = Array.from({ length: 26 }, (_, i) => String.fromCharCode(65 + i));

var currentLength = 1;

var currentWordIndex = 0;

var totalWordsGenerated = 0;

function GenWord() {

  var newWord = [];
  var totalWords = Math.pow(alphabet.length, currentLength);

  if (currentWordIndex >= totalWords) {
    currentLength++;
    currentWordIndex = 0;
  }

  var wordIndex = currentWordIndex;
  for (var i = 0; i < currentLength; i++) {
    var letterIndex = wordIndex % alphabet.length;
    newWord.push(alphabet[letterIndex]);
    wordIndex = Math.floor(wordIndex / alphabet.length);
  }
  newWord.reverse();

  document.getElementById('word').textContent = newWord.join('');

  currentWordIndex++;
  totalWordsGenerated++;

  document.getElementById('current-length').textContent = currentLength;
  document.getElementById('total-words-generated').textContent = totalWordsGenerated;
}

setInterval(GenWord, 0);