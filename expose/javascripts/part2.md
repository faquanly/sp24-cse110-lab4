1. part2-question1: Line 12 will print out 3, because when we use "var" keyword to define "i", "i" is a global variable and it can be use everywhere.
   
2. part2-question2: Line 13 will print out 150, because "discountedPrice" is a global variable

3. part2-question3: Line 14 will print out 150, because "finalPrice" is a global variable.
   
4. part2-question4: This function will return [ 50, 100, 150 ], because when we call discountPrices() function and parse arguments into this function, it will return the value of "discounted" which is a list.
   
5. part2-question5: an error, because "i" is a local variable and it only exist inside the for loop. The print function call "i" outside this for loop, thus it gets an error.
   
6. part2-question6: an error, because "discountedPrice" is a local variable and it only exist inside the for loop. The print function call "discountedPrice" outside this for loop, thus it gets an error.

7. part2-question7: Line 14 will print out 150. Because "finalPrice" is a local variable inside the function, and line 14 is inside the function, thus it can print out finalPrice's value.

8. part2-question8: This function return [ 50, 100, 150 ]. Because when we call the function and pass arguments into this function, it will return "discounted" through calling this function.

9.  part2-question9: an error, because "i" is a local variable and it only exist inside the for loop. The print function call "i" outside this for loop, thus it gets an error.

10. part2-question10: Line 12 will print out 3 which is the length of "prices"list.

11. part2-question11: This function return [ 50, 100, 150 ]. Because when we call the function and pass arguments into this function, it will return "discounted" through calling this function.
    
**Data Types**
12. part2-question 12A: student.name
    
    part2-question 12B: student["Grad Year"]

    part2-question 12C: student.greeting()

    part2-question 12D: student["Favorite Teacher"].name

    part2-question 12E: student["Favorite Teacher"].course[0]


**Basic Operators & Type Conversion** 
13.  part2-question 13: Arithmetic
    
    question 13A: OUTPUT is `32` In this code, it treat '3' as a string and 2 as a number. Since one operand is a string, JavaScript performs concatenation, resulting in '32'.

    question 13B: OUTPUT is `1` When there is "-" operator, Java Scripts treats '3' as a number and 2 as a number to perform the substraction, resulting in 1.

    question 13C: OUTPUT is `3` Java Scripts treats 'null' as 0 and convert it to a number and perform the addition, resulting in 3.

    question 13D: OUTPUT is `3null`  Since '3' is a string, Java Scripts treat 'null' as a string and combine two strings, resulting in 3null.

    question 13E: OUTPUT is `4` Since 3 is a number, Java Scripts treats 'true' as 1 and convert it to a number and perform the addition, resulting in 4.

    question 13F: OUTPUT is `0` Java Scripts treats 'false' as 0 and 'null' as 0, and perform the addition by converting them to numbers and adding them, resulting in 0.

    question 13G: OUTPUT is `3undefined` Since '3' is a string, Java Scripts treat 'undefined' as a string and combine two strings, resulting in 3undefined.

    question 13H: OUTPUT is `NaN` When there is '-' operater, Java Scripts tried to convert '3' and 'undefined' into numbers and perform the subtraction. Since '3' is converted to numbet 3, 'undefined' is converted to NaN, resulting the output is NaN.
    
14.   part2-question 14: Comparison

    question 14A: OUTPUT is `true` Java Scripts treats '2' as a number to compare with number 1, which evaluates to 'true'

    question 14B: OUTPUT is `false` JavaScript treats '2' and '12' as strings, therefore the comparison evaluates to 'false' between two strings.

    question 14C: OUTPUT is `true` Java Scripts treats '2' as a number to compare with number 2, which evaluates to 'true'

    question 14D: OUTPUT is `false` Java Scripts treats '2' as a string and perform the comparison between string '2' and number 2, resulting the ouput is 'false'.
   
    question 14E: OUTPUT is `false` Java Scripts treats true as a number 1 and convert it to number, perform the comparison with number 2, which evaluates to 'false'.

    question 14F: OUTPUT is `true`  Since a non-zero number Boolean(2) is evaluated to true, this comparison results 'true'.

15.  part2-question 15: Explain the difference between the `==` and `===` operators.
    
    While the `==` operator compares the values of two variables after performing type conversion if necessary; the `===` operator is stricter by checking both the value and the type of operands without performing type conversion, and return 'false' if one of either values or types are not the same.


16. [part2-question16.js](part2-question16.js)
    
17. part2-question17. The result will return a `new array [2, 4, 6]`. Because when we pass 2 arguments: an array [1, 2, 3] and doSomething() function to modifyArray() function, the doSomething() will multiply the numbers in array by 2 and push them back to the newArray in modifyArray() function.

18. [part2-question18.js](part2-question18.js)

19. part2-question19: OUTPUT is `1 4 3 2`
