gitconst a = process.argv.slice(2);

if (a.length < 3) 
{
  console.log("Invalid: Insufficient values!!");
} 
else {
  const op = a[0].toUpperCase();
  const val = a.slice(1).map(Number);

  switch (op) {
    case "ADD":
      const sum = val.reduce((total, value) => total + value);
      console.log(`${val.join("+")} = ${sum}`);
      break;

    case "SUB":
      if (val.length !== 2) {
        console.log("Invalid: Input need 2 values");
      } else {
        const diff = val[0] - val[1];
        console.log(`${val[0]}-${val[1]} = ${diff}`);
      }
      break;

    case "MUL":
      const product = val.reduce((total, value) => total * value);
      console.log(`${val.join("*")} = ${product}`);
      break;

    case "DIV":
      if (val.length !== 2) {
        console.log("Invalid: Input need 2 values");
      } else if (val[1] === 0) {
        console.log("Invalid: Division by zero not possible");
      } else {
        const div = val[0] / val[1];
        console.log(`${val[0]}/${val[1]} = ${div}`);
      }
      break;

    default:
      console.log("Error!! Invalid operation");
    }
}
