const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question(`What's your nickname?`, (answer) => {
  const one = answer;
  rl.question(`What's an activity you like doing?`, (answer2) => {
    const two = answer2;
    rl.question(`What is your favourite song?`, (answer3) => {
      const three = answer3;
      rl.question(`Which meal is your favourite (eg: dinner, brunch, etc.)`, (answer4) => {
       const four = answer4;
       rl.question(`What's your favourite thing to eat for that meal?`, (answer5) => {
        const five = answer5
        rl.question(`Which sport is your absolute favourite?`, (answer6) => {
          const six = answer6
          rl.question(`Whats your favourite game?`, (answer7) => {
           const seven = answer7
           console.log(`Thank you for answering all the questions!`)
           console.log(`Nickname : ${one}`)
           console.log(`Activity you like : ${two}`)
           console.log(`Song you like : ${three}`)
           console.log(`Fav meal : ${four}`)
           console.log(`Fav thing to eat for that meal : ${five}`)
           console.log(`Fav sport : ${six}`)
           console.log(`Fav game : ${seven}`)
           rl.close();
          })
        })
       })
      })
    });
  });
});


rl.question(``, () => {
       
})