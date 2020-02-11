import React from 'react'
import styled from 'styled-components';

const Button = styled.button`
    border: 1px solid #FFE15A;
    border-radius: 4px;
    padding: .5em 1em; 
    color: #FFE15A;      
    background: transparent;
    align-items: center;
    align-self: stretch;
    margin-left: 1em;
    font-size: .9em;
    img{
        margin-left: .5em;
    }
`;
const Login = () =>(
    <Button className='row'>
        Войти
        <img src="./img/user.svg" alt="user icon" className="icon"/>
    </Button>
);

export default Login