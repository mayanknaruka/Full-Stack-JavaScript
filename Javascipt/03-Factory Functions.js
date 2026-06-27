function makeAddingFunction(firstNumber) {
  // firstNumber is scoped anywhere within makeAddingFunction,
  // including returnedFunction
  // any variables declared here will also be accessible within returnedFunction

  // we don't need to name the returned function
  // this is just to reference more easily in explanation
  return function returnedFunction(secondNumber) {
    // secondNumber is scoped only within returnedFunction
    return firstNumber + secondNumber;
  }
}


const add5 = makeAddingFunction(5);
console.log(add5(2)); // 7

const add8 = makeAddingFunction(8);
console.log(add8(2)); // 10

const add79100105110 = makeAddingFunction(79100105110);
console.log(add79100105110(111687378)); // 79211792488




function createUser(name) {
  const discordName = "@" + name;

  let reputation = 0;
  const getReputation = () => reputation;
  const giveReputation = () => { reputation++; };

  return { name, discordName, getReputation, giveReputation };
}

const josh = createUser("josh");
josh.giveReputation();
josh.giveReputation();

// logs { discordName: "@josh", reputation: 2 }
console.log({
  discordName: josh.discordName,
  reputation: josh.getReputation()
});


// calculator
const calculator = (() => {
  let lastResult;

  const add = (a, b) => {
    lastResult = a + b;
    return lastResult;
  };
  const subtract = (a, b) => {
    lastResult = a - b;
    return lastResult;
  };
  const multiply = (a, b) => {
    lastResult = a * b;
    return lastResult;
  };
  const divide = (a, b) => {
    lastResult = a / b;
    return lastResult;
  };
  const getLastResult = () => lastResult;

  return { add, subtract, multiply, divide, getLastResult };
})();

console.log(calculator.add(3, 5)); // 8
console.log(calculator.subtract(6, 2)); // 4
console.log(calculator.getLastResult()); // 4
console.log(calculator.multiply(14, 5534)); // 77476
