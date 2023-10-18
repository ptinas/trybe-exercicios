const getAverage = (number1, number2, number3, number4) => {
  try {
    number1 = parseInt(number1)
    number2 = parseInt(number2)
    number3 = parseInt(number3)
    number4 = parseInt(number4)
    checkNumber(number1, number2, number3, number4)
    return (number1 + number2 + number3 + number4) / 2
  }
  catch (error) {
    return error.message;
  }
}

const checkNumber = (number) => {
  if (isNaN(number)) {
    throw new Error('É necessário digitar um número');
  }
}

console.log(getAverage('4', 3, '2', 1))
