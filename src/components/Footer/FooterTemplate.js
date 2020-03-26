import React, {Fragment} from 'react'
import {Link} from 'gatsby'
import styled from "styled-components";
import Storage from '../Storage';
import StorageRu from '../Storage/index.ru';
import Store from '../store';
import SocialMedia from "../SocialMedia";

const FooterS = styled.footer`
  background: #0C0C0C;
  padding-bottom: 1em;
  @media(max-aspect-ratio: 3/3), (max-height: 500px){
    padding: 0 1em 1em;
  }
  .footer-row{
      justify-content: space-between;
      @media(max-aspect-ratio: 3/3), (max-height: 500px){
        flex-wrap: wrap;
        justify-content: flex-start;
      }
  }
  .contacts{
    flex: 3;
    @media(max-aspect-ratio: 3/3), (max-height: 500px){
      order: 1;
      text-align: flex-start;
      width: 30%;
      flex: none;
      margin-right: 1em;
    }
    &-img{
      width: 40%;
      @media(max-aspect-ratio: 3/3), (max-height: 500px){
        margin: 1em auto;
        display: block;
        width: 80%;
      }
    }
    .des{
      color: #6D6D6D;
      font-weight: 500;
      line-height: 1.5em;
      font-size: .8em;
      margin: 1em 0 3em;
      padding-right: 4em;
      @media(max-aspect-ratio: 3/3), (max-height: 500px){
        padding: 0;
        margin: 1em auto 3em;
      }
    }
    .link{
      margin-bottom: 1.5em;
      font-size: .9em;
      font-weight: 400;
      &:last-child{
        margin-bottom: 0;
      }
    }
  }
  .nav{
    flex: 3;
    font-weight: 400;
    justify-content: flex-start;
    align-items: flex-start;
    font-size: .9em;
    @media(max-aspect-ratio: 3/3), (max-height: 500px){
      order: 2;
      text-align: flex-start;
      width: 30%;
      flex: none;
      margin-right: 1em;
    }
    a{
      margin-left: 4em;
      margin-bottom: 1em;
      line-height: 2em;
      &:hover{
        color: #0051CB;
      }
      @media(max-aspect-ratio: 3/3), (max-height: 500px){
        margin-left: 0;
        margin-top: 1.5em;
        margin-bottom: 0;
      }
    }
  }
  .store{
    margin-top: auto;
    @media(max-aspect-ratio: 3/3), (max-height: 500px){
      margin-top: 1em;
    }
    h4{
      margin-left: 4.5em;
      color: #8F8F8F;
      @media(max-aspect-ratio: 3/3), (max-height: 500px){
        margin-left: 0;
        text-align: center;
      }
    }
    .row{
      margin-top: 1em;
      a:last-child{
        margin-left: 1em;
      } 
      @media(max-aspect-ratio: 3/3), (max-height: 500px){
        margin-top: 0;
        img{
            width: 100%;
            height: auto;
        }
      }
    }
  }
  .bottom-bar{
    align-items: center;
    margin-top: 2em;
  }
  .owner{
    color: #8C8C8C;
    margin-left: 1.5em;
  }
  .social{
    a + a{
      margin-left: 1em;
    }
  }
`;


const FooterTemplate = ({data}) =>
    <FooterS>
        <div className="wrapper">
            {data.locale === 'ua' ?
                <Storage />
                :
                <StorageRu />
            }
            <div className="row footer-row">
                <ul className="column contacts">
                    <li>
                        <img src="/img/logo.png" alt="logo" className='contacts-img'/>
                    </li>
                    <li className="des">
                        {data.footer.description}
                    </li>
                    <li className="link">
                        <a href="">+38 (068) 5555 999</a>
                    </li>
                    <li className="link">
                        <a href="">info@inta-ics.com</a>
                    </li>
                    <li className="link">
                        <a href="">Украина, Киев, ул. Линейная 17</a>
                    </li>
                </ul>
                {data.footer.navCollection.map((nav, index) =>
                    <nav
                        key={index}
                        className="nav column">
                        {nav.nav.map((item, indx) =>
                            <Link
                                key={indx}
                                to={item.link}>
                                {item.name}
                            </Link>
                        )}
                        {index === data.footer.navCollection.length - 1 &&
                            <div className="column store">
                                <h4>Мобильное приложение</h4>
                                <Store/>
                            </div>
                        }
                    </nav>
                )}
            </div>
            <div className="row bottom-bar">
                <SocialMedia/>
                <div className="owner">INTA-ICS @ 2020</div>
            </div>
        </div>
    </FooterS>


export default FooterTemplate;