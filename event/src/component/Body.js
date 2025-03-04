// function Body (props) {

import { useState } from "react";

//     // < 이벤트 핸들링 >
//     // - button, input, checkbox 등 이벤트를 연결하려면 onClick 속성에 함수를 지정!
//     // - Body 컴포넌트 안에서만 사용할 수 있는 함수로 만들기 위해 Body 함수 내부에 함수 선언!
//     //  (마치 자바 class 내에 method 선언과 유사함)

//     const handleOnClick = (e) => {
//         alert(`${e.target.name}버튼 클릭!`);
//         // alert(`${e.target.innerText} 클릭!`);
//     }
//     return (
//         <div>
//             <button name="A" onClick={handleOnClick}>A버튼</button>
//             <button name="B" onClick={handleOnClick}>B버튼</button>
//         </div>
//     );
// }

// < 상태관리 - State >
// - React에서 매우 중요한 개념이 상태(State)관리이다.
// - 지금까지는 정적인 화면을 만들었다면 이제는 사용자와 상호작용하는(동적인) 화면을 만들차례!
// - React에서 제공하는 useState()를 활용! (커스텀 State도 있음!)
// - [참고] React.StrictMode란?
//  - StrictMode는 개발단계에서만 활성화된다.
//  - 보통 useState(), useEffect() 등 상태관리를 많이하게되는데 상태를 여러개 관리하다보면
//    개발자가 의도치 않은 버그(side effect, 부수 효과)가 발생하는데 이를 엄격하게 관리하기 위해 
//    생명 주기가 있는 함수(지금은 Body)가 두번 호출된다!
// function Body () {
//     console.log('Body update!!');

//     // let count = 0;
//     // State를 사용하지 않으면 변수 값 변경 후 다시 HTML을 조작해야한다!
//     // const onIncrease = () => {
//     //     count++;
//     //     document.getElementsByTagName("h3")[0].innerText = count;
//     // }

//     // count: 변수명, setCount: setter함수
//     // useState("초기값"): useState 생성자에 초기값을 전달한것 (count = 0 할당됨)
//     const [count, setCount] = useState(0);
//     const onIncrease = () => {
//         // 주의! count는 상수(const)이므로 count++, ++count 등으로 변경 불가!
//         // 반드시 count변수의 setter 함수인 setCount()를 활용해서 변경!
//         // debugger;
//         // count++;
//         // [중요] state로 관리하는 변수 즉, useState()로 리턴받은 변수가 변경되면
//         //      해당 컴포넌트 (function Body)가 다시 랜더링 된다!
//         //      (2번씩 출력된다면 index.js에 <React.StrictMode> 제거)
//         setCount(count + 1);
//     }

//     return (
//         <div>
//             <h3>{count}</h3>
//             <button onClick={onIncrease}>+</button>
//         </div>
//     );
// }

function Body () {

    // const [name, setName] = useState("");       // input에 name및 change이벤트
    // const [gender, setGender] = useState("");   // selectbox에 gender및 change이벤트
    // const [birth, setBirth] = useState("");     // input에 birth및 change이벤트
    // const [bio, setBio] = useState("");         // textarea에 bio및 change이벤트
    // const onChangeName = (e) => { 
    //     setName(e.target.value);
    // }
    // const onChangeGender = (e) => {
    //     setGender(e.target.value);
    // }
    // const onChangeBirth = (e) => {
    //     setBirth(e.target.value);
    // }
    // const onChangeBio = (e) => {
    //     setBio(e.target.value);
    // }

    const [state, setState] = useState({
        name: "",
        gender: "",
        birth: "",
        bio: "",

    });
    const handleOnChange = (e) => {
        state[e.target.name] = e.target.value;
        // setState(state);


    // useState()에 초기값으로 전달한 것은 객체 즉, 참조타입이다!
    // state객체에 직접 접근하여 값을 변경하면 state변수의 주소는 변함이 없다!
    // 따라서, 변경된 새로운 객체(JSON)을 생성하여 useState()에 전달해야함!

        setState(
            {...state, // 모든 key, value를 복사해온 후
             [e.target.name]:e.tartget.value // [key]에 해당하는 데이터 update
            
            });
    }

    return (
        <div>
            <div>
                <input name="name" value={state.name} onChange={handleOnChange} />
            </div>
            <div>
                <select name="gender" value={state.gender} onChange={handleOnChange}>
                    <option></option>
                    <option>남성</option>
                    <option>여성</option>
                </select>
            </div>
            <div>
                <input name="birth" type="date" value={state.birth} onChange={handleOnChange} />
            </div>
            <div>
                <textarea name="bio" value={state.bio} onChange={handleOnChange} />
            </div>
        </div>
    );
}


export default Body;