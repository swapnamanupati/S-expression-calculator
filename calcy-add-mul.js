/**
 *
 * Evaluates the provided expression.
 * Currently supports :
 *  Add and Multiple options.
 *  Any number of arguments can be passed to above operations.
 *
 *
 * Execute file using
 *
 * node calcy-add-mul.js "(multiply 2 (add (add 2 3) 8))"
 *
 */
const ADDITION = "add";
const MULTIPLY = "multiply";
const OPEN_PARENTHESIS = "(";
const CLOSED_PARENTHESIS = ")";
const UN_CAUGHT_EXPRESSION = "uncaughtException";

/**
 *
 * Calculate the expression
 *
 */
calculateExpression = expression => {
  //Checking whether given string is an expression or a number
  if (!expression.includes(OPEN_PARENTHESIS)) {
    return expression;
  }
  //Checking parenthesis in given string are balanced or not
  if (!areParenthesisBalanced(expression)) {
    console.log("Parenthesis is not Balanced in a given string");
    process.exit();
  }
  for (i = 0; i < expression.length; i++) {
    if (expression.charAt(i) == OPEN_PARENTHESIS) {
      startParenthisisPosition = i;
    }
    if (expression.charAt(i + 1) == CLOSED_PARENTHESIS) {
      endParenthisisPosition = i + 1;
      break;
    }
  }
  //extracting the innermost expression of the string
  let innerMostExpression = expression.slice(
    startParenthisisPosition + 1,
    endParenthisisPosition
  );
  //splitting the innermost expression of the string
  let innerMostExpressionArray = innerMostExpression.split(" ");
  //Evaluating the innermost expression of the string
  let resultOfInnerMostExpression = operation(innerMostExpressionArray);
  //Replacing the evaluated expression with integer
  let nextExpression = expression.replace(
    `(${innerMostExpression})`,
    resultOfInnerMostExpression
  );
  return calculateExpression(nextExpression);
};

/**
 *
 * Checking parenthesis in given string are balanced or not
 *
 */
areParenthesisBalanced = expression => {
  let stack = [];
  let map = {
    "(": ")"
  };
  for (let i = 0; i < expression.length; i++) {
    if (expression[i] === OPEN_PARENTHESIS) stack.push(expression[i]);
    else if (expression[i] === CLOSED_PARENTHESIS) {
      let last = stack.pop();
      if (expression[i] !== map[last]) return false;
    }
  }
  if (stack.length !== 0) return false;
  return true;
};

/**
 *
 * Performs the operation on the
 * arguments provided.
 *
 * To add new operator support add another switch case.
 *
 */
operation = expressionArray => {
  const operator = expressionArray[0];
  expressionArray.shift();
  switch (operator ) {
    case ADDITION:
      let sum = 0;
      for (let i = 0; i < expressionArray.length; i++) {
        sum += parseInt(expressionArray[i]);
      }
      return sum;
    case MULTIPLY:
      let multiplicationValue = 1;
      for (let j = 0; j < expressionArray.length; j++) {
        multiplicationValue *= parseInt(expressionArray[j]);
      }
      return multiplicationValue;
    default:
      console.log("Operation not supported for", operator );
      process.exit();
      break;
  }
};

/**
 *
 * Actual program execution.
 *
 */
try {
  let programAgruements = process.argv.slice(2);
  console.log("Evaluating : ", programAgruements[0]);
  const calcyValue = calculateExpression(programAgruements[0]);
  console.log("Value : ", calcyValue);
} catch (err) {
  console.log("Error occurred during execution ", err);
}