const userInput = "g@ndou";

const cussWordsHindi: string[] = [
  "madarchod/mc",
  "gandu",
  "behen ke lode",
  "bhosdike",
  "chut",
];

///////////////////////////////////add new cuss words here/////////////////////////////////////////////////////
function addcussWordsHindi(newCuss: string) {
  cussWordsHindi.push(newCuss)
 };

 addcussWordsHindi("lode"); //<-----for-ex---->

 /////////////////////////////////////////prompt///////////////////////////////////////
export const openAIPrompt: string = `
These are the flag words in our api : ${cussWordsHindi.join(", ")}.
Read the following messages and see if user is trying to use these words by changing the spelling a little bit or by using special characters or by using abbreviated forms. 
Answer : 
1) yes or no with a reason. 
2) mention how many cuss words have been used .
Messages : ${userInput}`




