const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("What's your name? Nicknames are also acceptable :) ", (name) => {
  console.log(`Thank you, ${name}!`);
  rl.question("What's an activity you like doing?", (activity) => {
    // console.log(`Thank you!`);
    rl.question("What do you listen to while doing that?", (music) => {
      rl.question(
        "What's your favourite thing to eat for that meal?",
        (meal) => {
          rl.question("Which sport is your absolute favourite?", (sport) => {
            rl.question(
              "What is your superpower? In a few words, tell us what you are amazing at!",
              (superpower) => {
                rl.close();
              }
            );
          });
        }
      );
    });
  });
});
