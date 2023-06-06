// # Boolean Logic Challenge

// Background
// As a career developer you will have to read other peoples' code, A LOT of it, and learning how to read boolean expressions is a core part of understanding how a codebase works.

// MVP
// Without running the code, figure out the output for each expression, including whether the output is truthy / falsey.

// Be prepared to tell us your reasoning!

```
2 == '2'; true - as JS will convert data type
2 === 2; true.
2 === '2'; false - different data types
'2' + 3 == 23; true - a string of 23 == number of 23
'2' + 3 === 5; false - string of 23 is !== 5
10 % 3; true - gives the number 1
10 % 3 === 1; true -> 1 === 1
(100 % 7) % 5; ??true -> non 0 number
(100 % 7) % 5 !== 0; ?? true-> non 0 number
(100 % 7) % 9 == 2; ?? false
!(10 % 2); true - 10 % 2 is false, so not false is true
!!!!((10 % 7) % 3); False -> expression is 0. Not false is true, so not not false is false
10 % 3 === -1 % 2; false -- 1 is not the same
(892783 != '89278' + 3) == 0; True? expression in brackets evaluates to false because they are equal. False == 0 is true?
true && false; False
false || true; True
true || false; True
true || false; True
true || false + true; True
true * false && false + true; False because at least 1 false (true * false == 0) && (false + true == 1)
10 && 123 && -1 && 3; True -> non-0 values are true , so 4 true == true?
10 && 123 && 0 && 3; false -> at least 1 false (0) which makes the whole expression false
(10 && (123 || '') && parseInt('Roisin')) || 23 / 23 - 1;
FALSE - the above re-written: ((10 && true) && false)) or false


3 && 'Calum' && ('' || 26); true (true && true && true)
3 && 'Remi' && (null || 86 * 0 || ('' + 1 && 'Cat' + 'Dog'));
=>true && true && (' 1' && 'CatDog')
=> true

```;
