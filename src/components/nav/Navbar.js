import React, {useState, useEffect} from 'react'
import { Link } from 'gatsby'
import Navigation from './styled'
import Search from './Search'
import Login from './Login'
import Language from './Language'
import Delivery from './delivery'
import Telegram from '../../img/social/telegram.svg'
import Call from '../../img/call.svg'
import BarContacts from "./BarContacts"
import Help from "./help"
import Services from './services'

const Navbar = () => {
    const [isActiveMob, setActiveMob] = useState(false);

    const SetActiveMob = () => {
        setActiveMob(!isActiveMob);
    };

    useEffect(() => {
        document.documentElement.style.overflowY = isActiveMob ? 'hidden' : 'unset';

    }, [isActiveMob ]);

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
        <BarContacts
            isActive={isActiveMob}
        />
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
                  setActiveMob={SetActiveMob}
                  isActiveMob={isActiveMob}
              />
              <Services
                  setActiveMob={SetActiveMob}
                  isActiveMob={isActiveMob}
              />
              <Link
                  onClick={() => setActiveMob(!isActiveMob)}
                  to="/about">
                  О компании
              </Link>
              <Link
                  onClick={() => setActiveMob(!isActiveMob)}
                  to="/blog/">
                  Блог
              </Link>
              <Help
                setActiveMob={SetActiveMob}
                isActiveMob={isActiveMob}
              />
              <Link
                  onClick={() => setActiveMob(!isActiveMob)}
                  to="/sales">
                  Акции
              </Link>
              <Link
                  onClick={() => setActiveMob(!isActiveMob)}
                  to="/cost">
                  Стоимость
              </Link>
              <Link
                  onClick={() => setActiveMob(!isActiveMob)}
                  to="/contact">
                  Контакты
              </Link>
        </div>
        <Search isActive={isActiveMob}/>
        <div className="row container" onClick={() => setActiveMob(!isActiveMob)}>
            <Link to="/" className="row circle">
                <Telegram />
            </Link>
            <Link to="/" className="row circle call">
                <Call />
            </Link>
            <Login />
            <Language />
        </div>
      </Navigation>
    )
};

export default Navbar
