---
title: 'ES6위주의 react 코드 관습 정리'
date: 2022-11-23 21:00:00 +0900
tags: ['REACT', 'JAVASCRIPT']
draft: false
summary: '리액트 개발에 있어 추천하는 ES6 문법의 관습 사항들에 대하여 정리한 포스트'
cover: "react_cover.png"
---

리액트를 통하여 웹앱을 개발할 때, 다음 코딩 관습들을 참고해보자. 강제되는 사항은 아니지만, 해외 자바스크립트 개발자들의 코딩 관습들을 모아서 정리했으니, 도움이 되길 바란다.

## VSCode를 사용하자

우선, 리액트 개발의 추천 IDE는 Visual Code를 많이들 추천한다. 자체적으로도 다양한 기능을 지원할 뿐 아니라, 다양한 extension들을 통하여 더 나은 개발 환경 구축이 가능하기 때문이다. 추천 extension은 다음과 같다.

- ES Lint - By Microsoft
- Prettier - By Prettier
- Auto import - By steoates
- Reactjs code snippets - By charalampos karypidis
- JavaScript (ES6) code snippets - By charalampos karypidis

## ES6 문법을 사용하자

모든 프로그래머는 언제나 항상 자신의 코드가 클린 코드(Clean Code)이길 바란다. 클린 코드를 향한 열망으로 탄생한 javascript ES6 syntax는 개인 개발 환경에서든 협업 개발 환경에서든 유용하게 사용할 수 있다. 아래의 ES6 문법을 참고해서 더욱 깔끔한 코드를 설계해 보자.

### 화살표 함수 (=>) 사용하기
```javascript
// ES6 이전
function getAdd(a, b) {
  return a + b;
}

// ES6
const getAdd = (a, b) => a + b;
```

### 템플릿 리터럴 사용하기

```javascript
// ES6 이전
var name = "마르헤드";
console.log("My name is " + name);

// ES6
const name = "마르헤드";
console.log(`My name is ${name}`);
```

### ``const`` & ``let`` 사용하기

``const``와 ``let``은 블록 범위를 가지고 있습니다. 즉, 유효한 범위가 명확히 제한된다는 변수 선언문이라는 거죠. 변수의 변동 가능성에 따라 ``const``와 ``let``을 사용하면 됩니다.

```javascript
// ES6 이전
var fruits = ["apple", "banana"];

// ES6
let fruits = ["apple", "banana"];
fruits.push("mango");

const workingHours = 8;
```

### 객체 해체

```javascript
var person = {
  name: "John",
  age: 40,
};

// ES6 이전
var name = person.name;
var age = person.age;

// ES6
const { name, age } = person;
```

### 객체 정의

```javascript
var name = "John";
var age = 40;
var designations = "Full Stack Developer";
var workingHours = 8;

// ES6 이전
var person = {
  name: name,
  age: age,
  designation: designation,
  workingHours: workingHours,
};

// ES6
const person = { name, age, designation, workingHours };
```

여기까지는 자바 스크립트에 대해 다양한 코드적 규범에 대한 설명이였다. 위와 같이 ES6 문법에 대해 다양한 기능과 활용성을 볼 수 있다.

### Don't Forget key Prop With map in JSX

Always assign a unique value to the key prop to every JSX element while mapping from an array. Read official docs for better understanding

```javascript
const students = [{id: 1, name: 'Bilal'}, {id: 2, name: 'Haris'}];

// in return function of component
<ul>
  {students.map(({id, name}) => (
    <li key={id}>{name}</li>
  ))}
</ul>;
```

### 컴포넌트 이름은 파스칼 케이스로 짓기

```javascript
const helloText = () => <div>Hello</div>; // wrong

const HelloText = () => <div>Hello</div>; // correct
```

### Variable & Function Names Should be in camelCase

```javascript
const working_hours = 10; // bad approach

const workingHours = 10; // good approach

const get_sum = (a, b) => a + b; // bad approach

const getSum = (a, b) => a + b; // good approach
```

### ID & Class Names Should be in kebab-case

```javascript
<!--bad approach-->
<div className="hello_word" id="hello_world">Hello World</div>

<!--good approach -->
<div className="hello-word" id="hello-world">Hello World</div>
```

### Always Check null & undefined for Objects & Arrays

Neglecting null and undefined in the case of objects & arrays can lead to errors.

