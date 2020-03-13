import React from "react";
import styled from "styled-components";
import { Link } from 'gatsby'
import SocialMedia from '../SocialMedia'
import {graphql, StaticQuery} from "gatsby";
import PreviewCompatibleImage from "../PreviewCompatibleImage";


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
const Close = styled.button`
    position: absolute;
    right: 3em;
    top: .5em;
    width: 1em;
    height: 1em;
    opacity: 0.3;
    z-index: 2;
    cursor: pointer;
    &:hover {
      opacity: 1;
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
    .image{
        width: 60%;
        position: relative;
        overflow: hidden;
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
        }
        .gatsby-image-wrapper{
            width: 100%;
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
            p{
                padding: 1em 2.5em 1em;
                font-weight: 900;
                color: #0199CB;
                background: #fff;
                text-align: center;
            }
            p:after{
                content: '';
                display: block;
                width: 2em;
                height: 110%;
                position: absolute;
                right: 7%;
                top: -7%;
                background: #fff;
                transform: rotate(13deg);
            }
        }
    }
    .container{
        background: #fff;
        justify-content: center;
        padding: 2em .5em 2em 4em;
        display: flex;
        flex-direction: column;
        h2{
            color: #005BE4;
            font-size: 2.8em;
            width: 117%;
            font-weight: 500;
            position: relative;
            z-index: 2;
            text-align: left;
            padding: 0;
        }
        h3{
            color: #393939;
            font-size: 1.2em;
            margin: 2em 0;
            font-weight: 500;
            line-height: 1.5em;
        }
        p{
            font-size: 1em;
            color: #686868;
        }
    }
`;
const Footer = styled.footer`
    font-size: .7vw;
    .row{
        padding: 2em;
        align-items: center;
        background: #161616;
    }
    .social{
        font-size: 1.3em;
        margin-left: auto;
        a + a{
            margin-left: .5em;
        }
    }
    img{
        width: 35%;
        margin-right: 2em;
    }
    h3.title{
        font-size: 1.8em;
        font-weight: 500;
        color: #fff;
        line-height: 1.5em;
        .bold{
            font-weight: 900;
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

const PopupThanks = ({data, locale, close}) =>
    <Overlay>
       <Wrapper>
           <Close onClick={() => close(false)}/>
           <div className='row-to-column'>
               <div className='container'>
                   <h2>
                       Спасибо, за Вашу заявку!
                   </h2>
                   <h3>В контакт-центре уже идет борьба за такого замечательного клиента как Вы!</h3>
                   <p>В ближайшее время с Вами свяжется менеджер.</p>
               </div>
               <div className="image">
                   <div className="trapezoid">
                       <p>
                           И ЕЩЕ ОДИН <br/>ПРИЯТНЫЙ БОНУС!
                       </p>
                   </div>
                   <PreviewCompatibleImage
                       imageInfo={{
                           image: data
                       }}
                   />
               </div>
           </div>
            <Footer>
                <div className="row">
                    <img src="/img/popupFooter.png" alt="image"/>
                    <div className="popup-column">
                        <h3 className='title'>
                            Как быстро продать импортируемый товар
                            и <span className="bold">повысить количество клиентов на 76%</span>
                        </h3>
                        <Link to={`blog/${locale === 'ua' ? '' : locale}/2020-02-06-украина-привлекательный-рынок-для-китая`} className='btn'>Читать</Link>
                        <SocialMedia/>
                    </div>
                </div>
            </Footer>
       </Wrapper>
    </Overlay>

export default ({locale, close}) => (
    <StaticQuery
        query={graphql`
            query PopupThanks {
                fileName: file(relativePath: { eq: "popupImage.jpg" }) {
                  childImageSharp {
                    fluid(maxWidth: 600) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
            }
        `}
        render={(data) => <PopupThanks data={data.fileName} locale={locale} close={close}/>}
    />
)
