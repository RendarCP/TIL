# JavaScript 입문

## 1-1 소개

- 모든 강의는 패스트캠퍼스 프론트엔드 강좌를 기반으로 작성
- 현재 강의는 [https://learnjs.vlpt.us/](https://learnjs.vlpt.us/) 참조가능

## 1-2 JavaScript

- 자바스크립트의경우 웹 브라우저 콘솔로 실행가능
- 웹 브라우저상에서 매번 하기엔 힘듬
- [https://codesandbox.io](https://codesandbox.io/)에서 create sandbox -> Vanilla 선택

## 1-3 변수

- 변수 선언시에는 let이라는 콘텍스트 사용

```jsx
let value = 1; //log(1)
vale = 2; //log(2)

```

- 한번 초기화된 변수명은 다시 초기화할수 없다

```jsx
let value = 1;
let value = 2;
// SyntaxError 

```

- 상수 선언시에는 const라는 콘텍스트 사용 (한번 초기화시 값 변경할수없다)

```jsx
const a = 1; 
a = 2; // -> "a" is read Only 
const a = 2; // 마찬가지로 a가 선언된 상태에서 다시 못함(변수랑 상수 동일)

```

- var라는 키워드도 존재하지만 권장하지는 않음 (몰라도됨)

```jsx
var a = 1;
var a = 2;
//이렇게 사용가능 

```

- 문자열 선언

```jsx
let text = 'hello'; // 작은따옴표
let name = "헬로우"; // 큰 따옴표
// 둘의 차이는 없음(취향차이) 

```

- boolean값

```jsx
let text = true; // 참
let name = false; // 거짓

```

- 값이 존재하지 않을경우

```jsx
let text = null; // 값이 아예 없음
let name = undefined; // 아직 값이 정해지지않음 

```

## 1-4 연산자

- 산술 연산자

```jsx
let a = 1 + 2;
console.log(a); //-> 3
a = 2 - 1; // -> 1
a = 1 * 4; // -> 4
a = 4 / 2; // -> 2

```

- 전위, 후위

```jsx
let a = 1;
console.log(++a); //-> 2
a = 1;
console.log(a++); //-> 1

```

- 다른언어와 마찬가지 표현도 가능

```jsx
let a = 1;
a += 3;
a -= 3;
a *= 3;
a /= 3;
console.log(a)

```

## 1-5 논리 연산자

- 다른 언어와 마찬가지로 논리연사자 표현

```jsx
// 표현 순서는 연산자 우선순위 
// NOT ! -> 원래값에 반대로 ture-> false, false -> true
// AND && -> 둘다 참일 경우 true
// OR || -> 하나라도 참일경우 true

```

## 1-6 비교 연산자

- === 과 ==

```jsx
const a = 1;
const b = 1;
const c = '1';
const equals = a === b ; // -> true
const equals2 = a == c; // -> true 
// === 타입까지 비교하는 연산 
// == 타입을 비교하지 않음 -> 실수 할수있으므로 ===로 되도록 사용

```

- !== 는 두 값이 다를때 사용
- 기존 비교 연사자는 다른 언어와 동일

```jsx
// a < b;
// a <= b;
// a > b;
// a >= b;

```

## 1-7 조건문

- 조건이 참일때 실행된다

```jsx
const a = 1;
if(a === 1){
  console.log("참입니다");
}

```

- 스코프가 다르면 선언가능

```jsx
const a = 1;// 밖 스코프의 a
if(a + 1 === 2){
  const a = 2; // if문 안의 a
  console.log('if문 안의 a 값은 ' + a); // 2
}
console.log('if문 밖의 a 값은 ' + a); // 1

```

- if, else

```jsx
const a = 10;
if( a > 15 ){
  console.log('a가 15보다 큽니다');
} else{
  console.log('a가 15보다 크지 않습니다');// 이코드가 실행
}

```

- if ,else if, else

```jsx
const a = 10;
if( a === 15 ){ // 첫번째 조건판별
  console.log('a가 15 입니다');
}
else if( a === 10 ){ // 두번째 조건 판별
  console.log('a가 10 입니다');
} 
else{ // 마지막 조건 판별 
  console.log('a가 15와 10도 아닙니다.');
}

```

## 1-8 switch

- switch case 문

```jsx
const device = 'iphone' 

switch(device) { // 
  case 'iphone' :
    console.log('아이폰');
    break; // break가 없을시 다음 케이스 문 자동 실행
  case 'ipad' :
    console.log('아이패드');
    break;
  case 'galaxy' :
    console.log('갤럭시');
    break;
  default: // 위 모든 케이스가 아닌경우 
    console.log('아무것도 아님');
}

```

## 1-9 함수

- 특정 기능을 수행하는 것
- input(파라미터)을 통하여 output(결과) 제공
- 함수는 function이라는 키워드 사용

```jsx
function add(a,b){ // 파라미터가 여러개일경우()로 구분 
  return a + b; // 결과값 반환은 return 
}
const sum = add(1,2);
console.log(sum); //=> 3결과값 

```

- 함수 사용

```jsx
function hello(name){
  console.log('hello '+ name+ '!');
}
hello('홍길동'); // 콘솔 결과창 hello 홍길동!

```

- 함수는 return 시 종료된다

```jsx
function hello(name){
 return 'hello '+ name+ '!' // 여기서 함수 종료

 console.log('test'); // 이코드부터 아래 코드는 동작 x 
 return;// 동작 x 
  
}
const test = hello('홍길동');
console.log(test); // 콘솔 결과창 hello 홍길동!

```

## 1-10 함수- Template Literal

- ES6 = ECMAScript6 = ES2015
- ` (백틱)문자를 사용하여 Template Literal 사용

```jsx
function hello(name){
  console.log(`hello ${name}`);
}
hello('홍길동'); // 콘솔 결과창 hello 홍길동!

```

## 1-11 화살표 함수(es6)

- 화살표 함수 사용법 (=>)

```jsx
const add = (a,b) => {
  return a + b;
}
const hello = (name) =>{
  console.log(`hello ${name}`);
}
const sum = add(1,2);
console.log(sum);
hello('홍길동');

```

- 화살표함수 사용법 (짧은 코드)

```jsx
const add = (a,b) => a + b;
const sum = add(1,2);
console.log(sum);

```

- function과의 차이점은 this차이

## 1-11 객체

- 하나의 이름에 여러개의 값들을 선언가능
- 키 : 벨류 형태로 되어있음 ( key : value )

```jsx
const dog = {
  name: '멍멍이', // 쉽표로 구분해줘야 된다 
  age: 2,
  cute: true,
  sample: {
    a: 1,
    b: ,
  }
}
console.log(dog); // 객체정보
console.log(dog.name); // 멍멍이
console.log(dog.age); // 2

```

- 키값에는 숫자가 들어가긴하지만 보통 문자열로 선언
- 문자열에는 공백이 있으면 안된다(선언하고 싶다면 따옴표(')로감싸줘야된다)

```jsx
const dog ={
  key with space : 'test' // 동작 x
  'key with space' : 'test' // 이렇게 써야된다
}

```

- 함수와 같이 사용

```jsx
const ironMan = {
  name: '토니 스타크',
  actor: '로버트 다우니 주니어',
  alias: '아이언맨'
}

const captinAmerica = {
  name: '스티븐 로저스',
  actor: '크리스 에반스',
  alias: '캡틴 아메리카'
}

function print(hero){ // hero파라미터를 받아서 
  const text = `${hero.alias}(${hero.name}) 역학을 맡은 배우는 ${hero.actor} 입니다`
  console.log(text); // 출력 
}
print(ironMan);
print(captinAmerica);

```

- 객체 비구조화 할당 (객체 구조 분해)

```jsx
const ironMan = {
  name: '토니 스타크',
  actor: '로버트 다우니 주니어',
  alias: '아이언맨'
}

const captinAmerica = {
  name: '스티븐 로저스',
  actor: '크리스 에반스',
  alias: '캡틴 아메리카'
}
// 첫번째 방법
function print(hero){ 
  const { alias, name, actor } = hero;
  const text = `${alias}(${name}) 역학을 맡은 배우는 ${actor} 입니다`
  console.log(text);
}
// or 두번째 방법 
function print({ alias, name, actor }){ 
  const text = `${alias}(${name}) 역학을 맡은 배우는 ${actor} 입니다`
  console.log(text);
}
print(ironMan);
print(captinAmerica);

```

- 객체 안에 함수선언

```jsx
const dog = {
  name: '멍멍이',
  sound: '멍멍!',
  say: function say(){
    console.log(this.sound); // 함수가 위치한 객체 자기 자신을 뜻함(this) === dog 
  }, // or
  say() {
    console.log(this.sound);
  }, // 아래 코드는 동작 x(화살표 함수)
  say: () => {
    console.log(this.sound); // -> this의 스코프가 달라짐 
  }
}

dog.say(); 

```

- getter / setter
- getter함수

```jsx
const numbers = {
  a: 1,
  b: 2,
  get sum() { //getter의 경우 get으로 선언 -> 어떤 값을 무조건 반환해야된다 
    console.log('sum 함수가 실행됩니다!');
    return this.a + this.b;
  }
}

console.log(numbers.sum); // 3출력

```

- setter함수

```jsx
const dog= {
  _name: '멍멍이',
  get name() {
  set name(value){ //setter함수의경우 파라미터를 받아야된다 
    console.log('이름이 바뀝니다 !' + value);
    this._name = value;
  }
};

console.log(dog._name);
dog.name = '뭉뭉이';
console.log(dog._name); // 이름이 뭉뭉이로 출력

```

- getter 와 setter 함수 활용

```jsx
const numbers = {
  _a: 1,
  _b: 2,
  sum: 3,
  calculate() {
    console.log('calculate');
    this.sum = this._a + this._b;
  },
  get a() {
    return this._a;
  },
  get b() {
    return this._b;
  },
  set a(value) {
    this._a = value;
    this.calculate();
  }
  set b(value){
    this._b = value;
    this.calculate();
  }
};

console.log(numbers.sum);
numbers.a = 5; 
numbers.b = 7;
numbers.a = 9;
console.log(numbers.sum); // 결과값 16 a: 9, b: 7

```

## 1-12 배열

- [] 대괄호로 선언한다

```jsx
const array = [1, 2, 3 ,4, 5];
console.log(array);

```

- 자바스크립트 배열은 어느것이든 들어간다 (똑같은 타입일 필요가 없다)

```jsx
const array = [1, 'array', {}]; // 숫자, 문자열, 객체 등등
console.log(array);

```

- 배열의 첫번째는 0이다

```jsx
const array = [1, 'array', {}];
console.log(array[0]); // 1 출력

```

- 배열에 새로운 항목을 삽입 push

```jsx
const objects = [
  { name: '멍멍이'},
  { name: '야옹이}
];

objects.push({
  name: '멍뭉이'
});
console.log(objects);

```

- 배열의 크기를 알려주는 length

```jsx
const objects = [
  { name: '멍멍이'},
  { name: '야옹이}
];

objects.push({
  name: '멍뭉이'
});
console.log(objects.length); // 3출력 

```

## 1-13 배열 내장함수

- forEach

```jsx
const superheroes = ['아이언맨','캡틴 아메리카', '토르','헐크' ];

function print(hero){
  console.log(hero);
}

superheroes.forEach(print);

// 더간단하게
superheroes.forEach(function(hero) {
  console.log(hero); // 배열 출력
})

// 화살표함수
superheroes.forEach((hero) => {
  console.log(hero); // 배열 출력
})

```

- map

```jsx
const array = [1,2,3,4,5,6,7,8];

// for문을 쓸시
const squared = [];
for(let i =0; i< array.length; i++){
  squared.push(array[i] * array[i]);
}
console.log(squared);

// forEach를 쓸시
array.forEach( n => {
  squared.push(n * n);
})

// map 을 쓸시 

const square = n => n * n ;
const squared = array.map(square); 
// or
const squared = array.map(n => n * n);

```

- map 활용

```jsx
const items = [
  {
    id: 1,
    text: 'hello'
  },
  {
    id: 2,
    text: 'bye'
  }
];

const texts = items.map(item => item.text);
console.log(texts);

```

- indexOf (배열의 몇번째인지) => 순수 배열일시

```jsx
const superheroes = ['아이언맨','캡틴 아메리카', '토르','헐크' ];

const index = superheroes.indexOf('아이언맨'); 
console.oog(index); // -> 1 

```

- findindex (객체이거나 특정조건을 확인할시)

```jsx
const todos =[
  {
    id: 1,
    text: '자바스크립트 입문',
    done: true,
  },
  {
    id: 2,
    text: '함수 배우기',
    done: true,
  },
  {
    id: 3,
    text: '객체와 배열 배우기',
    done: true,
  },
  {
    id: 4,
    text: '배열 내장함수 배우기',
    done: false,
  }
];

const index = todos.findIndex(todo => todo.id === 3)//함수처럼 반환 
const todo = todos.find(todo => todo.id === 3 ) // 객체 반환  => 첫번쨰 항목만 알려줌 
console.log(index); // 2 

```

- filter (특정조건을 만족하는 원소들을 찾아 새로운 배열 생성)

```jsx
const todos =[
  {
    id: 1,
    text: '자바스크립트 입문',
    done: true,
  },
  {
    id: 2,
    text: '함수 배우기',
    done: true,
  },
  {
    id: 3,
    text: '객체와 배열 배우기',
    done: true,
  },
  {
    id: 4,
    text: '배열 내장함수 배우기',
    done: false,
  }
];

const tasksNotDone = todos.filter(todo => todo.done === false);
console.log(taskNotDone); 

```

- splice (배열항목 제거) / slice (기존배열을 건드리지 않음)

```jsx
const numbers = [10, 20, 30, 40];
const index = numbers.indexOf(30);
const spliced = numbers.splice(index,1); // index부터 시작하여 1개를 지우겠다
console.log(spliced); //30
console.log(numbers); //[10,20,40];

/// ----------------------

// slice 
const numbers = [10, 20, 30, 40];
const sliced = numbers.slice(0,2);
console.log(sliced);
console.log(numbers);

```

- shift, pop, unshift, push

```jsx
//shift -> 기존 배열 수정 (배열의 앞원소를 제거한다)
const numbers = [10, 20, 30, 40];
const value = numbers.shift();
console.log(value);
console.log(numbers);//[20, 30, 40]

//pop (배열의 뒷원소를 제거한다);
const numbers = [10, 20, 30, 40];
const value = numbers.pop();
console.log(value);
console.log(numbers);//[10, 20, 30]

//unshift 
const numbers = [10, 20, 30, 40];
numbers,unshift(5); 
console.log(numbers);//[5,10, 20, 30, 40]

//push
const numbers = [10, 20, 30, 40];
numbers,push(50);
console.log(numbers); //[10, 20, 30, 40, 50]

```

- concat (두 배열을 합치기) -> 기존의 배열을 수정하지 않음

```jsx
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

const concated = arr1.concat(arr2);
console.log(concated);// [1, 2, 3, 4, 5, 6];

// es6 => spread 이용
const concated = [...arr1 , ...arr2];
console.log(concated);// [1, 2, 3, 4, 5, 6];

```

- join (하나의 문자열로)

```jsx
const array = [1, 2, 3, 4, 5];
console.log(array.join()); // 1,2,3,4,5
console.log(array.join(' '));// 1 2 3 4 5
console.log(array.join(', ')); // 1, 2, 3, 4, 5 

```

- reduce

```jsx
const numbers = [1, 2, 3, 4, 5];

//배열의 합
const sum = numbers.reduce((accumulatore, current) => accumulator + current, 0);
// accumulator : 누적값 ,current: 배열에서 가져온값 , 0: 초기값
console.log(sum); // 15

// 배열의 평균
const avg = numbers.reduce((accumulatore, current, index, array) => {
  if( index === array.length -1){
    return (accumulator + current) / array.length;
  }
  return accumulator + current;
} ,0);
// index => 배열의 index값 , array => 배열 자기 자신 
console.log(avg); // 3

```

- reduce 다른예 (활용예)

```jsx
const alphabets = ['a', 'a', 'a', 'b', 'c', 'c', 'd', 'e'];
const counts = alphabets.reudce((acc, current) => {
  if(acc[current]){
    acc[current] += 1;
  } else{
    acc[current] = 1;
  }
  return acc;
}, {})

console.log(counts); // a: 3, b: 1, c: 2, d: 1, e: 1

```
