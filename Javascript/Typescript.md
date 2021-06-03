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
