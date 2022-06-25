import {
    useSetRecoilState,
  } from "recoil";
import React from 'react';
import styled from 'styled-components';
import {status} from './atoms/status';

const MenuBlock=styled.div`
    display : flex;
    padding : 1rem;
    width: 768px;
    margin: 0 auto;
`;

const Menus=styled.div`
    font-size : 1.125rem;
    cursor: pointer;
    white-space:pre;
    text-decoration: none;
    color:inherit;
    padding-bottom:0.25rem;

&:hover{
    color : purple;
}
&+&{
    margin-left:80%;
}
`;

function Menu(){
    const setStatus=useSetRecoilState(status);
    const ChangeStatus=(name)=>{
        setStatus(name);
    }  
    return(
        <MenuBlock>
            <Menus onClick={()=>{ChangeStatus('Todo')}}>Todo</Menus>
            <Menus onClick={()=>{ChangeStatus('Github')}}>Github</Menus>
        </MenuBlock>
    )
}
export default Menu;