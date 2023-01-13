//Phrase
const input = 'Whales are sexy!';
//Whales only use vowels
const vowels = ['a', 'e', 'i', 'o', 'u'];
//Translation area
let resultArray = [];

//Loop through the phrase
for(let i = 0; i < input.length; i++){
  //Loop through the vowels
  for(let j = 0; j < vowels.length; j++){
    //Check for vowels in the phrase
    if (input[i] === vowels[j]){
      //'E' is extended in Whale
      if(input[i] === 'e'){
        resultArray.push(vowels[j]);
      }
      //'U' is also extended in Whale
      if(input[i] === 'u'){
        resultArray.push(vowels[j]);
      }
      //Push all vowels
      resultArray.push(vowels[j]);
    }
  }
}

//Format the whale translation
const resultString = resultArray.join('').toUpperCase();

//Let's see what we said in Whale
console.log(resultString);
