# React 입문

## 1 소개

1. 모든 내용은 패스트캠퍼스(이하 패캠)강의 기준으로 작성한다
2. 현재 강의의 내용은 [https://react.vlpt.us/](https://react.vlpt.us/) 참조 가능
3. 함수형 컴포넌트를 기준으로 작성한다.
4. 정리 환경을 위하여 [https://codesandbox.io/s/blazing-firefly-pe0th?file=/src/App.js](https://codesandbox.io/s/blazing-firefly-pe0th?file=/src/App.js) 참조 가능

## 2 React란? (작업환경 구성)

1. javascript를 사용한 DOM변형
    - DOM을 관리하기가 어려워지고 이벤트가 많아짐
    - 각 DOM에 속성에 소속된 이벤트가 꼬이기 시작...
    - 유지보수가 어려워짐
2. React
    - Virtual DOM을 사용하여 성능을 지키면서 사용
    - 기존에는 어떻게 업데이트 할지가 아닌 어떻게 보여줄지에 집중!!
    - UI는 컴포넌트 기반으로 선언(UI 조각)
3. 작업환경
    - Node.js (자바스크립트 런타임)
    - yarn (자바스크립트 패키지 매니징) -> npm보다 빠름
    - VS Code
    - 혹은 codesandbox를 이용

## 3. first React Component

1. Hello.js(컴포넌트)

```jsx
import React from 'react';

function Hello() {
  return <div>안녕하세요</div>
}

export default Hello;

```

1. App.js(실행파일)

```jsx
import React from "react";
import Hello from './Hello.js';

function App() {
  return (
    <div>
      <Hello /> {/* 컴포넌트 */}
    </div>
  );
}

export default App;

```

![https://user-images.githubusercontent.com/32770277/92359268-eff33980-f125-11ea-8464-b2aa10194637.png](https://user-images.githubusercontent.com/32770277/92359268-eff33980-f125-11ea-8464-b2aa10194637.png)

## 4. JSX 규칙

1. Babel을 통하여 html -> javascript로 변환
- [https://babeljs.io/](https://babeljs.io/) 에서 확인가능
1. 태그를 열었다면 무조건 닫아줘야 된다

```html
<div>
  안녕하세요 
</div>
<div> 
<!-- 윗부분 오류 닫는태그가 없음 -->

```

- input, br 태그의경우 self closing tag 이용
1. 두개이상의 태그의 경우 하나의 태그로 감싸주어야 된다

```html
<!-- 오류 발생 -->
<div>안녕하세요</div>
<Hello />

```

```html
<!-- 오류 발생 -->
<div>
  <div>안녕하세요</div>
  <Hello />
</div>

```

- 혹은 fragment를 사용 <></>

```html
<>
  <div>안녕하세요</div>
  <Hello />
</>

```

1. javascript 값을 사용하고 싶을때는 {} 중괄호 사용

```jsx
import React from 'react';
import Hello from './Hello';

function App() {
  const name = 'react';
  return (
    <>
      <Hello />
      <div>{name}</div>
    </>
  );
}

export default App;

```

1. style작성시 기존과 다르게 객체로 전달

```jsx
import React from 'react';
import Hello from './Hello';

function App() {
  const name = 'react';
  const style = {
    backgroundColor: 'black', // background-color 등 - 구분은 카멜케이스 사용
    color: 'aqua',
    fontSize: 24, 
    padding: '1rem' 
  }

  return (
    <>
      <Hello />
      <div style={style}>{name}</div>
      <div style={{ backgroundColor: 'black', color: 'aqua', fontSize: 24, padding: '1rem'}}>{name}</div> 
    </>
  );
}

export default App;

```

- CSS class의경우 class= 가 아닌 className= 으로 설정

```html
<div className="test"></div>

```

1. JSX 내부 주석의 경우 {/* 주석내용 */} 형식으로 작성

```jsx
import React from 'react';
import Hello from './Hello';

function App() {
  return (
    <>
      {/* 주석은 화면에 보이지 않습니다 */}
      /* 중괄호로 감싸지 않으면 화면에 보입니다 */
      <Hello 
      />
    </>
  );
}

export default App;

```

## 5. props

1. props는 properties의 줄임말
- 컴포넌트에 어떠한 값을 전달할 경우 사용
1. props 사용법
- 기본 사용법
App.js

```jsx
import React from "react";
import Hello from "./Hello.js";

function App() {
  return (
    <div>
      <Hello name="react" />
      {/* name이라는 props를 Hello 컴포넌트에 전달 */}
    </div>
  );
}

export default App;

```

Hello.js

```jsx
import React from "react";

// -> props는 객체형태로 전달 
function Hello(props) {
  return <div>안녕하세요 {props.name}</div>;
}

export default Hello;

```

- 비구조화 할당

App.js

```jsx
import React from "react";
import Hello from "./Hello.js";

function App() {
  return (
    <div>
      <Hello name="react" color="red" />
    </div>
  );
}

export default App;

```

Hello.js(컴포넌트)

```jsx
import React from "react";

//-> 함수의 파라미터로 비구조화 할당을 통하여 코드를 간결하게 작성
function Hello({color, name}) { 
  return <div style={{ color }}>안녕하세요 {name}</div>;
}

export default Hello;

```

1. defaultProps 설정 (기본값)
- props를 지정하지 않았을시 기본적으로 사용할 값을 설정

Hello.js

```jsx
import React from "react";

function Hello({color, name}) { 
  return <div style={{ color }}>안녕하세요 {name}</div>;
}

Hello.defaultProps = {
  name: '이름없음'
}

export default Hello;

```

App.js

```jsx
import React from "react";
import Hello from "./Hello.js";

function App() {
  return (
    <div>
      <Hello name="react" color="red" />
      <Hello color="blue" />
    </div>
  );
}

export default App;

```

![https://user-images.githubusercontent.com/32770277/92498277-5f0b8380-f235-11ea-9a8e-279669facd88.png](https://user-images.githubusercontent.com/32770277/92498277-5f0b8380-f235-11ea-9a8e-279669facd88.png)

1. props.children
- 컴포넌트 태그 사이에 넣은 값을 조회 할시 사용

Wrapper.js

```jsx
import React from 'react';

function Wrapper({ children}) {
  const style ={ 
    border: '2px solid black',
    padding: '16px',
  };
  return (
    <div style={style}>
      {children}
    </div>
  )
}

export default Wrapper;

```

App.js

```jsx
import React from "react";
import Hello from "./Hello.js";
import Wrapper from "./Wrapper.js";

function App() {
  return (
    <Wrapper>
      <Hello name="react" color="red" />
      <Hello color="blue" />
    </Wrapper>
  );
}

export default App;

```

## 6. 조건부 렌더링

1. 삼항 연산자를 이용하여 렌더링
App.js

```jsx
import React from "react";
import Hello from "./Hello.js";
import Wrapper from "./Wrapper.js";

function App() {
  return (
    <Wrapper>
      <Hello name="react" color="red" isSpecial={true} />
      <Hello color="blue" />
    </Wrapper>
  );
}

export default App;

```

Hello.js

```jsx
import React from "react";

function Hello({ color, name, isSpecial }) {
  return (
    <div style={{ color }}>
      {isSpecial ? <b>*</b> : null} {/* 삼항 연산자 사용 */}
      안녕하세요 {name}
    </div>
  );
}

Hello.defaultProps = {
  name: "이름없음"
};

export default Hello;

```

1. 결과값이 true일시 생략가능

App.js

```jsx
import React from "react";
import Hello from "./Hello.js";
import Wrapper from "./Wrapper.js";

function App() {
  return (
    <Wrapper>
      <Hello name="react" color="red" isSpecial />
      <Hello color="blue" />
    </Wrapper>
  );
}

export default App;

```

## 7. useState로 컴포넌트 상태 관리

1. useState 사용

Counter.js

```jsx
import React, { useState } from 'react';  // useState함수 가져오기 

function Counter() {
  const [number, setNumber] = useState(0);
  // 첫번쨰 원소 현재상태, Setter함수 마지막 useState(기본값)
  
  // const numberState = useState(0);
  // const number = numberState[0];
  // const setNumber = numberState[1];
  // 위와 같이 해야되지만 배열 비구조화 할당을 통하여 원소 추출
  
  const onIncrease = () => {
    setNumber(number + 1);
    //setNumber를 통하여 업데이트 
  }

  const onDecrease = () => {
    setNumber(number - 1);
    //setNumber를 통하여 업데이트 
  }

  return (
    <div>
      <h1>{number}</h1>
      <button onClick={onIncrease}>+1</button>
      <button onClick={onDecrease}>-1</button>
    </div>
  );
}

export default Counter;

```

1. 함수형 업데이트(업데이트 함수)

Counter.js

```jsx

function Counter() {
  const [number, setNumber] = useState(0);
  
  const onIncrease = () => {
    setNumber(prevNumber => prevNumber + 1);
  }

  const onDecrease = () => {
    setNumber(prevNumber => prevNumber - 1);
  }

  return (
    <div>
      <h1>{number}</h1>
      <button onClick={onIncrease}>+1</button>
      <button onClick={onDecrease}>-1</button>
    </div>
  );
}

export default Counter;

```

## 8. input 상태 관리

1. 단일 input 관리

InputSample.js

```jsx
import React, { useState } from "react";

function InputSample() {
  const [text, setText] = useState("");
  // input 상태 관리

  const onChange = (e) => {
    setText(e.target.value);
    // text의 상태 변화 
  };

  const onReset = () => {
    setText("");
    // text 초기화
  };
  return (
    <div>
      <input onChange={onChange} value={text} />
      <button onClick={onReset}>초기화</button>
      <div>
        <b>값 : {text}</b>
      </div>
    </div>
  );
}

export default InputSample;

```

1. 다중 input상태 관리

InputSample.js

```jsx
import React, { useState } from "react";

function InputSample() {
  const [texts, setTexts] = useState({
    name: "",
    nickname: ""
    // 객체 상태로 state관리
  });

  const { name, nickname } = texts;

  const onChange = (e) => {
    const { value, name } = e.target;
    setTexts({
      ...texts, // react의경우 불변성을 지켜야 상태변경가능(존 객체를 가져오기 spread 문법)
      [name]: value
    });
  };

  const onReset = () => {
    setTexts({
      name: "",
      nickname: ""
    });
  };
  return (
    <div>
      <input 
        placeholder="이름" 
        name="name" 
        onChange={onChange} 
        value={name} 
      />
      <input
        placeholder="닉네임"
        name="nickname"
        onChange={onChange}
        value={nickname}
      />
      <button onClick={onReset}>초기화</button>
      <div>
        <b>값 :</b>
        {name} ({nickname})
      </div>
    </div>
  );
}

export default InputSample;

```

## 9. useRef로 DOM 직접 관리

InputSample.js

```jsx
import React, { useState, useRef } from "react";

function InputSample() {
  const [texts, setTexts] = useState({
    name: "",
    nickname: ""
  });

  const nameInput = useRef(); // useRef객체 생성
  const { name, nickname } = texts;

  const onChange = (e) => {
    const { name, value } = e.target;
    setTexts({
      ...texts,
      [name]: value
    });
  };

  const onReset = () => {
    setTexts({
      name: "",
      nickname: ""
    });
    nameInput.current.focus();// 초기화 버튼 클릭시 nameInput에 포커스
  };
  return (
    <div>
      <input
        placeholder="이름"
        name="name"
        onChange={onChange}
        value={name}
        ref={nameInput} // ref 객체 가져오기 
      />
      <input
        placeholder="닉네임"
        name="nickname"
        onChange={onChange}
        value={nickname}
      />
      <button onClick={onReset}>초기화</button>
      <div>
        <b>값 :</b>
        {name} ({nickname})
      </div>
    </div>
  );
}

export default InputSample;
