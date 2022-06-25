import React from 'react';
import styled from 'styled-components'

const CreateTodoList=({onChange,onKeyDown})=>{
    return(
        <StyledCreateTodo>
            <input placeholder='Write a ToDo and Press Enter' onChange={onChange} onKeyDown={onKeyDown}/>
        </StyledCreateTodo>
    )
}
const StyledCreateTodo = styled.div`
display: flex;
flex-direction: column;
align-items: center;
`;


export default CreateTodoList;