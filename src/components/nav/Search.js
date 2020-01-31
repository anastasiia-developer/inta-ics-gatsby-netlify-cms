import React from 'react'
import styled from 'styled-components';

const Label = styled.label`
    background: #fff;
    border-radius: 4px;
    align-items: center;
    padding: 0 .5em 0 0;
    font-size: 1em;
    min-width: 300px;
    input{
        background: transparent;
        border: none;
        border-radius: 4px;
        height: 100%;
        width: 100%;
        padding: .7em 0 .7em 1em;
        color: #fff;
        font-size: .8em;
        outline: none;
        color: #6D6D6D;
        &::placeholder{
          color: inherit;
        }
    }
    .icon{
        width: .8em;
        height: .8em;
        margin-right: 0;
    }
`;
export default Label

const Search = () =>(
    <Label className="row">
        <input type="text" placeholder="Отследить груз"/>
        <img src="./img/search.svg" className="icon" alt="search icon"/>
    </Label>
);

export default Search