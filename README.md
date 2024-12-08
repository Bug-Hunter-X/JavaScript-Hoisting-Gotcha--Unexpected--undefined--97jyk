# JavaScript Hoisting Surprise: Why You Might See 'undefined'

This example demonstrates a common pitfall in JavaScript related to hoisting.  Hoisting moves variable declarations to the top of their scope, but *not* their assignments.  This can result in unexpected `undefined` outputs if you use a variable before it's declared and assigned a value.

The `bug.js` file contains the problematic code.  The `bugSolution.js` shows the corrected version.

## How to Reproduce the Bug

1.  Open `bug.js`.
2.  Run the code in a JavaScript environment (browser's console, Node.js, etc.).
3.  Observe that `myFunc()` outputs `undefined` instead of throwing an error.

## Solution

The solution, in `bugSolution.js`, is to declare and initialize the variable `a` before using it. This avoids the hoisting issue and results in the expected output.