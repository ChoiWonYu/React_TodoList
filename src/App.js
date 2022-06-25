import {
  useRecoilValue,
  useRecoilState
} from "recoil";
import Menu from './Menu';
import {React,useRef,useState} from 'react';
import {status,TodoList} from './atoms/status';
import Todo from './TodoListPage/TodoList';
import CreateTodoList from "./TodoListPage/CreateTodoList";
import GithubPage from "./GithubPage/githubPage";
import styled from "styled-components";
const App=()=>{
  const nextId=useRef(2);
  const value=useRecoilValue(status);
  const [todo,settodo]=useRecoilState(TodoList);
  const [input,setInput]=useState();
  const handleCancel=(id)=>{
      settodo(todo.map(todo=>
        todo.id===id?{...todo,checked:!(todo.checked)}:todo
        )
      )
  }
  const onRemove=(id)=>{
    settodo(todo.filter(todo=>todo.id!==id));
  }
  const handleCreate=()=>{
    const newTodo={
      id:nextId.current,
      text:input,
      checked:false
    }
    settodo([newTodo,...todo]);
    nextId.current+=1;
  }
  const onChange=(e)=>{
    setInput(e.target.value);
  }
  const onKeyDown=(e)=>{
    if(e.key==='Enter')
    {
      handleCreate();
      e.target.value='';
    }
  }
  return (
    <StyledApp>
    <div className="App">
        <Menu/>
        {value==='Todo'?
          
          <div>
          <Todo handleCancel={handleCancel} onRemove={onRemove}/>
          <CreateTodoList onChange={onChange} onKeyDown={onKeyDown}/>
          </div>:
          <GithubPage/>
        }
    </div>
    </StyledApp>
  );
  }
  const StyledApp = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  `;

  
export default App;
