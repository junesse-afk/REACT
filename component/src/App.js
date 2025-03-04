import './App.css';
import Body from './component/Body';
import Footer from './component/Footer';
import Header from './component/Header';


// < 컴포넌트 >
// function header () {}
// => 컴포넌트의 이름은 항상 대문자! (HTML 태그와 구분하기 위함)
// => 소문자로 작성 시 react 컴포넌트로 인식하지 않음!
// const Header = () => {
//   // jsx에서는 "반드시 하나"의 요소를 리턴해야함!
//   // return ();

//   return (
//     <header>
//       <h1>header</h1>
//     </header>
//   );
// }

/* 
< JSX란? >  
- 자바스크립트와 HTML 태그를 섞어 사용하는 문법이 가능한 확장가를 JSX라고 함
- JSX는 "자바스크립트 XML"의 줄임말로 자바스크립트의 확장 문법
- JSX는 공식 자바스크립트 문법은 아니지만 현재 파일이 js 확장자 인데도 jsx 문법이 가능한
 이유는 React 특정 버전부터 jsx를 너무 많이쓰다 보니 js로 만들더라도 jsx로 컴파일하도록 지원
*/

function App() {
  return (
    <div className="App">
      <Header />
      {/* component 폴더 하위에 Body.js, Footer.js 파일 만들기 */}
      {/* Body는 <div>안에 "body" Footer는 <footer>안에 "footer" */}
      <Body />
      <Footer />
    </div>
  );
}

export default App;