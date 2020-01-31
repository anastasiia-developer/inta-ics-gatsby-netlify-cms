import React from 'react'
import styled from "styled-components";

const Container = styled.header`
    justify-content: space-between;
    background-position: 55vw 6em,center;
    background-size: 48%;
  @media(max-aspect-ratio: 3/3), (max-height: 500px){
    background-size: auto 20%,cover;
  }
  .common-header-column {
    width: 50%;
    margin-top: 14em;
    @media(max-aspect-ratio: 3/3), (max-height: 500px){
      width: 100%;
    }
    h5{
        color: #B9B9B9;
    }
    h1{
        font-size: 2.8em;
        font-weight: 500;
        margin-top: 0;
        white-space: nowrap;
    }
    h3{
        font-weight: 300;
        color: #A3A3A3;
        font-size: 1em;
        margin: 1.5em 0;
        line-height: 1.8em;
    @media(max-aspect-ratio: 3/3), (max-height: 500px){
      margin-top: 100%;
      font-size: .95em;
    }
    }
  }
  .row-btn{
    margin-bottom: 5em;
  }
  .row-scope{
    margin: auto 0 0;
    padding-bottom: 3em;
    @media(max-aspect-ratio: 3/3), (max-height: 500px){
      width: 90%;
      flex-wrap: wrap;
      margin: 0 auto;
      text-align: left;
      line-height: 1.5em;
      padding-bottom: 3em;
    }
    li{
      flex: 1;
      @media(max-aspect-ratio: 3/3), (max-height: 500px){
        & + li{
          margin-left: 3em;
        }
        &:last-child{
          margin: 2em 0 0 0;
        }
      }
    }
    .circle{
      border: 1px solid #053b8e;
      border-radius: 100%;
      width: 6em;
      height: 6em;
      display: flex;
      align-items: center;
      justify-content: center;
      img{
        width: 3.2em;
        height: 3.2em;
      }
    }
    p{
      font-weight: 500
      font-size: 0.77em;
      color: #fff;
      margin-top: 2em;
    }
  }
`;

export const Header = ({ image, title, subheading, scopeInformation }) => (
    <Container
        className="common-header row-to-column"
        style={{
            backgroundImage: `url(${
                !!image.childImageSharp ? image.childImageSharp.fluid.src : image
            })`,
        }}>
        <div className="common-header-column">
            <h1>
                {title}
            </h1>
            <h3>
                {subheading}
            </h3>
        </div>
        <ul className="row row-scope">
            {scopeInformation.map((item, index) => (
                <li className="column" key={index}>
                    <img src={!!item.image.childImageSharp ? item.image.childImageSharp.fluid.src : item.image} alt=""/>
                    <p>{item.text}</p>
                </li>
            ))}
        </ul>
    </Container>
);
