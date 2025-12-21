let readlineSync = require('readline-sync');
let kuler = require('kuler');
let score = 0;

let userName = readlineSync.question("What's your name ?")
console.log(kuler(`Hi ${userName}, welcome to the Quizify`, "#93C5FD" ))

console.log("\nPlease select the correct option from the following\n")

/** Creating a dataset */

const database = {
 
  
   data : [
     {
    question : `let a = {} , b = {}
console.log(a == b)
console.log(a === b)` ,
    Option : {
      a : "false false",
      b : "true false",
      c : "false true",
      d : "true true"
    },
    correctAnswer : "a"
  },
          { question : `Object.assign(target,source)`,
           Option :{
             a : 'Deep Copy',
             b :'Shallow Copy',
             c : 'Nested Copty',
             d : 'Creates a new refernece'
           },
           correctAnswer : 'b'
          
          },
          {
            question : `Is method chaining possible with forEach ?`,
            
            Option :{
              a : 'Yes',
              b : 'No'
            },
            correctAnswer : 'b'
          }
         ]
    }

/** Create a Leader Board */
const leaderBoard = {
  data : [{
    name : 'Rahul',
    score : 1
  },
          {
            name : 'Riya',
            score : 2
          },
          {
            name : 'Raj',
            score : 0
          }]
}

/** Main Logic */

function playGame(userAnswer,correctAnswer){
  if(userAnswer === correctAnswer){
    
    console.log(kuler("Correct Answer","#059669"));
    score++
  }
  else{
    console.log(kuler("Wrong Answer","#DC2626"))
    console.log(`Correct Answer  is ${correctAnswer} `)
  }
  
}



function showQuestionAndOptions(database){
  for(let i =0 ;i < database.data.length;i++){
    console.log(`\nQ${i+1} - ${database.data[i].question}\n`);
    for(let key in database.data[i].Option){
      console.log(`${key} - ${database.data[i].Option[key]}`)
    }
    let userAnswer =  readlineSync.question("Enter your answer - (a/b/c/d) -").toLowerCase();
     playGame(userAnswer,database.data[i].correctAnswer);
  }
  
}


function highScorer(leaderBoard){
  leaderBoard.data.push({name : userName,score : score})
 
  let sortedScoreList = leaderBoard.data.sort((a,b) => b.score - a.score);
  console.log("\nCheck your position on Leader Board 🎀")
 for(let leader of sortedScoreList){
   console.log(`${leader.name} - Score : ${leader.score}`)
 }
  
}
showQuestionAndOptions(database);
console.log(`\nYour score is - ${score}`);
highScorer(leaderBoard)