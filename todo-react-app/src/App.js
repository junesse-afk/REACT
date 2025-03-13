import { useEffect, useState } from 'react';
import './App.css';
import Todo from './Todo';
import { Container, List, Paper } from '@mui/material';
import AddTodo from './AddTodo';
import { call } from './ApiService';

function App() {

  const [items, setItems] = useState([]);

  // CORS (Cross-Orgin Resource Sharing)
  // => 처음 리소스를 제공한 도메인 (orgin: 3000)이
  //   현재 요청하려는 도메인 (8080)이 다르더라도 요청을 허락해주는 웹 보안 방침
  // => CORS가 가능하게 하기 위해서는 백엔드에서 CORS 방침 설정 필수!
  //    => spring-boot config 패키지에 WebMvcConfig 클래스 생성
  // const reqOptions = {
  //   method: "GET",
  //   headers: {"Content-Type": "application/json"}
  // }
  // fetch("http://localhost:8080/todo", reqOptions)
  //   .then(res => res.json())
  //   .then(
  //     (res) => setItems(res.data),
  //     (error) => {}
  //   )
  // 최초 App.js가 실행되어 fetch()로 비동기 호출함
  // => 응답이 오면 .then()이 실행됨
  // => 이때, setItems()로 값이 변경되면 다시 랜더링 하기 위해 App.js가 실행됨
  // => App.js가 실행되면 fetch()를 또 실행함 (무한루프...)
  // 이러한 현상을 방지해 주는것이 effect 훅 
  // 리액트 훅 중에서 Effect 훅인 useEffect() 함수를 사용하여 무한루프 해결!
  // useEffect(콜백함수, 배열)
  // => 첫랜더링이 일어났을때, 그 이후에는 배열안(두번째파라미터)의 값이 변할때마다
  //    콜백함수(첫번째파라미터)를 호출한다.
  // useEffect(() => {
  //   const reqOptions = {
  //     method: "GET",
  //     headers: {"Content-Type": "application/json"}
  //   }
  //   fetch("http://localhost:8080/todo", reqOptions)
  //     .then(res => res.json())
  //     .then(
  //       (res) => setItems(res.data),
  //       (error) => {}
  //     )
  // }, [])


  useEffect(() => {
    call("/todo", "GET", null)
      .then(res => setItems(res.data))
  }, []);

  const addItem = (item) => {
    call("/todo", "POST", item)
      .then(res => setItems(res.data))
  }
  const deleteItem = (item) => {
    call("/todo", "DELETE", item)
      .then(res => setItems(res.data))
  }
  const editItem = (item) => {
    call("/todo", "PUT", item)
      .then(res => setItems(res.data))
  }
  // const addItem = (item) => {
  //   item.id = "ID-" + items.length; // key를 위한 id (pk)
  //   item.done = false;  // 최초 할일 추가시 done값을 false
  //   setItems([...items, item]);
    
  //   console.log(items);
  // }
  // const editItem = () => {}
  // const deleteItem = (item) => {
  //   const newItems = items.filter(e => e.id !== item.id);
  //   setItems(newItems);
  // }
  
  // let todoItems = items.length > 0 && items.map((item) => <Todo item={item} key={item.id}/>);
  let todoItems = items.length > 0 && (
    <Paper style={{margin: 16}}>
      <List>
        {items.map((item) => (
          <Todo item={item} key={item.id} editItem={editItem} deleteItem={deleteItem} />
        ))}
      </List>
    </Paper>
  )

  return (
    <div className="App">

      <Container maxWidth="md">
        <AddTodo addItem={addItem} />
        <div className="TodoList">{todoItems}</div>
      </Container>
      
    </div>
  );
}

export default App;
