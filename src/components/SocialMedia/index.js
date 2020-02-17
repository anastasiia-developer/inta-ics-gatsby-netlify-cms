import React from "react";
import styled from "styled-components";
import Instagram from '../../img/social/instagram.svg'
import Facebook from '../../img/social/facebook.svg'
import Twitter from '../../img/social/twitter.svg'


const Container = styled.div`
    display: flex;
    align-items: center;
    font-size: .8em;
    
    svg{
      width: 1.3em;
      height: 1.3em;
      path{
        fill: #fff;
      }
      &:hover path{
        fill: #FFE15A;
        cursor: pointer;
      }
    }
   
`;

const SocialMedia = () => (
    <Container className='social'>
        <a href="https://www.instagram.com/">
            <Instagram/>
        </a>
        <a href="https://www.facebook.com/">
            <Facebook/>
        </a>
        <a href="https://www.twitter.com/">
            <Twitter/>
        </a>
    </Container>
)

export default SocialMedia