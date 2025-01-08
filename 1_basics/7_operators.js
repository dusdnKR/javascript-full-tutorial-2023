/**
 * Operators
 * 
 * 연산자
 */

/**
 * 산술 연산자
 * 
 * 1) +
 * 2) -
 * 3) *
 * 4) /
 * 5) %
 */
console.log(10 + 10);
console.log(10 - 10);
console.log(10 * 10);
console.log(10 / 10);
console.log(10 % 10);
console.log(10 % 3);
console.log(10 * (10+10));
console.log('----------------');

/**
 * 증가와 감소
 */
let number = 1;

number++;
console.log(number);

number--;
console.log(number);
console.log('----------------');

/**
 * 연산자의 위치
 */
let result = 1;
console.log(result);

result = number++;
console.log(result, number); //1 2

result = number--;
console.log(result, number); //2 1

result = ++number;
console.log(result, number); //2 2

result = --number;
console.log(result, number); //1 1

/**
 * 숫자가 아닌 타입에 +, -
 * 
 * 1) 숫자로 변환
 * 2) NaN
 */
let sample = '99';
console.log(sample);
console.log(typeof sample); //string
console.log(+sample); // 99
console.log(typeof +sample); //number

sample = true;
console.log(sample);
console.log(typeof sample); //boolean
console.log(+sample);
console.log(typeof +sample); //number

sample = false;
console.log(sample);
console.log(typeof sample); //boolean
console.log(+sample);
console.log(typeof +sample); //number

sample = 'dusdn';
console.log(typeof +sample); // NaN (Not a Number)

sample = '99';
console.log(-sample); // -99
console.log(typeof -sample); //number

/**
 * 할당 연산자 (Assignment Operator)
 */