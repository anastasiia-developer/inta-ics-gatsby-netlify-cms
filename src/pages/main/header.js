import React from 'react'
import styled from "styled-components"
import { useBreadcrumb } from 'gatsby-plugin-breadcrumb'



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
        margin-top: 2em;
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
    const { crumbs } = useBreadcrumb({
        location,
        crumbLabel: 'Авіадоставка',
        crumbSeparator: ' / ',
    });
    console.log('crumbs', crumbs);
    return (
        <Container
            className="column">
            <div className="row">
                <div className="column common-header-column">
                    <div ></div>
                    <h1>
                        {title}
                    </h1>
                    <h3>
                        {subheading}
                    </h3>
                    <ul className="row list-info">
                        {scopeInformation.map((item, index) => (
                            <li className="row" key={index}>
                                <img
                                    alt="icon"
                                    src={item.image.publicURL} />
                                <p>{item.text}</p>
                            </li>
                        ))}
                    </ul>
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