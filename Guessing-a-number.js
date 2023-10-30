#! /usr/bin/env node
console.clear();
import promptSync from "prompt-sync";
import chalk from "chalk";
import chalkAnimation from "chalk-animation";
import gradient from "gradient-string";
import figlet from "figlet";
const prompt = promptSync();
let name;

setTimeout(() => {
  const rainbow = chalkAnimation.rainbow(`Let's play a game:\n`);
  rainbow.start();
}, 0);

setTimeout(() => {
  console.log(`
    ${chalk.black("Instructions to play a game:\n")}
    -->There are three levels in the game.\n
    \t-->Level_1(Range:1-25,Chances:1-30+Trial Shot)
    \t-->Level_2(Range:1-50,Chances:1-25+Trial Shot)
    \t-->Level_3(Range:1-100,Chances:1-20+Trial Shot)\n
    -->Every level is more complex than the other.
    -->Be Careful and become a winner of this game.
  `);
}, 2000);

setTimeout(() => {
  name = prompt("What is your name ?(player):");
}, 3000);

let level_1 = () => {
  console.log(gradient.cristal(`Welcome to level 1 ${name}:`))
  let randomNumber = Math.floor(Math.random() * 25);
  let chances = 30;
  console.log(
    chalk.magenta(`${name},you have ${chances} chances left to guess a right number.`)
  );
  let userNumber = prompt("Let's get a try:");
  userNumber = Number.parseInt(userNumber);
  if (randomNumber == userNumber) {
    console.log(
      chalk.cyan(
        `Congratulations!${name}.You have won the level 1 of our game in ${
          30 - chances
        } chances.`
      )
    );
  } else {
    do {
      if (randomNumber > userNumber) {
        userNumber = prompt("Enter a greater number:");
        userNumber = Number.parseInt(userNumber);
        chances--;
        console.log(
          chalk.magenta(`${name},you have ${chances} chances left to guess a right number.`)
        );
        if (randomNumber == userNumber) {
          console.log(
            chalk.cyan(
              `Congratulations!${name}.You have won the level 1 of our game in ${
                30 - chances
              } chances.`
            )
          );
          break;
        } else if (chances == 0 && randomNumber != userNumber) {
          console.log(
            chalk.red(
              `Sorry,you have ${chances} chances left.Better luck next time.`
            )
          );
        }
      } else if (randomNumber < userNumber) {
        userNumber = prompt("Enter a smaller number:");
        userNumber = Number.parseInt(userNumber);
        chances--;
        console.log(
          chalk.magenta(`${name},you have ${chances} chances left to guess a right number.`)
        );
        if (randomNumber == userNumber) {
          console.log(
            chalk.cyan(
              `Congratulations!${name}.You have won the level 1 of our game in ${
                30 - chances
              } chances.`
            )
          );
          break;
        } else if (chances == 0 && randomNumber != userNumber) {
          chalk.red(
            `Sorry,you have ${chances} chances left.Better luck next time.`
          );
        }
      } else if (randomNumber == userNumber) {
        console.log(
          chalk.cyan(
            `Congratulations!${name}.You have won the level 1 of our game in ${
              30 - chances
            } chances.`
          )
        );
        break;
      }
    } while (chances != 0);
  }
  if(randomNumber == userNumber){
    level_2();
  }
};

