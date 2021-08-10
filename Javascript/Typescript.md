## 1. 소개

1. 모든 내용은 패스트캠퍼스(이하 패캠)강의 기준으로 작성한다
2. 타입스크립트의 주요내용(주요 문법)에 대해서만 다룬다

## 2. TypeScrip란?

1. 타입을 가지는 자바스크립트의 슈퍼셋
2. 오픈소스 프로그래밍 언어
3. 자바스크립트의 상위 집합으로 ECMA스크립트의 최신 표준지원(1번내용과 동일)
4. 정적인 언어로 컴파일 시간에 타입을 검사
5. 장점
   1. 강력한 타입으로 대규모 어플리케이션 개발에 용이
   2. 유명한 자바스크립트 라이브러리와 편리한 사용
   3. 개발 도구에서의 강력한 지원

## 3. TypeScript 설치 및 설정

1. Node.js가 설치되 있어야 한다 [이 곳](https://nodejs.org/en/)에서 설치 (LTS버전)
   - 터미널에서 node -v or npm -v
2. Typescript 설치
   1. 윈도우
      - npm install -g typescript (전역설치 현재 컴퓨터)
      - npm install typescript ( 현재 폴더에 설치)
   2. mac
      - sudo npm install -g typescript (전역설치 현재 컴퓨터)
      - sudo npm install typescript ( 현재 폴더에 설치)
      - 현재 필자는 위에 둘다 되지 않아 brew install typescript로 설치
      - 설치 확인은 터미널에서 tsc -v
3. .TS → .JS로 변환하기
   - TS는 강력하지만 브라우저가 직접 읽지 못하기에 변환과정([폴리필](https://ko.javascript.info/polyfills))
   - 보통은 바벨을 통한 트랜스 과정을 거치지만 현재는 프로젝트가 아니므로 타입스크립트 컴파일러로 변환가능

## 4. TypeScript 컴파일러 및 설정

1. **tsc**라는 명령어를 통해서 컴파일 과정을 거친다.
   - tsc [options] [file...] → options의 경우 파일을 줄경우 안줘도 무관
2. TypeScript는 기본적으로 es5로 컴파일과정을 거친다

   - hello.ts

     ```jsx
     var hello = "hello";
     let hello2 = "hello2";
     ```

   - hello.js

     ```jsx
     //컴파일과정을 거친 파일
     var hello = "hello";
     var hello2 = "hello2";
     ```

3. 최신 자바스크립트 문법으로 컴파일할시에는 —target 버전 으로 주면된다
   - tsc hello.ts —target es6
4. Promise의 경우 따로 library 옵션을 주고 사용해야된다
   - tsc hello.ts —lib es5,es2015.promise,es2015.iterable,dom 등을 추가하여 오류 제거
5. es5는 Common.js 모듈시스템을 따르고 있다
   - node의 경우 common.js 모듈시스템만 인식한다
   - 따라서 es6로 변환될시에는 → —module commonjs 로 해놔야된다
     - ex) tsc hello.ts —target es6 —lib es2015,dom —module commonjs
6. TypeScript config 파일 설정

   - 프로젝트 최상단에 tsconfig.json파일을 제작

     ```json
     {
       "include": [
         "src/**/*.ts" //-> 하위 소스폴더 밑의 모든 타입스크립트 파일
       ],
       "exclude": [
         // -> 타입스크립트 컴파일 제외대상
         "node_modules"
       ],
       "compilerOptions": {
         "module": "commonjs", // 모듈 옵션
         "rootDir": "src", // 모듈의 루트 디렉토리
         "outDir": "dist", // 타입스크립트 컴파일된 파일들 (최상위폴더)
         "target": "es5", // 변환될 대상
         "sourceMap": true, // 브라우저에서 바로 ts파일로 볼수 있게 만든다
         "removeComments": true, // 주석등을 제거
         "noImplicitAny": true // 타입의 any형태를 방지함
       }
     }
     ```

## 5. TypeScript 기본타입 선언

- TypeScript는 Javascript와 동일하게 타입적용

1. ES6 기준 7개 타입(6개 원시형 타입, 1개의 참조형 타입)

   ```jsx
   let numValue: number;
   let stringValue: String;
   let booleanValue: boolean;
   let undefinedValue: undefined; // 상위타입
   let nullValue: null; // 상위타입
   //--- 원시형 타입(기본타입)
   let objValue: object;
   // -- 참조형 타입
   let symbolValue: symbol;
   // ES6에서 추가된 원시 타입
   let anyValue: any; // 최상위 타입

   numValue = 3.3; // 10진수, 16진수, 8진수 등 표현가능
   stringValue = "hello";
   stringValue = `
   hello
   ${} // 스트링 인터폴레이션
   hi
   `

   booleanValue = true;
   undefinedValue = null;
   numValue = null; // 상위타입이기떄문에
   numValue = undefined; //상위타입때문에
   anyValue = 1;
   anyValue = "3";
   anyValue = null;
   anyValue = {};

   objValue = { name: 'jay' };
   objValue = { };
   objValue = new String(33);

   symbolValue = Symbol();

   // ---- 배열
   let nameList: string[];
   nameList = ["1", "3"];
   nameList.push(333); //error

   let user1: {name: string, score:number};
   user1 = {
   	name: 'jay',
   	scroe: 30
   }

   let tuple2: [number, string];
   let tuple3: [number, number, number];
   tuple2 = [1, "hello"]
   tuple3 = [1,2,3]
   ```

## 6. Interface

1. 인터페이스는 행위에 대한 것만 구현 해놓는다 (실제 구현은 인터페이스를 받는 쪽에서 정의)

```jsx
interface TV {
  turnOn(): boolean;
  turnOff(): void; // return 값이 없음
}

const myTV: TV = {
  turnOn() {
    return true;
  },
  turnOff() {},
};

function tryTurnOn(tv: TV) {
  tv.turnOn();
}
tryTurnOn(myTV);

// interface는 행위가 없고, 속성 -> 데이터를 담고있다
// 밑은 보드게임 예시
interface Cell {
  row: number;
  col: number;
  piece?: Piece; // ?는 옵셔널한 속성이다 정의
}

interface Piece {
  move(from: Cell, to: Cell): boolean;
}

function createBoard() {
  const cells: Cell[] = [];
  for (let row = 0; row < 4; row++) {
    for (let col = 0; col < 3; col++) {
      cells.push({ row, col });
    }
  }
  return cells;
}

const board = createBoard(); // 보드 생성
board[0].piece = {
  move(from: Cell, to: Cell) {
    return true;
  },
};
```

## 7. 함수

```jsx
function add(x: number, y: number): number{
  return x + y;
}

const result = add(1,2);

// 옵셔널 하게 처리할시
// function buildUserInfo(name? : string, email?: string){
//   return { name, email };
// }
// 기본값 처리시
function buildUserInfo(name= "-", email = "-"){
  return { name, email };
}
const user = buildUserInfo();

// es6 문법도 가능
const add2 = (a: number, b: number): number => a + b;

// 함수의 오버로드
interface Storage {
  a: string
}
interface ColdStorage {
  b: string
}
// 오버로드 시그니쳐
function store(type: "통조림"): Storage
function store(type: "아이스크림"): ColdStorage

function store(type: "통조림" | "아이스크림"){
  if(type === "통조림"){
    return { a: "통조림"}
  } else if (type === "아이스크림") {
    return { b: "아이스크림"}
  } else{
    throw new Error("unsuppoted type");
  }
}

const s = store('통조림');
```

## 8. enum 열거형

```jsx
// 열거형 -> 상수들의 집합 (회원등급, 플레이어 종류 등)
// 순서대로 숫자가 매겨진다
enum StarbuksGrade {
  WELCOME,
  DDD,
  GREEN,
  GOLD,
}
// 혹시 순서대로가 아닌 숫자를 매칭할떄는 아래처럼
enum StarbuksGrade {
  WELCOME = 0,
  WELCOME = "WELCOME" //숫자뿐만아니라 글자도 가능
  DDD = 3,
  GREEN = 1,
  GOLD = 2,
}

function getDiscount(v: StarbuksGrade) : number {
  switch(v){
    case StarbuksGrade.WELCOME:
      return 0;
    case StarbuksGrade.GREEN:
      return 5;
    case StarbuksGrade.GOLD:
      return 10;
  }
}

console.log(getDiscount(StarbuksGrade.GREEN)) // 5
console.log(StarbuksGrade.GREEN) // 1
console.log(StarbuksGrade);
// {
//   '0': 'WELCOME',
//   '1': 'GREEN',
//   '2': 'GOLD',
//   WELCOME: 0,
//   GREEN: 1,
//   GOLD: 2
// }

console.log(StarbuksGrade[0]); // WELCOME
```

## 9. Class

- es6 이후에 등장한 타입을 생성가능함 (객체생성)

```jsx
interface User {
	name: string;
}
interface Product {
	id: string;
	price: number;
}
// 접근제한자
// private, public, protected
// private -> 클래스 내부에서만 가능 (상속x)
// protected -> 클래스 내부에서만 (상속 가능)
// public -> 모두 가능
class Cart {
	//user: User;
	store: object;
	//private store: object; -> 클래스 내부에서만
	constructor(protected user: User){ // 매개변수에 바로 선언가능
		this.user = user;
		this.store = {};
	}
	put(id: string, product: Product) {
		this.store[id] = product;
	}
	get(id: string){
		return this.store[id];
	}
}

class PromotionCart extends Cart {
	addPromotion() {
		this.user
	}
}

const cart2 = new PromotionCart({ name: 'john' });
cart2.put();
const cartJohn = new Cart({ name: 'john' })
const cartJay = new Cart({ name: 'jay' })
```
