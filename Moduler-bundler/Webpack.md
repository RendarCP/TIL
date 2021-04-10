# Module의 정의

- 프로그램을 구성하는 내부의 코드가 기능별로 나뉘어져 있는 형태

    ![모듈정의](https://user-images.githubusercontent.com/32770277/114118216-63ab2e00-9923-11eb-8cb1-233f7dbe8cee.png)

- Module(이후에는 이하 모듈로 통일)의 표준
    1. Module을 인식하는 Module System과 
    2. Module을 다루는 키워드가 제공되어야 한다
- Module 시스템
    - 종류가 여러가지
    - CommonJS(Node.js)
    - ESM(ECMAScript 2015 ~)
- Module을 다루는 키워드
    1. 내보내기
        - 한곳으로 내보내기
        - 개별적으로 내보내기
        - 예시(CommonJS)
            - module.exports
            - module.exports = {...} (한객체형식)
            - module.exports = 값
            - module.exports.키_이름 = 값
            - exports.키_이름 = 값 (module.exports의 축약형)
        - 예시(ESM)
            - export
            - export default
    2. 가져오기
        - 모듈 객체를 참조하는 형태
        - 예시(CommonJS)
            - require(모듈의 경로)
        - 예시(ESM)
            - import 모듈_이름 from 모듈 위치
- Module의 종류
    1. Built-in Core Module ( 예: Node.js module)
    2. Community-based module ( 예: NPM)
        - npm CLI를 사용해야한다. ( 예: npm install ModuleName)
    3. Local Module( 특정 프로젝트에 정의된 모듈)

# 모듈의 예시(CommonJS)

- 모듈 하기전
    1. index.js

        ```jsx
        /**
        * 1. 원의 넓이를 구하느 공식
        * 2. PI 정의
        * 3. 공식을 통해 결과 얻기
        **/

        const PI = 3.14;
        const getCircleArea = r => r * r * PI;

        const result = getCircleArea(2);
        console.log(result);
        ```

- 모듈 하기후
    1. index.js

        ```jsx
        /**
        * 1. 원의 넓이를 구하느 공식
        * 2. PI 정의
        * 3. 공식을 통해 결과 얻기
        **/

        //const mathUtil = require('./mathUtil'); -> 다들고올 필요가 없음 
        const { getCircleArea } = require('./mathUtil');

        const result = getCircleArea(2);
        console.log(result);
        ```

    2. mathUtil.js

        ```jsx
        const PI = 3.14;
        const getCircleArea = r => r * r * PI;

        //module.exports ={
        //	PI,
        //	getCircleArea
        //}

        exports.PI = PI;
        exports.getCircleArea = getCircleArea;

        // 위 방식중 한가지 방식으로 하는게 좋다
        // 모듈이 꼬일수도 있기 때문에 (유실될수 있다.)
        ```

    # 모듈의 예시(ESM)

    1. npm install esm → esm모듈설치
    2. node -r esm index.js
        - -r : commonJS뿐만 아니라 다른 표준도 사용할수있게 설정
    3. 모듈 예시
        1. index.js

            ```jsx
            /**
            * 1. 원의 넓이를 구하느 공식
            * 2. PI 정의
            * 3. 공식을 통해 결과 얻기
            **/

            //const mathUtil = require('./mathUtil'); -> 다들고올 필요가 없음 
            //const { getCircleArea } = require('./mathUtil');
            //import { getCircleArea } from './mathUtil';
            import mathUtil from './mathUtil'; // -> export default일시

            //const result = getCircleArea(2);
            const result = mathUtil.getCircleArea(2);
            console.log(result);
            ```

        2. mathUtil.js

            ```jsx
            const PI = 3.14;
            const getCircleArea = r => r * r * PI;

            //module.exports ={
            //	PI,
            //	getCircleArea
            //}

            //exports.PI = PI;
            //exports.getCircleArea = getCircleArea;

            //export {
            //	PI,
            //	getCirclArea
            //}

            export default {
            	PI,
            	getCirclArea
            }
            ```
## 모듈의 종류

1. Built-in Core Module (예 : Node.js module) → 실행환경에서 바로 실행가능한 모듈
2. Community-based Module (예: NPM) 
    - npm CLI를 사용해야 한다. (예: npm install ModuleName)
3. Local Module (특정 프로젝트에 정의된 모듈)

## 모듈적용의 예제

1. 기존 코드 
    - index.js

    ```jsx
    const readline = require("readline");
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    })

    rl.question(
      "넓이를 구하고자 하는 도형의 종류를 입력해주세요. ( 정사각형, 원 ) : ",
      figure => {
        console.log(`선택된 도형: ${figure}`);

        switch(figure) {
          case "정사각형" :
            rl.question("변의 길이를 입력해주세요 : ", input => {
              console.log(`입력 받은 값 : ${input}`);
              console.log(`정사각형의 넓이는 : ${input * input} 입니다`);
              rl.close();
            });
            break;
          case "원" :
            rl.question("반지름의 길이를 입력해주세요 : ", input => {
              console.log(`입력받은 값 : ${input}`);
              console.log(`원의 넓이는 : ${input * input * 3.14} 입니다`);
            });
            break;
          default:
            console.log(
              "지원되지 않은 도형힙니다. '정사각형' 또는 '원' 을 입력해주세요 \n 커맨드 라인을 종료합니다"
            )
            rl.close()
        }
      }
    )
    ```

2. 모듈 적용 코드
    - index.js

    ```jsx
    const readline = require("readline");
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    })

    const { getCircleArea, getSquareArea } = require('./mathUtil');
    const { logFigureError, logInput, logResult } = require('./log');

    rl.question(
      "넓이를 구하고자 하는 도형의 종류를 입력해주세요. ( 정사각형, 원 ) : ",
      figure => {
        console.log(`선택된 도형: ${figure}`);

        switch(figure) {
          case "정사각형" :
            rl.question("변의 길이를 입력해주세요 : ", input => {
              console.log(logInput(input));
              console.log(logResult(figure, getSquareArea(input)} 입니다);
              rl.close();
            });
            break;
          case "원" :
            rl.question("반지름의 길이를 입력해주세요 : ", input => {
              console.log(logInput(input));
              console.log(logResult(figure, getCircleArea(input)} 입니다`);
            });
            break;
          default:
            console.log(logFigureError)
            rl.close()
        }
      }
    )
    ```

    - mathUtil.js

    ```jsx
    const PI = 3.14;
    const getCircleArea = r => r * r * PI;
    const getSquareArea = d => d * d;

    export default {
    	PI,
    	getCirclArea
    	getSquareArea
    }
    ```

    - log.js

    ```jsx
    const logInput = input => `입력받은 값 : ${input}`;
    const logResult = (figure,input) => `${figure}의 넓이는 : ${result} 입니다`;
    const logFigureError = "지원되지 않은 도형힙니다. '정사각형' 또는 '원' 을 입력해주세요 \n 커맨드 라인을 종료합니다"

    module.exports = {
    	logInput,
    	logResult,
    	logFigureError
    }
    ```

## 모듈을 사용한다면

1. 코드의 재사용성이 증가한다.
2. 코드의 관리가 편해진다.
3. 코드를 모듈화하는 기준이 명확해야한다.

## Bundle이란?

![webpack번들러](https://user-images.githubusercontent.com/32770277/114118227-673eb500-9923-11eb-89ba-8e76267ab8e0.png)

- 다양한 파일과 확장자를 번들이 진행되어 하나의 파일로 형성

### 번들(bundle)이 중요한 이유?

1. 모든 모듈을 로드하기 위해 검색하는 시간이 단축된다.

    ![모듈 시간단축](https://user-images.githubusercontent.com/32770277/114118224-66a61e80-9923-11eb-8346-6d8b2def4b64.png)

    - 한파일 안에서 모든 모듈이 적용되므로 단축
2.  사용하지 않는 코드를 제거해준다.

    ![코드 제거](https://user-images.githubusercontent.com/32770277/114118220-64dc5b00-9923-11eb-8219-42f976c24f71.png)

    - 번들링과정을 거친후에는 사용하지 않은 코드는 제거된다
3. 파일의 크기를 줄여준다.
    - 사용하지 않는 코드를 제거하는 것도 크기를 줄여줌
    - 하지만 여러개를 압축하는것보다 하나의 파일(번들링)에서 압축하는것이 더 크기가 적다.