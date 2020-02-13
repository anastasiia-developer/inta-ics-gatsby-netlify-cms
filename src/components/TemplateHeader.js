import React from 'react'
import styled from "@emotion/styled"
import Breadcrumbs from "./BreadCrumbs";
import { Link } from "gatsby"
import ArrowLine from '../img/arrowLine.svg'
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
    &:last-child{
        margin-right: 0;
    }
    &:hover{
        background: linear-gradient(100.69deg, #005BE4 0%, #4900E4 100%);
        svg{
            width: 1em;
            width: 1em;
        }
    }
    .logo{
        width: 1.5em;
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
    min-height: 100vh;
    padding: 8em 0 5em;
    background-color: #0C0C0C;
    display: flex;
    flex-direction: column;
    .wrapper{
        justify-content: space-between;
    }
    .bckg-parallax-container{
        justify-content: space-between;
        @media(max-aspect-ratio: 3/3), (max-height: 500px){
            display: none;
        }
    }
    .common-header-column{
        width: 55%;
        justify-content: center;
        margin-bottom: 3%;
    }
    .header-gatsby-image{
        justify-content: space-between;
    }
    .list-info{
        width: auto;
        font-weight: 400;
        color: #ABABAB;
        justify-content: flex-start;
        font-size: .8em;
        margin: 2em 0 4em;
        li {
            align-items: center;
            margin-right: 1em;
        }
        img {
            width: 1em;
            margin-right: .5em;
        }
    }
    h3 {
        font-weight: 300;
        font-size: 1em;
        line-height: 1.8em;
        margin: 1.5em 0;
        color: #A3A3A3;
    }
    h1 {
        color: #fff;
        font-size: 2.8em;
        font-weight: 500;
        margin-top: 0;
        white-space: nowrap;
    }

`;

const TemplateHeader = ({
                        className,
                        header,
                        location,
                        crumbLabel,
                        title,
                        description,
                        children,
                        storeBtn }) => {
    const { scopeInformation, images, buttons } = header.slide[0];

    const scopeDeliver = scopeInformation.map(item => (
        <li key={item.text} className="row" >
            <img
                alt="icon"
                src={item.image.publicURL} />
            <p>{item.text}</p>
        </li>
    ));

    const Buttons = buttons.map((btn, index) => (
        <Button
            key={index}
            className="row"
            to={btn.link}>
            <img src="/img/logoMini.svg"
                 alt="logo Mini"
                 className="logo"/>
            {btn.text}
            {location &&
                <ArrowLine className="icon"/>
            }
        </Button>
    ));
    return (
        <Container
            className={className}>
            <div className="wrapper row-to-column">
                <div className="column common-header-column">
                    {location &&
                        <Breadcrumbs
                            crumbLabel={crumbLabel}
                            location={location}/>
                    }
                    <h1>
                        {title}
                    </h1>
                    <h3>
                        {description}
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
                        {images.map((img, index) => (
                            <PreviewCompatibleImage
                                key={index}
                                imageInfo={{
                                    image: img.image,
                                }}
                            />
                        ))}
                    </div>
                    {storeBtn &&
                        <Store/>
                    }
                </div>
            </div>
            {children}
        </Container>
    );
};
export default TemplateHeader