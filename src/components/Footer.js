import React, {Fragment} from 'react'
import {Link} from 'gatsby'
import styled from "styled-components";
import Storage from './footer/storage';
import Store from './store';
import Facebook from '../img/social/facebook.svg';
import Instagram from '../img/social/instagram.svg';
import Twitter from '../img/social/twitter.svg';

const FormCommon = styled.div`
  background: linear-gradient(107deg, #005BE4 -0.2%, #4900E4 100.11%);
  padding-bottom: 4em;
  color: #fff;
  h2{
    font-weight: 700;
    font-size: 2.5em;
    text-align: center;
    padding: 1em 0 .5em;
    @media(max-aspect-ratio: 3/3), (max-height: 500px){
      font-size: 1.5em;
    }
  }
  h4{
    font-size: .8em;
    text-align: center;
    @media(max-aspect-ratio: 3/3), (max-height: 500px){
      font-size: .5em;
    }
  }
  .calculate-common{
    background: #fff;
    margin: 4em auto 0;
    width: 85%;
    border-radius: .7em;
    padding: 2em 0; 
    justify-content: space-between;
    font-size: .75em;
    align-items: center;
    @media(max-aspect-ratio: 3/3), (max-height: 500px){
      width: 95%;
      padding: 2em .5em; 
    }
    .wrapper{
      justify-content: space-between;
    }
    h3{
      text-align: center;
      padding: 0 0 1em;
      font-size: 1.1em;
      font-weight: 700;
      color: #000;
    }
    .blue{
      color: #005BE4;
    }
    h4{
      margin-bottom: 4em;
      color: #8F8F8F;
      text-align: center;
    }
    .column{
      width: 23%;
      @media(max-aspect-ratio: 3/3), (max-height: 500px){
        width: 100%;
        margin-bottom: 1em;
      }
    }
    h5{
      margin: 0 0 .5em 0;
      font-weight: 400;
      color: #777777;
    }
    .calculate-block{
      justify-content: space-between;
      color: #005BE4;
      position: relative;
  
      img{
        width: .8em;
        position: absolute;
        right: 1em;
        top: 50%;
        transform: translateY(-50%);
      }
      input{
        background: #F7F7F7;
        font-weight: 500;
        font-size: .9em;
        padding: 1em 2em;
        border-radius: 8px;
        border: 1px solid #ECECEC;
        color: #383838;
        width: 100%;
      }
     
    }
    .btn-order{
      padding: 1em 2em;
      width: 20%;
      margin: 0;
      @media(max-aspect-ratio: 3/3), (max-height: 500px){
        padding: 1em 3em;
        width: auto;
        margin: 0 auto;
      }
    }
  }
`;
const FooterS = styled.footer`
  background: #0C0C0C;
  padding-bottom: 1em;
  @media(max-aspect-ratio: 3/3), (max-height: 500px){
    padding: 0 1em 1em;
  }
  .footer-row{
      justify-content: space-between;
  }
  .contacts{
    flex: 3;
    @media(max-aspect-ratio: 3/3), (max-height: 500px){
      order: 1;
      text-align: center;
    }
    &-img{
      width: 40%;
      @media(max-aspect-ratio: 3/3), (max-height: 500px){
        margin: 1em auto;
        display: block;
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
      align-items: center;
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
        fill: #FFE15A;
        cursor: pointer;
      }
    }
    li + li{
    margin-left: 1em;
    }
  }
`;


const Footer = () => {

  return (
    <Fragment>
      <FormCommon>
        <h2>Остались вопросы?</h2>
        <h4>Отправьте заявку и получите до 5% скидку на доставку для новых клиентов!</h4>
        <div className="calculate-common">
          <h3>
          <span className="blue">Есть вопрос? </span>
            Наш менеджер ответит вам за
          <span className="blue"> 15 минут</span>
          </h3>
          <h4> Отправьте заявку и получите до 5% скидку на доставку для новых клиентов!</h4>
          <div className="row-to-column wrapper">
            <div className="column">
              <h5>Имя</h5>
              <div className="calculate-block row">
                <input type="text" className='input-common'/>
                <img src="/img/userForm.png" alt="user icon"/>
             </div>
            </div>
            <div className="column">
              <h5>Телефон</h5>
              <div className="calculate-block row">
                <input type="text" className='input-common' value='+380'/>
                <img src="/img/telForm.png" alt="phone icon"/>
              </div>
            </div>
            <div className="column">
              <h5>Комментарий</h5>
              <div className="calculate-block row">
                <input type="text" className='input-common'/>
                <img src="/img/commentForm.png" alt="comment icon"/>
              </div>
            </div>
            <button className="btn-order">Отправить</button>
            </div>
        </div>
      </FormCommon>
      <FooterS>
        <div className="wrapper">
          <Storage />
          <div className="row-to-column footer-row">
            <ul className="column contacts">
            <li>
              <img src="/img/logo.png" alt="logo" className='contacts-img'/>
            </li>
              <li className="des">
                Доставка сборных грузов и контейнеров из Китая, Сша в Украину.
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
            <nav className="nav column">
              <Link to="/products">
                Доставка
              </Link>
              <Link to="/products">
                Услуги
              </Link>
              <Link to="/about">
                О компании
              </Link>
              <Link to="/blog">
                Блог
              </Link>
              <Link to="/contact/examples">
                Помощь
              </Link>
              <Link to="/contact">
                Контакты
              </Link>
            </nav>
            <nav className="nav column">
              <Link to="/products">
                Авиадоставка из Китая
              </Link>
              <Link to="/products">
                Дополнительная переупаковка товара
              </Link>
              <Link to="/products">
                Доставка из США
              </Link>
              <Link to="/products">
                Проверка производителя
              </Link>
              <Link to="/products">
                Доставка из Европы
              </Link>
            </nav>
            <nav className="nav column">
              <Link to="/products">
                Выкуп товаров
              </Link>
              <Link to="/products">
                Доставка из Польши
              </Link>
              <Link to="/products">
                Доставка морем из Китая
              </Link>
              <Link to="/products">
                Доставка морем из Китая
              </Link>
              <Link to="/products">
                Доставка Китай-Одесса
              </Link>
            </nav>
            <nav className="nav column">
              <Link to="/products">
                Поиск поставщиков в Китае
              </Link>
              <Link to="/products">
              Таможенное оформление грузов
              </Link>
              <div className="column store">
                <h4>Мобильное приложение</h4>
                <Store/>
              </div>
            </nav>
          </div>
          <div className="row bottom-bar">
            <ul className="social">
              <li>
                <a href="https://www.facebook.com/">
                  <Facebook/>
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/">
                  <Instagram/>
                </a>
              </li>
              <li>
                <a href="https://www.facebook.com/">
                  <Twitter/>
                </a>
              </li>
            </ul>
            <div className="owner">INTA-ICS @ 2020</div>
          </div>
        </div>
      </FooterS>
    </Fragment>
  )
}


export default Footer;