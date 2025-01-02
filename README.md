# Unexpected Arithmetic Results with undefined and null

This example demonstrates a common pitfall in JavaScript related to loose typing and arithmetic operations involving `undefined` and `null`.

The `foo` function adds two numbers.  However, when called with `undefined` or `null` as arguments, the results are not always intuitive.

`undefined + number` results in `NaN` (Not a Number).
`null + number` results in the number (as `null` is coerced to 0). 

This behavior can be surprising and lead to unexpected bugs if not handled carefully.

The solution demonstrates how to explicitly handle these cases to ensure more predictable behavior.