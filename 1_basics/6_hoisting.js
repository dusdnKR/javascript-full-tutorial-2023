/**
 * Hoisting
 */
console.log('Hello');
console.log('World');
console.log('----------------');

// console.log(name);
// var name = 'dusdn';
// console.log(name);

/**
 * Hoisting이란?
 * 변수 선언이 코드 최상단으로 이동되는 것처럼 보이는 현상
 */

// var name;
// console.log(name);
// name = 'dusdn';
// console.log(name);

/**
 * 에러가 발생하지만 변수 선언으로 인한 에러가 아니라
 * 초기화하지 않아서 발생하는 에러
 * ReferenceError: Cannot access 'name' before initialization
 * 
 * 즉, let, const에도 Hoisting은 동일하게 적용됨
 */
// console.log(name);
// let name = 'dusdn';
// console.log(name);
// const name = 'dusdn';