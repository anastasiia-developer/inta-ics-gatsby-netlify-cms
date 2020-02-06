import React from 'react'
import styled from "styled-components";

const Wrapper = styled.div`
    margin-top: 5em;
    justify-content: center;
    @media(max-aspect-ratio: 3/3), (max-height: 500px){
      margin-top: 2.5em;
      justify-content: center;
    }
    img{
      height: 2.5em;
      width: auto;
    }
    a + a{
      margin-left: 1em;
    }
`;

const Store = () => (
    <Wrapper className='row'>
        <a href="https://www.apple.com">
            <img src="./img/appstore.png" alt="appstore icon"/>
        </a>
        <a href="https://www.apple.com">
            <img src="./img/google.png" alt="google store icon"/>
        </a>
    </Wrapper>
);

export default Store;