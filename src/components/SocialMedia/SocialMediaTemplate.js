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
        fill: #005BE4;
        cursor: pointer;
      }
    }
   
`;

const SocialMediaTemplate = ({className, data}) => (
    <Container className={`social ${className || ''}`}>
        <a href={data.instagram}>
            <Instagram/>
        </a>
        <a href={data.facebook}>
            <Facebook/>
        </a>
        <a href={data.twitter}>
            <Twitter/>
        </a>
    </Container>
);

export default SocialMediaTemplate