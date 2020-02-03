import React from 'react'
import { Link } from 'gatsby'
import Tel from '../../img/tel.svg'
import Email from '../../img/email.svg'
import Local from '../../img/local.svg'
import ArrowLine from '../../img/arrowLine.svg'
import Telegram from '../../../static/img/telegram.svg'
import Call from '../../../static/img/call.svg'
import Navigation from './styled'
import Search from './Search'
import Login from './Login'
import Language from './Language'

const Navbar = class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      active: false,
      navBarActiveClass: '',
    }
  }

  toggleHamburger = () => {
    // toggle the active boolean in the state
    this.setState(
      {
        active: !this.state.active,
      },
      // after state has been updated,
      () => {
        // set the class in state for the navbar accordingly
        this.state.active
          ? this.setState({
              navBarActiveClass: 'navigation_open',
            })
          : this.setState({
              navBarActiveClass: '',
            })
      }
    )
  };

  render() {
    return (
      <Navigation
        role="navigation"
        aria-label="main-navigation"
        className="row"
      >
        {/* Hamburger menu */}
        <div
            onClick={() => this.toggleHamburger()}
            className={`navigation__lines ${this.state.navBarActiveClass}`}>
          <hr/>
          <hr/>
          <hr/>
        </div>
        <div className="navigation__contact common-contact row">
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
        <Link to="/" className="logo" title="Logo">
          <img
              src="/img/logo.png"
              alt="inta ics"
              />
        </Link>
          <div
            className={`row-to-column navigation__list ${this.state.navBarActiveClass}`}
          >
          <Link to="/">
            Главная
          </Link>
          <div className="nav-delivery row-to-column">
            <span>
              Доставка
            </span>
              <nav className="sub-menu column">
                  <Link to="/">
                      Авиадоставка
                      <ArrowLine alt=""/>
                  </Link>
                  <Link to="/">
                      Морские перевозки
                      <ArrowLine alt=""/>
                  </Link>
                  <Link to="/">
                      Ж/Д перевозки
                      <ArrowLine alt=""/>
                  </Link>
                  <Link to="/">
                      Автодоставка
                      <ArrowLine alt=""/>
                  </Link>
              </nav>
          </div>
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
        </div>
        <div className="row container">
            <Link to="/" className="row circle telegram">
                {/*<img src="./img/telegram.svg" alt="telegram icon"/>*/}
            </Link>
            <Link to="/" className="row circle call">
                {/*<img src="./img/call.svg" alt="call img"/>*/}
            </Link>
            <Search />
            <Login />
            <Language />
        </div>
      </Navigation>
    )
  }
};

export default Navbar