let level_2 = () => {
  console.log(gradient.cristal(`Welcome to level 2 ${name}:`))
  let randomNumber = Math.floor(Math.random() * 50);
  let chances = 25;
  console.log(
    chalk.magenta(`${name},you have ${chances} chances left to guess a right number.`)
  );
  let userNumber = prompt("Let's get a try:");
  userNumber = Number.parseInt(userNumber);
  if (randomNumber == userNumber) {
    console.log(
      chalk.cyan(
        `Congratulations!${name}.You have won the level 1 of our game in ${
          25 - chances
        } chances.`
      )
    );
  } else {
    do {
      if (randomNumber > userNumber) {
        userNumber = prompt("Enter a greater number:");
        userNumber = Number.parseInt(userNumber);
        chances--;
        console.log(
          chalk.magenta(`${name},you have ${chances} chances left to guess a right number.`)
        );
        if (randomNumber == userNumber) {
          console.log(
            chalk.cyan(
              `Congratulations!${name}.You have won the level 1 of our game in ${
                25 - chances
              } chances.`
            )
          );
          break;
        } else if (chances == 0 && randomNumber != userNumber) {
          console.log(
            chalk.red(
              `Sorry,you have ${chances} chances left.Better luck next time.`
            )
          );
        }
      } else if (randomNumber < userNumber) {
        userNumber = prompt("Enter a smaller number:");
        userNumber = Number.parseInt(userNumber);
        chances--;
        console.log(
          chalk.magenta(`${name},you have ${chances} chances left to guess a right number.`)
        );
        if (randomNumber == userNumber) {
          console.log(
            chalk.cyan(
              `Congratulations!${name}.You have won the level 1 of our game in ${
                25 - chances
              } chances.`
            )
          );
          break;
        } else if (chances == 0 && randomNumber != userNumber) {
          chalk.red(
            `Sorry,you have ${chances} chances left.Better luck next time.`
          );
        }
      } else if (randomNumber == userNumber) {
        console.log(
          chalk.cyan(
            `Congratulations!${name}.You have won the level 2 of our game in ${
              25 - chances
            } chances.`
          )
        );
        break;
      }
    } while (chances != 0);
  }
  if(randomNumber == userNumber){
    level_3();
  }
};

let level_3 = () => {
  console.log(gradient.cristal(`Welcome to level 3 ${name}:`))
  let randomNumber = Math.floor(Math.random() * 100);
  let chances = 20;
  console.log(
    chalk.magenta(`${name},you have ${chances} chances left to guess a right number.`)
  );
  let userNumber = prompt("Let's get a try:");
  userNumber = Number.parseInt(userNumber);
  if (randomNumber == userNumber) {
    console.log(
      chalk.cyan(
        `Congratulations!${name}.You have won the level 1 of our game in ${
          20 - chances
        } chances.`
      )
    );
  } else {
    do {
      if (randomNumber > userNumber) {
        userNumber = prompt("Enter a greater number:");
        userNumber = Number.parseInt(userNumber);
        chances--;
        console.log(
          chalk.magenta(`${name},you have ${chances} chances left to guess a right number.`)
        );
        if (randomNumber == userNumber) {
          console.log(
            chalk.cyan(
              `Congratulations!${name}.You have won the level 1 of our game in ${
                20 - chances
              } chances.`
            )
          );
          break;
        } else if (chances == 0 && randomNumber != userNumber) {
          console.log(
            chalk.red(
              `Sorry,you have ${chances} chances left.Better luck next time.`
            )
          );
        }
      } else if (randomNumber < userNumber) {
        userNumber = prompt("Enter a smaller number:");
        userNumber = Number.parseInt(userNumber);
        chances--;
        console.log(
          chalk.magenta(`${name},you have ${chances} chances left to guess a right number.`)
        );
        if (randomNumber == userNumber) {
          console.log(
            chalk.cyan(
              `Congratulations!${name}.You have won the level 1 of our game in ${
                20 - chances
              } chances.`
            )
          );
          break;
        } else if (chances == 0 && randomNumber != userNumber) {
          chalk.red(
            `Sorry,you have ${chances} chances left.Better luck next time.`
          );
        }
      } else if (randomNumber == userNumber) {
        console.log(
          chalk.cyan(
            `Congratulations!${name}.You have won the level 3 of our game in ${
              20 - chances
            } chances.`
          )
        );
        break;
      }
    } while (chances != 0);
  }
  winner();
};

setTimeout(() => {
  level_1();
}, 4000);

function winner() {
  console.clear();
  figlet("Congratulaions!", function (err, data) {
    if (err) {
      console.log("Something went wrong...");
      console.dir(err);
      return;
    }
    console.log(gradient.pastel(data) + "\n");
    console.log(chalk.green(`${name},you are the winner of our game.`));
  });
}
