import logo from './logo.svg';
import './App.css';
import Header from './component/Header';
import Body from './component/Body';
import Footer from './component/Footer';

// < 컴포넌트에 값 전달하기 >
// - props(Properties)의 줄임말로 단일 객체 형태(JSON)로 값 전달 가능
// - 속성1=값1 속성2=값2 형태로 전달하면 props 변수에 객체 형태(JSON)로 전달된다.
// - 변수에 값이 있다면 속성={변수명} 형태로 전달한다.
// - 객체(JSON) 자체를 전달할 수도 있다
//   ex) 속성={객체} 또는 {...객체} (스프레드 연산자 활용 가능)
function App() {

  const name = "차동원";
  const location = "부산";
  
  const BodyProps = {
    name : "차동원",
    location : "부산",
    // foodList : ["파스타", "떡볶이", "치킨"] 
  }

  return (
    <div className="App">
      <Header />
      {/* <Body name={name} location={location} /> */}
      {/* <Body BodyProps={BodyProps} /> */}
      {/* <Body {...BodyProps} /> */}

      <Body>
        <ChildComp />
      </Body>

      <Footer />
    </div>
  );
}

function ChildComp () {
  return <div>child component</div>
}

export default App;
