import React from 'react'
import { Link } from 'gatsby'
import Tel from '../img/tel.svg'
import Email from '../img/email.svg'
import Local from '../img/local.svg'
import styles from './style.module.css';

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
              navBarActiveClass: 'is-active',
            })
          : this.setState({
              navBarActiveClass: '',
            })
      }
    )
  }

  render() {
    return (
      <nav
        className="navbar is-transparent"
        role="navigation"
        aria-label="main-navigation"
        style={{background: "#000"}}
      >
        <div className="container">
          <div className="navbar-brand">
            <Link to="/" className="navbar-item" title="Logo">
              <img src="/img/logo.png" alt="inta ics" style={{ width: '150px' }} />
            </Link>
            {/* Hamburger menu */}
            <div
              className={`navbar-burger burger ${this.state.navBarActiveClass}`}
              data-target="navMenu"
              onClick={() => this.toggleHamburger()}
            >
              <span />
              <span />
              <span />
            </div>
          </div>
          <div
            id="navMenu"
            className={`navbar-menu ${this.state.navBarActiveClass}`}
          >
            <div className="navbar-start has-text-centered">
              <Link className="navbar-item"  to="/">
                Главная
              </Link>
              <Link className="navbar-item" to="/">
                Доставка
              </Link>
              <Link className="navbar-item" to="/products">
                Услуги
              </Link>
              <Link className="navbar-item" to="/about">
                О компании
              </Link>
              <Link className="navbar-item" to="/blog">
                Блог
              </Link>
              <Link className="navbar-item" to="/contact/examples">
                Помощь
              </Link>
              <Link className="navbar-item" to="/contact">
                Контакты
              </Link>
              <a href="" className="navbar-item">
                <img src={Tel} className={styles.icon} alt="contacts" />
                +38 (068) 5555 999
              </a>
              <a href="" className="navbar-item">
                <img src={Email} className={styles.icon} alt="contacts" />
                info@inta-ics.com
              </a>
              <a href="" className="navbar-item">
                <img src={Local} className={styles.icon} alt="contacts" />
                Украина, Киев, ул. Линейная 17
              </a>
            </div>
            {/*<div className="navbar-end has-text-centered">*/}
            {/*  <a*/}
            {/*    className="navbar-item"*/}
            {/*    href="https://github.com/netlify-templates/gatsby-starter-netlify-cms"*/}
            {/*    target="_blank"*/}
            {/*    rel="noopener noreferrer"*/}
            {/*  >*/}
            {/*    <span className="icon">*/}
            {/*      <img src={github} alt="Github" />*/}
            {/*    </span>*/}
            {/*  </a>*/}
            {/*</div>*/}
          </div>
        </div>
      </nav>
    )
  }
};

export default Navbar
