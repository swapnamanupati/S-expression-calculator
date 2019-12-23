This repo consists of a command line program that acts as a simple calculator
It takes a single argument as an expression and prints out the integer result of evaluating it.

Assuming the program is implemented in Javascript, invocations should look like:

$ node calcy-add-mul.js "(multiply 2 (add (multiply 2 3) 8))"
28

Expression semantics:

The goal is to write an integer calculator that supports the add and multiply functions. The program should take an expression string as a command line argument and print out the result of evaluating the expression.

The examples follow the convention:

INPUT
OUTPUT

Where INPUT is the expression string passed as a single argument and OUTPUT is the output printed to stdout by your program.

Integers
Integers should be evaluated as the number they represent:

123
123

0
0

Add
The add function should:

    accept exactly 2 sub-expressions
    fully evaluate the 2 sub-expressions
    return the result of adding the 2 sub-expressions together

(add 1 1)
2

(add 0 (add 3 4))
7

(add 3 (add (add 3 3) 3))
12

Multiply
The multiply function should:

    accept exactly 2 sub-expressions
    fully evaluate the 2 sub-expressions
    return the result of multiplying the 2 sub-expressions together

(multiply 1 1)
1

(multiply 0 (multiply 3 4))
0

(multiply 2 (multiply 3 4))
24

(multiply 3 (multiply (multiply 3 3) 3))
81

Examples

Besides the examples already provided above, it should be possible to mix and match integers and function calls to build arbitrary calculations:

(add 1 (multiply 2 3))
7

(multiply 2 (add (multiply 2 3) 8))
28



