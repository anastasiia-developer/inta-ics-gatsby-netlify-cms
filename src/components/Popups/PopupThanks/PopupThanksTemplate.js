import React from "react"
import styled from "styled-components"
import { Link } from 'gatsby'
import SocialMedia from '../../SocialMedia'
import PreviewCompatibleImage from "../../PreviewCompatibleImage";
import {ContentInFrontmatter} from '../../Content'

const Overlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(0,0,0,.5);
    z-index: 20;
    display: flex;
    align-items: center;
    justify-content: center;
`;
export const Close = styled.button`
    position: absolute;
    right: 3em;
    top: .5em;
    width: 1em;
    height: 1em;
    opacity: 0.3;
    z-index: 2;
    cursor: pointer;
    font-size: 1em;
    &:hover {
      opacity: 1;
    }
    @media(max-aspect-ratio: 3/3), (max-height: 500px){
        font-size: 4vw;
    }
    &:before, &:after {
      position: absolute;
      left: 2em;
      content: ' ';
      height: 1.5em;
      width: .15em;
      background-color: #fff;
    }
    &:before {
      transform: rotate(45deg);
    }
    &:after {
      transform: rotate(-45deg);
    }
`;
const Wrapper = styled.div`
    position: relative;
    border-radius: 0.7em;
    overflow: hidden;
    width: 55vw;
    font-size: .7vw;
    @media(max-aspect-ratio: 3/3), (max-height: 500px){
        font-size: .8vw;
        width: 100%;
        border-radius: 0;
        height: 100vh;
        overflow-y: scroll;
    }
    .row-to-column{
        position: relative;
    }
    .image{
        width: 60%;
        position: relative;
        overflow: hidden;
        @media(max-aspect-ratio: 3/3), (max-height: 500px){
            width: 100%;
            background: #3ea5b6;
        }
        &:after{
            content: '';
            display: block;
            width: 10em;
            height: 110%;
            position: absolute;
            left: -11%;
            top: -7%;
            background: #fff;
            transform: rotate(16deg);
            @media(max-aspect-ratio: 3/3), (max-height: 500px){
                display: none;
            }
        }
        .gatsby-image-wrapper{
            width: 100%;
            @media(max-aspect-ratio: 3/3), (max-height: 500px){
                width: 130%;
                margin-left: -30%;
                margin-bottom: 30em;
            }
        }
        .trapezoid{
            position: absolute;
            bottom: 1em;
            z-index: 1;
            left: 0;
            overflow: hidden;
            padding-right: 2em;
            font-size: 1.5em;
            line-height: 1.3em;
            @media(max-aspect-ratio: 3/3), (max-height: 500px){
                left: 50%;
                transform: translateX(-50%);
                font-size: 5em;
                padding-right: 0;
                background: #3ea5b6;
                width: 100%;
                bottom: 0;
            }
            p{
                padding: 1em 2.5em 1em;
                font-weight: 900;
                color: #0199CB;
                background: #fff;
                text-align: center;
                width: 70%;
                position: relative;
                @media(max-aspect-ratio: 3/3), (max-height: 500px){
                    width: 100%;
                    background: none;
                    color: #fff;
                    padding: 1em;
                }
            }
            p:after{
                content: '';
                display: block;
                width: 2em;
                height: 110%;
                position: absolute;
                right: -1em;
                top: -7%;
                background: #fff;
                transform: rotate(13deg);
                @media(max-aspect-ratio: 3/3), (max-height: 500px){
                    display: none;
                }
            }
        }
    }
    .container{
        background: #fff;
        justify-content: center;
        padding: 2em .5em 2em 4em;
        display: flex;
        flex-direction: column;
        @media(max-aspect-ratio: 3/3), (max-height: 500px){
            position: absolute;
            bottom: 5em;
            z-index: 1;
            padding: 2em 1.5em;
            border-radius: .5em;
            left: 50%;
            font-size: 3.7em;
            width: 95%;
            transform: translateX(-50%);
        }
        h2{
            color: #005BE4;
            font-size: 2.8em;
            width: 117%;
            font-weight: 500;
            position: relative;
            z-index: 2;
            text-align: left;
            padding: 0;
            @media(max-aspect-ratio: 3/3), (max-height: 500px){
                width: 100%;
            }
        }
        h3{
            color: #393939;
            font-size: 1.2em;
            margin: 2em 0;
            font-weight: 500;
            line-height: 1.5em;
            @media(max-aspect-ratio: 3/3), (max-height: 500px){
                margin: 1em 0;
            }
        }
        p{
            font-size: 1em;
            color: #686868;
        }
    }
`;
const Footer = styled.footer`
    font-size: .7vw;
    @media(max-aspect-ratio: 3/3), (max-height: 500px){
        font-size: 3.25vw;
    }
    .row-to-column{
        padding: 2em;
        align-items: center;
        background: #161616;
        @media(max-aspect-ratio: 3/3), (max-height: 500px){
            padding: 2em 2em 5em;
        }
    }
    .social{
        font-size: 1.3em;
        margin-left: auto;
        a + a{
            margin-left: .5em;
        }
        @media(max-aspect-ratio: 3/3), (max-height: 500px){
            margin: 0 auto;
        }
    }
    img{
        width: 35%;
        margin-right: 2em;
        @media(max-aspect-ratio: 3/3), (max-height: 500px){
            width: 60%;
            margin: 1em 0;
        }
    }
    .btn{
        background: #fff;
        color: #FF4B55;
        border-radius: 2em;
        text-transform: uppercase;
        font-weight: 600;
        padding: .7em 3em;
        margin: 2em auto;
    }
    .popup-column{
        display: flex;
        flex-direction: column;
    }
`;
const Title = styled(ContentInFrontmatter)`
    font-size: 1.8em;
    font-weight: 500;
    color: #fff;
    line-height: 1.5em;
    .bold{
        font-weight: 900;
    }
    @media(max-aspect-ratio: 3/3), (max-height: 500px){
        text-align: center;
    }
`;

const PopupThanksTemplate = ({data, close, className}) =>
    <Overlay className={`overlay ${className || ''}`}>
       <Wrapper>
           <Close onClick={() => close(false)}/>
           <div className='row-to-column'>
               <div className='container'>
                   <h2>
                       {data.title}
                   </h2>
                   <h3>{data.subTitle}</h3>
                   <p>{data.description}</p>
               </div>
               <div className="image">
                   <div className="trapezoid">
                       <p>
                           {data.bonus}
                       </p>
                   </div>
                   <PreviewCompatibleImage
                       imageInfo={{
                           image: data.image
                       }}
                   />
               </div>
           </div>
            <Footer>
                <div className="row-to-column">
                    <img src="/img/popupFooter.png" alt="image"/>
                    <div className="popup-column">
                        <Title content={data.bonusTitle}/>
                        <Link to={`blog/${data.locale === 'ua' ? '' : data.locale}/${data.btnLink}`} className='btn'>{data.btn}</Link>
                        <SocialMedia/>
                    </div>
                </div>
            </Footer>
       </Wrapper>
    </Overlay>;

export default PopupThanksTemplate