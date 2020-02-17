import React from 'react'
import styled from 'styled-components'
import SearchIcon from '../../img/searchInput.svg'

const Label = styled.label`
    background: #fff;
    border-radius: 4px;
    align-items: center;
    padding: 0 .5em 0 0;
    font-size: 1em;
    max-width: 300px;
    min-width: 15em;
    position: absolute;
    right: 15em;
    @media(max-aspect-ratio: 3/3), (max-height: 500px){
        background: #313131;
        padding: .6em;
        min-width: auto;
        right: .7em;
        top: .3em;
    }
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
        @media(max-aspect-ratio: 3/3), (max-height: 500px){
            display: none;
        }
    }
    svg{
        width: .8em;
        height: .8em;
        margin-right: 0;
        @media(max-aspect-ratio: 3/3), (max-height: 500px){
            margin-left: auto;
            font-size: 1.2em;
            path{
                fill: #fff;
            }
        }
    }
`;

const Search = ({isActive}) =>(
    <Label className="row" isActive={isActive}>
        <input type="text" placeholder="Отследить груз"/>
        <SearchIcon />
    </Label>
);

export default Search