So, always check for them in your code
```javascript
const person = {
  name: "Haris",
  city: "Lahore",
};
console.log("Age", person.age); // error
console.log("Age", person.age ? person.age : 20); // correct
console.log("Age", person.age ?? 20); //correct

const oddNumbers = undefined;
console.log(oddNumbers.length); // error
console.log(oddNumbers.length ? oddNumbers.length : "Array is undefined"); // correct
console.log(oddNumbers.length ?? "Array is undefined"); // correct
```

### Avoid Inline Styling

Inline styling makes your JSX code messy. It is good to use classes & ids for styling in a separate .css file

```javascript
const text = <div style={{ fontWeight: "bold" }}>Happy Learing!</div>; // bad approach

const text = <div className="learning-text">Happy Learing!</div>; // good approach
```

in .css file:

```javascript
.learning-text {
  font-weight: bold;
}
```

### Avoid DOM Manipulation

Try to use React state instead of DOM manipulation as

Bad approach
```javascript
<div id="error-msg">Please enter a valid value</div>
document.getElementById("error-msg").visibility = visible;
```

Good approach

```javascript
const [isValid, setIsValid] = useState(false);

<div hidden={isValid}>Please enter a valid value</div>;
Set isValid false or true where you have logic of validating a value
```

### Always Remove Every Event Listener in useEffect

Don't forget to write cleanup function in useEffect to remove event listener you added before

```javascript
const printHello = () => console.log("HELLO");
useEffect(() => {
  document.addEventListener("click", printHello);
  return () => document.removeEventListener("click", printHello);
});
```

### Avoid Repetition, Use Generic Components

It is the best thing to make your code cleaner. Write a generic component for similar group of elements and render them on the basis of ``props`` passed to it

```javascript
const Input=(props)=>{
  const [inputValue, setInputValue]=useState('');
  return(
    <label>{props.thing}</label>
    <input type='text' value={inputValue} onChange={(e)=>setInputValue(e.target.value)} />
  )
}
```

In other component you can use Input component as

```javascript
<div>
  <Input thing="First Name" />
  <Input thing="Second Name" />
</div>
```

### Don’t Throw Your Files Randomly

Keep the related files in the same folder instead of making files in a single folder.

For example, if you want to create a navbar in React then you should create a folder and place .js & .css files related to the navbar in it

### Functional Components Are Recommended

If you want to render some elements and don't need to use state then use functional components instead of class components because functional components are easy to use.

Moreover, if you have an idea of React Hooks, then with functional components you can easily play with the state too.

### Create a Habit of Writing Helper Functions

Sometimes you need a utility at more than one time across your React App.

To deal with this scenario efficiently, Write a helper function in a separated file named helper-functions.js, import wherever you want to use it and call that function in it.

### Use Ternary Operator Instead of if/else if Statements

Using ``if/else`` if statements makes your code bulky. Instead try to use ternary operator where possible to make code simpler & cleaner

```javascript
// Bad approach
if (name === "Ali") {
  return 1;
} else if (name === "Bilal") {
  return 2;
} else {
  return 3;
}

// Good approach
name === "Ali" ? 1 : name === "Bilal" ? 2 : 3;
```

### Make index.js File Name to Minimize Importing Complexity

If you have a file named index.js in a directory named actions and you want to import action from it in your component, your import would be like this

```javascript
import { actionName } from "src/redux/actions";
```

actions directory path is explained in the above import . Here you don't need to mention index.js after actions like this

```javascript
import { actionName } from "src/redux/actions/index";
```

### Destructuring of Props

If you want to get rid of writing an object name again and again to access its properties, then destructuring of that object is the best solution for you.
Suppose your component is receiving some values like name, age and designation as props
```javascript
// Bad approach
const Details = (props) => {
  return (
    <div>
      <p>{props.name}</p>
      <p>{props.age}</p>
      <p>{props.designation}</p>
    </div>
  );
};

// Good approach
const Details = ({ name, age, designation }) => {
  return (
    <div>
      <p>{name}</p>
      <p>{age}</p>
      <p>{designation}</p>
    </div>
  );
};
```

## Don't Try to Access Modified State Variable in the Same Function

In a function, if you are assigning a value to a state variable then you won't be able to access that assigned value even after it has been assigned in that function

```javascript
const Message = () => {
  const [message, setMessage] = useState("Hello World");
  const changeMessage = (messageText) => {
    setMessage("Happy Learning");
    console.log(message); // It will print Hello World on console
  };

  return <div>{message}</div>;
};
```

### Use === Operator instead of ==

While comparing two values, strictly checking both values and their data types is a good practice.

```javascript
"2" == 2 ? true : false; // true
"2" === 2 ? true : false; // false
```

Now get your hands dirty with these best coding practices in React!