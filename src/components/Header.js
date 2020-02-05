import React from 'react'
import styled from "styled-components"
import Breadcrumbs from "./BreadCrumbs";
import { Link } from "gatsby"
import ArrowLine from '../img/arrowLine.svg'
import Img from "gatsby-image"
import Store from './store'
import PreviewCompatibleImage from "./PreviewCompatibleImage";

const Button = styled(Link)`
    align-items: center;
    background: rgba(255, 255, 255, 0.09);
    border: none;
    font-weight: 700;
    padding: 1em 1.5em;
    border-radius: 5em;
    font-size: .8em;
    margin-right: 2em;
    &:hover{
        background: linear-gradient(100.69deg, #005BE4 0%, #4900E4 100%);
        svg{
            width: 1em;
            width: 1em;
        }
    }
    .logo{
        margin-right: .5em;
    }
    svg{ 
        width: 0;
        margin-left: 1em; 
        transition: all .4s;
        path{
            fill: #fff;
        }
    }
`;
const Container = styled.header`
    padding-top: 8em;
    .wrapper{
        justify-content: space-between;
    }
    .bckg-parallax-container{
        width: 40%;
        height: 100%;
        right: -3%;
        justify-content: space-between;
        @media(max-aspect-ratio: 3/3), (max-height: 500px){
            display: none;
        }
        .gatsby-image-wrapper{
            height: 100%;
            width: 45%;
        }
    }
    .common-header-column{
        width: 55%;
        justify-content: center;
    }
    .bckg-parallax{
        width: 100%;
        height: 100vh;
        background-size: auto 70%;
        background-position: right 35%;
        background-repeat: no-repeat;
    }
    .header-gatsby-image{
        justify-content: space-between;
    }
    .list-info{
        width: auto;
    }
`;

const Header = ({ header, location, title, subheading }) => {
    const { scopeInformation, images, buttons } = header.slide[0];

    const scopeDeliver = scopeInformation.map(item => (
        <li className="row" key={item.text}>
            <img
                alt="icon"
                src={item.image.publicURL} />
            <p>{item.text}</p>
        </li>
    ));

    const Buttons = buttons.map(btn => (
        <Button className="row" to={btn.link}>
            <img src="./img/logoMini.svg" alt="logo Mini" className="logo"/>
            {btn.text}
            {location &&
                <ArrowLine className="icon"/>
            }
        </Button>
    ));

    return (
        <Container
            className="column common-header">
            <div className="wrapper row-to-column">
                <div className="column common-header-column">
                    {location &&
                        <Breadcrumbs
                            crumbLabel={false}
                            location={location}/>
                    }
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
                        {Buttons}
                    </div>
                </div>
                <div className="bckg-parallax-container">
                    <div className="row header-gatsby-image">
                        {images.map(img => (
                            <PreviewCompatibleImage
                                key={img.image.id}
                                imageInfo={{
                                    image: img.image,
                                }}
                            />
                        ))}
                    </div>
                    <Store/>
                </div>
            </div>
        </Container>
    );
};
export default Header