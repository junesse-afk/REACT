// import React from "react";
import "./Body.css"

function Body () {

    const n1 = 10;
    const n2 = 20;
    const str = "안녕";
    const str2 = "리액트";
    const bool = true;
    const bool2 = false;
    const obj = {
        a: 10,
        b: 20
    }

    // return (
        // <div>
        //     <h1>body</h1>
        //     <h3>{n1}</h3>
        //     <h3>{n1 + n2}</h3>
        //     <h3>{str + str2}</h3>
        //     {/* boolean 타입은 표현식으로 화면에 표시할 수 없음음 */}
        //     {/* 다음과 같이 String() 형태로 변환해야함! */}
        //     <h3>{bool || bool2}</h3>
        //     <h3>{String(bool || bool2)}</h3>

        //     {/* 표현식{} 으로 출력할 수 있는 데이터는 */}
        //     {/* 숫자, 문자, 논리, null, undefined */}
        //     {/* 이외에 데이터타입을 표현식에 사용하는 경우 에러발생 */}
        //     {/* <h3>{obj}</h3> */}
        //     <h3>a: {obj.a}</h3>
        //     <h3>b: {obj.b}</h3>
        // </div>

        // < JSX 규칙 >
        // 1. 반드시 닫는 태그가 있어야함
        //  ex) <input> (x), <input></input> (O), <input /> (O)
        // 2. 반드시 하나의 요소를 리턴! (하나도 없어도 에러!)
        //  단, <React.Fragment> 태그로 감싸면 가능! (React import 필수!)
        // <React.Fragment>
        //     <div>1</div>
        //     <div>2</div>
        // </React.Fragment>

        // 빈태그 <></>도 가능! (React import 필요없음!)
        // <>
        //     <div>1</div>
        //     <div>2</div>
        // </>
    // );

    // const num = 10;
    // return (
    //     <>
    //         <h3>
    //             {num}은 {num % 2 == 0 ? "짝수" : "홀수"} 입니다.
    //         </h3>
    //     </>
    // );

    // JS의 if문도 가능
    // const num = 11;
    // if (num % 2 == 0) {
    //     return <div>{num}은 짝수 입니다.</div>
    // } else {
    //     return <div>{num}은 홀수 입니다.</div>
    // }

    return (
        // style={JSON} 형태로 사용됨
        // 바깥 중괄호 {} 표현식, 안쪽 중괄호 객체 즉, JSON!
        // 주의! JSX는 HTML과 JS가 섞이다 보니 정확히 구분할 필요가 있다!
        // 따라서, background-color 대신 backgroundColor를 써야함!
        // <div style="background-color: red; color: blue;"></div>
        // => 분명 HTML에서 style이 맞지만 지금 확장자가 JSX이므로 style 속성을 JSX로 판단!
        // => 따라서, {{}} 가 싫고 css문법을 사용하고 싶다면 css 파일 분리
        // <div style={{backgroundColor: "red", color: "blue"}}>
        <div className="body">
            <h1>body</h1>
        </div>
    );


}

export default Body;