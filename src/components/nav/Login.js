import React from 'react'
import styled from 'styled-components';
import { Link } from 'gatsby';

const Button = styled(Link)`
    border: none;
    border-radius: 4px;
    padding: .5em 1em; 
    color: #fff; 
    font-weight: 500;     
    background: #222222;
    align-items: center;
    align-self: stretch;
    margin: 0 1em;
    font-size: .9em;
    &:hover{
        background: #414141;
    }
    &:focus{
        background: #222222;
    }
    @media(max-aspect-ratio: 3/3), (max-height: 500px){
        margin-left: auto;
        align-self: center;
    }       
    img{
        width: auto;
        margin-left: 1em;
    }
`;
const Login = () =>(
    <Button className='row' to='/'>
        Войти
        <img src="/img/user.svg" alt="user icon" className="icon"/>
    </Button>
);

export default Login