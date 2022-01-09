const fs = require("fs");
let asciiArt = fs.readFileSync("./barry_filtered.txt", "utf8");

function multiply(times) {
  let out = "";
  let asciiArtLines = asciiArt.split("\n");
  let outLine = "";
  asciiArtLines.forEach((line) => {
    letters = line.split("");
    for (let i = 0; i < letters.length - 1; i++) {
      for (let j = 0; j < times; j++) {
        outLine += letters[i];
      }
    }
    for (let i = 0; i < times; i++) {
      out += `${outLine}\n`;
    }
    outLine = "";
  });
  fs.writeFileSync("./asciiArtMultiplied.txt", out, "utf8");
  replace();
}

function replace() {
  let asciiArtMultiplied = fs.readFileSync("./asciiArtMultiplied.txt", "utf8");
  let beeMovieScriptBrainfuck = fs.readFileSync(
    "./bee_script_brainfuck.txt",
    "utf8"
  );
  let out = "";
  let place = 0;
  let asciiArtLines = asciiArtMultiplied.split("\n");
  let brainfuckScriptLetters = beeMovieScriptBrainfuck.split("");

  let outLine = "";
  asciiArtLines.forEach((line) => {
    let letters = line.split("");
    for (let i = 0; i < letters.length - 1; i++) {
      if (place < brainfuckScriptLetters.length) {
        if (letters[i] === "M") {
          outLine += brainfuckScriptLetters[place];
          place++;
        } else {
          outLine += letters[i];
        }
      }
    }
    out += `${outLine}\n`;
    outLine = "";
  });
  fs.writeFileSync("./replaced.txt", out, "utf8");
}
multiply(4);
