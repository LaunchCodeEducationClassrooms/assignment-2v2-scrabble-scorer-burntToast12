// inspired by https://exercism.io/tracks/javascript/exercises/etl/solutions/91f99a3cca9548cebe5975d7ebca6a85

const input = require("readline-sync");

const oldPointStructure = {
  1: ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'],
  2: ['D', 'G'],
  3: ['B', 'C', 'M', 'P'],
  4: ['F', 'H', 'V', 'W', 'Y'],
  5: ['K'],
  8: ['J', 'X'],
  10: ['Q', 'Z']
};

function oldScrabbleScorer(word) {
	word = word.toUpperCase();
	let letterPoints = 0;
 
	for (let i = 0; i < word.length; i++) {
 
	  for (const pointValue in oldPointStructure) {
  
		 if (oldPointStructure[pointValue].includes(word[i])) {
			letterPoints += Number(pointValue);
		 }
 
	  }
	}
	return letterPoints;
 }



// your job is to finish writing these functions and variables that we've named //
// don't change the names or your program won't work as expected. //

function initialPrompt() {
  initial = "";
  initial = input.question("Let's play some scrabble! Enter a word:");
  return initial;

};

function simpleScore(word){
word = word.toUpperCase();
let score = word.length;
return score;

}

function vowelBonusScore(word){
  word = word.toUpperCase();
  let vowels = ['A', 'E', 'I', 'O','Y'];

  let letterPoints = 0;
  
  for (let i = 0; i < word.length; i++){
    if (vowels.includes(word[i])){
      letterPoints += 3;

    }
    else{
      letterPoints += 1;
    }
    
  }
return letterPoints;
}

let simpleScorer = {
    name: "Simple Score",
    description: "Each letter is worth 1 point.",
    scorerFunction: simpleScore,
  };

let vowelBonusScorer = {
    name: "Bonus Vowels",
    description: "Vowels are 3 pts, consonants are 1 pt.",
    scorerFunction: vowelBonusScore,
  };

let scrabbleScorer = {
    name: "Scrabble",
    description: "	The traditional scoring algorithm.",
    scorerFunction: scrabbleScore,
  };

const scoringAlgorithms = [
  simpleScorer,
  vowelBonusScorer,
  scrabbleScorer,
];
  

function scorerPrompt() {
  let prompt = 0;

  prompt = input.question(`Which scoring algorithm would you like to use?\n
0 - ${scoringAlgorithms[0].name}\n
1 - ${scoringAlgorithms[1].name}\n
2 - ${scoringAlgorithms[2].name}\n
Enter 0, 1, or 2: `);

  
    console.log(`Score for "${initial}": ` + scoringAlgorithms[prompt].scorerFunction(initial));

return prompt
}

function transform(newObject) {
  let transformed = {};

  for (const points in newObject){
    for (let i = 0; i < newObject[points].length; i++){
      transformed[newObject[points][i]] = Number(points);
    }
  }
  return transformed;
}
let newPointStructure = transform(oldPointStructure);
newPointStructure[' '] = '0';

function scrabbleScore(word){
  word = word.toUpperCase();
	let letterPoints = 0;
 
	for (let i = 0; i < word.length; i++) {
	  for (const letter in newPointStructure) {
		 if (letter == word[i]) {
			letterPoints += Number(newPointStructure[letter]);
     }
	  }

	}
	return letterPoints;
}


function runProgram() {
  console.log(newPointStructure);
  initialPrompt();
  scorerPrompt();
  
   
}

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
   initialPrompt: initialPrompt,
   transform: transform,
   oldPointStructure: oldPointStructure,
   simpleScore: simpleScore,
   vowelBonusScore: vowelBonusScore,
   scrabbleScore: scrabbleScore,
   scoringAlgorithms: scoringAlgorithms,
   newPointStructure: newPointStructure,
	runProgram: runProgram,
	scorerPrompt: scorerPrompt
};

