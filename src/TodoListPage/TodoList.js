import React from 'react';
import{
    useRecoilState
  }  from 'recoil';
import { ReposGoal,TodoList } from '../atoms/status';
import styled from 'styled-components'
const Todo=({handleCancel,onRemove})=>{
    const [reposgoal]=useRecoilState(ReposGoal);
    const [Todo]=useRecoilState(TodoList);
    return(
        <div>
            <StyledTodoList>
            <div>
                <b>Repos(Project) Goal : {reposgoal}</b>
                {Todo.map((todo)=>(
               <div> 
                <StyledList>
                    <li style={{'list-style' : 'none'}}><input type="checkbox" onClick={()=>handleCancel(todo.id)} checked={todo.checked}/>
                    <b
                    style={
                        {textDecoration: todo.checked?'line-through':'none'}
                        }>{todo.text}</b>
                    <button onClick={()=>onRemove(todo.id)}>❌</button></li>
                </StyledList>
                </div>
            ))}
            </div>
            </StyledTodoList>
        </div>
    )
}
const StyledTodoList = styled.div`
display: flex;
flex-direction: column;
align-items: center;
margin : 50px;
`;

const StyledList=styled.ul`
  margin-top : 15px;,
  list-style : none,
  `
export default Todo;