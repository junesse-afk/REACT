function Body (props) {

    // 변수를 한꺼번에 2개 이상 선언하면서
    // props의 key값과 매칭되어 저장됨
    // => 주의! 변수명은 반드시 key와 같아야 자동 저장됨! (순서 무관)
    // const name = props.name;

    // App.js에서 foodList 배열이 전달되지 않을 경우 default 값을 설정하여 해결!
    // const {name, location, foodList = []} = props;

    // return (
    //     <div>
    //         <h3>{name}은 {location}에 거주합니다.</h3>
    //         <br/>
    //         <h3>{foodList.length}개 음식을 좋아합니다.</h3>
    //     </div>
    // );

    debugger;
    // 컴포넌트 자체를 props에 전달가능
    // 이때, 속성명(key)은 반드시 children으로 전달된다!
    return (
        <div>
            {props.children}
        </div>
    );

}

export default Body;