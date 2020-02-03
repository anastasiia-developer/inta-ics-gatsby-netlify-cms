import React from 'react'
import styled from "styled-components"
import Breadcrumbs from "./BreadCrumbs";
import { Link } from "gatsby"
import ArrowLine from '../img/arrowLine.svg'

const Button = styled(Link)`
    align-items: center;
    background: rgba(255, 255, 255, 0.09);
    border: none;
    font-weight: 700;
    padding: 1em 1.5em;
    border-radius: 5em;
    font-size: .9em;
    &:hover{
        background: linear-gradient(100.69deg, #005BE4 0%, #4900E4 100%);
        svg{
            display: block;
        }
    }
    .logo{
        margin-right: .5em;
    }
    svg{ 
        display: none;
        margin-left: 1em; 
        path{
            fill: #fff;
        }
    }
`;
const Container = styled.header`
    min-height: 100vh;
    background-color: #000;
    position: relative;
    @media(max-aspect-ratio: 3/3), (max-height: 500px){
        background-repeat: no-repeat;
        background-size: auto 16%;
        background-position: right 8em;
        text-align: center;
    }
    .bckg-parallax-container{
        width: 50%;
        height: 100%;
        right: -3%;
        @media(max-aspect-ratio: 3/3), (max-height: 500px){
            display: none;
        }
    }
    .bckg-parallax{
        width: 100%;
        height: 100vh;
        background-size: auto 70%;
        background-position: right 35%;
        background-repeat: no-repeat;
    }
    .common-header-column{
        margin-left: 7%;
        width: 60%;
        padding-top: 15em;
        @media(max-aspect-ratio: 3/3), (max-height: 500px){
          margin: 0;
          width: 100%;
        }
    }
    h1{
        color: #fff;
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
    .row-btn{
        margin-bottom: 5em;
    }
    .list-info{
        font-weight: 400;
        color: #ABABAB;
        justify-content: flex-start;
        margin: 2em 0 4em;
        @media(max-aspect-ratio: 3/3), (max-height: 500px){
            width: 90%;
            margin: 0 auto;
            flex-wrap: wrap;
            justify-content: center;
        }
        li{
            align-items: center;
            margin-right: 1em;
            @media(max-aspect-ratio: 3/3), (max-height: 500px){
                margin: 0 1em 1em 0;
            }
        }
        img{
            width: 1em;
            margin-right: .5em;
        }
    }
`;

const Header = ({ image, title, subheading, scopeInformation, location }) => {
    const scopeDeliver = scopeInformation.map(item => (
        <li className="row" key={item.text}>
            <img
                alt="icon"
                src={item.image.publicURL} />
            <p>{item.text}</p>
        </li>
    ));
    return (
        <Container
            className="column">
            <div className="row">
                <div className="column common-header-column">
                    <Breadcrumbs location={location}/>
                    <h1>
                        {title}
                    </h1>
                    <h3>
                        {subheading}
                    </h3>
                    <ul className="row list-info">
                        {scopeDeliver}
                    </ul>
                    <div className="row">
                        <Button className="row" to="/delivery/air-usa">
                            <img src="./img/logoMini.svg" alt="logo Mini" className="logo"/>
                            Авиадоставка из США
                            <ArrowLine className="icon"/>
                        </Button>
                    </div>
                </div>
                <div className="bckg-parallax-container">
                    <div
                        className="bckg-parallax"
                        style={{
                            backgroundImage: `url(${
                                !!image.childImageSharp ? image.childImageSharp.fluid.src : image
                            })`,
                        }}>
                    </div>
                </div>
            </div>
        </Container>
    );
};
export default Header