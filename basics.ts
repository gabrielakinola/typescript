function add(
  n1: number,
  n2: number,
  showResult: boolean,
  resultPhrase: string
) {
  if (showResult) {
    const result = n1 + n2;
    return console.log(resultPhrase + result);
  }
  return n1 + n2;
}

const number1 = 5;
const number2 = 2.8;
const printResult = true;
const resultPhrase = `Result is `;

add(number1, number2, printResult, resultPhrase);
