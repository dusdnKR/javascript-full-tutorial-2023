/**
 * Data Types
 * 
 * 여섯 개의 Primitive Type과
 * 한 개의 오브젝트 타입
 * 
 * 1) Number
 * 2) String
 * 3) Boolean
 * 4) undefined
 * 5) null
 * 6) Symbol
 * 
 * 7) Object
 *    Function
 *    Array
 *    Object
 */

/**
 * Number Type
 */
const age = 32;
const temperature = -10;
const pi = 3.14;

console.log(typeof age);
console.log(typeof temperature);
console.log(typeof pi);
console.log('----------------');

const infinity = Infinity;
const nInfinity = -Infinity;

console.log(typeof infinity);
console.log(typeof nInfinity);
console.log('----------------');

/**
 * String Type
 */
const name = 'du"s"dn';
console.log(name);
console.log(typeof name);

const ive = "'아이브' 장원영";
console.log(ive);
console.log('----------------');

/**
 * Template Literal
 * 
 * Escaping Character
 * 1) newline -> \n
 * 2) tab -> \t
 * 3) \ -> \\
 */
const iveYuJin = '아이브\n안유진';
console.log(iveYuJin);
const iveWonYoung = '아이브\t장원영';
console.log(iveWonYoung);
const backSlash = '아이브\\아이브';
console.log(backSlash);
const smallQutoation = '아이브\'아이브';
console.log(smallQutoation);

const iveWonYoung2 = `아이브 '"/////\\\\
장원영`;
console.log(iveWonYoung2);

console.log(typeof iveWonYoung2);

const groupName = '아이브';
console.log(groupName + ' 장원영');
console.log(`${groupName} 장원영`);
console.log('----------------');

/**
 * Boolean Type
 */
const isTrue = true;
const isFalse = false;
console.log(typeof isTrue);
console.log(typeof isFalse);
console.log('----------------');

/** 
 * undefined
 * 
 * 사용자가 값을 초기화하지
 * 않은 경우 지정됨
 * 
 * 직접 선언은 지양할 것
 */
let noInit; // = undefined;
console.log(noInit);
console.log(typeof noInit);
console.log('----------------');

/**
 * null Type
 * 
 * 명시적으로 없는 값으로
 * 초기화할 때 사용
 */
let init = null;
console.log(init);
console.log(typeof init);
console.log('----------------');

/**
 * Symbol Type
 * 
 * 유일무이한 값을 생성할 때 사용
 * Symbol 함수를 호출해서 사용
 */
const test1 = '1';
const test2 = '1';

console.log(test1 === test2);

const symbol1 = Symbol('1');
const symbol2 = Symbol('1');

console.log(symbol1 === symbol2); // false
console.log('----------------');

/**
 * Object Type
 * 
 * Map(=dict)
 * key:value
 */
const dictionary = {
    red: '빨간색',
    orange: '주황색',
    yellow: '노란색',
};

console.log(dictionary);
console.log(dictionary['red']);
console.log(dictionary['orange']);
console.log(dictionary['yellow']);

console.log(typeof dictionary);
console.log('----------------');

/**
 * Array Type
 * 
 * 값을 리스트로 나열할 수 있음
 */
const sanrioMembersArray = [
    'Kuromi',
    'MyMelody',
    'HelloKitty',
];
console.log(sanrioMembersArray);
console.log('----------------');

/**
 * index
 */
console.log(sanrioMembersArray[0]);
console.log(sanrioMembersArray[2]);

sanrioMembersArray[2] = 'Pochacco';
console.log(sanrioMembersArray);
console.log(typeof sanrioMembersArray);
console.log('----------------');

/**
 * static typing -> 변수 선언 시 데이터 타입 명시
 * 
 * dynamic typing -> 변수의 데이터 타입 자동 추론
 */