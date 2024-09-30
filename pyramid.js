const row_number = 10;
const character = "#";

for(let i = 1; i < row_number; i++){
    console.log(" ".repeat(row_number - i) + character.repeat(i) + " ".repeat(row_number - i));
}