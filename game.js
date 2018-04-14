//Random word is selected and exported
var wordsToGuess = ["Godzilla", "Manticore", "Zombie", "Basilisk", "Frankenstein", "Siren", "Banshee", "Succubus", "Werewolf", "Kraken", "Vampire"];
var randoIndex = Math.floor(Math.random() * wordsToGuess.length);
var randoWord = wordsToGuess[randoIndex];
exports.randoWord = randoWord;