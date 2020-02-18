import React, {useState} from 'react'
import { Link } from 'gatsby'
import Tel from '../../img/tel.svg'
import Email from '../../img/email.svg'
import Local from '../../img/local.svg'
import Navigation from './styled'
import Search from './Search'
import Login from './Login'
import Language from './Language'
import Delivery from './delivery'


const Navbar = () => {
    const [isActiveMob, setActiveMob] = useState(false);

    return (
      <Navigation
        role="navigation"
        aria-label="main-navigation"
        className="row"
        isActive={isActiveMob}
      >
        {/* Hamburger menu */}
        <div
            onClick={() => {setActiveMob(!isActiveMob)}}
            className="navigation__lines">
          <hr/>
          <hr/>
          <hr/>
        </div>
        <div className="navigation__contact row-to-column">
          <a href="">
              <Tel className="icon" alt="contacts" />
              +38 (068) 5555 999
          </a>
          <a href="">
              <Email className="icon" alt="contacts" />
              info@inta-ics.com
          </a>
          <a href="" >
              <Local className="icon" alt="contacts" />
              Украина, Киев, ул. Линейная 17
          </a>
        </div>
        <Link
            to="/"
            className="logo"
            title="Logo">
          <img
              src="/img/logo.png"
              alt="inta ics"
              />
        </Link>
          <div className="row-to-column navigation__list">
              <Delivery
                  setActiveMob={() => setActiveMob()}
                  isActiveMob={isActiveMob}
              />
              <Link
                  onClick={() => setActiveMob(!isActiveMob)}
                  to="/cost-page">
                  Стоимость
              </Link>
              <Link
                  onClick={() => setActiveMob(!isActiveMob)}
                  to="/">
                Услуги
              </Link>
              <Link
                  onClick={() => setActiveMob(!isActiveMob)}
                  to="/about">
                О компании
              </Link>
              <Link
                  onClick={() => setActiveMob(!isActiveMob)}
                  to="/blog">
                Блог
              </Link>
              <Link
                  onClick={() => setActiveMob(!isActiveMob)}
                  to="/contact/examples">
                Помощь
              </Link>
              <Link
                  onClick={() => setActiveMob(!isActiveMob)}
                  to="/contact">
                Контакты
              </Link>
        </div>
        <Search isActive={isActiveMob}/>
        <div className="row container" onClick={() => setActiveMob(!isActiveMob)}>
            <Link to="/" className="row circle telegram">
                <img src="/img/telegram.svg" alt="telegram icon"/>
            </Link>
            <Link to="/" className="row circle call">
                <img src="/img/call.svg" alt="call img"/>
            </Link>
            <Login />
            <Language />
        </div>
      </Navigation>
    )
};

export default Navbar
