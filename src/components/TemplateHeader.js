import React from 'react'
import styled from "styled-components"
import Breadcrumbs from "./BreadCrumbs";
import { Link } from "gatsby"
import ArrowLine from '../img/arrowLine.svg'
import Store from './store'
import PreviewCompatibleImage from "./PreviewCompatibleImage";
import SocialMedia from "./SocialMedia";

export const Button = styled(Link)`
    align-items: center;
    background: ${props => props.bckg ? 'rgba(255, 255, 255, 0.09)' : 'linear-gradient(90.55deg, #005BE4 0.01%, #4900E4 98.79%)'};
    border: none;
    font-weight: 700;
    padding: 1em 1.5em;
    border-radius: 5em;
    font-size: .8em;
    margin-right: 2em;
    &:last-child{
        margin-right: 0;
    }
    @media(max-aspect-ratio: 3/3), (max-height: 500px){
        margin: 0 0 2em 0;
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
    padding: 8em 0 3em;
    background-color: #0C0C0C;
    display: flex;
    flex-direction: column;
    position: relative;
    @media(max-aspect-ratio: 3/3), (max-height: 500px){
        padding: 5em 1em;
    }
    .wrapper{
        justify-content: space-between;
    }
    .bckg-parallax-container{
        justify-content: space-between;
        @media(max-aspect-ratio: 3/3), (max-height: 500px){
            order: 0;
        }
    }
    .common-header-column{
        width: 55%;
        justify-content: center;
        margin-bottom: 3%;
        @media(max-aspect-ratio: 3/3), (max-height: 500px){
            width: 100%;
            order: 1;
        }
    }
    
    .header-gatsby-image{
        justify-content: space-between;
    }
    .gatsby-image-wrapper{
        width: 100%;
    }
    .bckg-parallax-container{
        width: 55%;
        margin-right: -10%;
        margin-top: -1.6em;
         @media(max-aspect-ratio: 3/3), (max-height: 500px){
            width: 100%;
            margin: 0;
         }
    }
    .list-info{
        width: auto;
        font-weight: 400;
        color: #ABABAB;
        justify-content: flex-start;
        font-size: .8em;
        margin: 2em 0 4em;
        @media(max-aspect-ratio: 3/3), (max-height: 500px){
            flex-wrap: wrap;
            justify-content: center;
            margin: 2em 0;
        }
        li {
            align-items: center;
            margin-right: 1em;
            @media(max-aspect-ratio: 3/3), (max-height: 500px){
                margin-bottom: 1em;
            }
        }
        img {
            width: 1em;
            margin-right: .5em;
        }
    }
    .common-header-column h3 {
        font-weight: 300;
        font-size: 1em;
        line-height: 1.8em;
        margin: 1.5em 0;
        color: #A3A3A3;
        @media(max-aspect-ratio: 3/3), (max-height: 500px){
            font-size: .8em;
            color: #C4C4C4;
            text-align: center;
        }
    }
    h1 {
        color: #fff;
        font-size: 2.8em;
        font-weight: 500;
        margin-top: 0;
        white-space: nowrap;
        @media(max-aspect-ratio: 3/3), (max-height: 500px){
            white-space: normal;
            font-size: 1.8em;
            text-align: center;
        }
    }
    .header-social{
        position: absolute;
        left: 1em;
        top: 0;
        height: 100vh;
        flex-direction: column;
        justify-content: center;
        width: 2em;
        &:after{
          content: '';
          display: block;
          border-right: 1px solid #0b192d;
          height: 10em;
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          left: 2.5em;
        }
        a + a{
            margin-top: 3em;
        }
        @media(max-aspect-ratio: 3/3), (max-height: 500px){
            display: none;
        }
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
                        childrenInColumn,
                        storeBtn,
                        crumbLabelParent,
                        crumbPathParent}) => {

    const { scopeInformation, images, buttons } = header || false;

    const ScopeDeliver = ({information}) =>
        <ul className="row list-info">
            {information.map(item => (
                <li key={item.text} className="row" >
                    <img
                        alt="icon"
                        src={item.image.publicURL} />
                    <p>{item.text}</p>
                </li>
            ))}
        </ul>;

    const Buttons = ({buttons}) => buttons.map((btn, index) => (
        <Button
            key={index}
            className="btn row"
            to={btn.link}
            bckg={!header.logo}>
            {!header.logo &&
                <img src="/img/logoMini.svg"
                     alt="logo Mini"
                     className="logo"/>
            }
            {btn.text}

            {location && !header.arrow &&
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
                            crumbLabel={crumbLabel || false}
                            location={location}
                            crumbLabelParent={crumbLabelParent || false}
                            crumbPathParent={crumbPathParent || false}/>
                    }
                    <h1>
                        {title}
                    </h1>
                    <h3>
                        {description}
                    </h3>
                    {scopeInformation &&
                        <ScopeDeliver information={scopeInformation}/>
                    }
                    <div className="row-to-column">
                        { buttons &&
                            <Buttons buttons={buttons}/>
                        }
                    </div>
                    {childrenInColumn}
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
            <SocialMedia className='header-social'/>
        </Container>
    );
};
export default TemplateHeader