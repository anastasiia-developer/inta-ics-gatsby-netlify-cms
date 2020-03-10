import React, {useState, useEffect, Fragment} from 'react'
import { Link } from 'gatsby'
import Navigation from './styled'
import Search from './Search'
import Login from './Login'
import Language from './Language'
import RuDelivery from './delivery/ru'
import UaDelivery from './delivery/ua'
import Telegram from '../../img/social/telegram.svg'
import Call from '../../img/call.svg'
import BarContacts from "./BarContacts"
import UaHelp from "./help/ua"
import RuHelp from "./help/ru"
import UaServices from './services/ua.js'
import RuServices from './services/ru.js'

const Navbar = ({local, location}) => {
    const [isActiveMob, setActiveMob] = useState(false);

    const SetActiveMob = () => {
        setActiveMob(!isActiveMob);
    };

    useEffect(() => {
        document.documentElement.style.overflowY = isActiveMob ? 'hidden' : 'unset';

    }, [isActiveMob ]);
    const lang = local === 'ua' ? '' : local;

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
            to={`/${lang}`}
            className="logo"
            title="Logo">
          <img
              src="/img/logo.png"
              alt="inta ics"
              />
        </Link>
          <div className="row-to-column navigation__list">
              {local === 'ua'?
                  <Fragment>
                      <UaDelivery
                          setActiveMob={SetActiveMob}
                          isActiveMob={isActiveMob}
                      />
                      <UaServices
                          setActiveMob={SetActiveMob}
                          isActiveMob={isActiveMob}
                      />
                  </Fragment>
                  :
                  <Fragment>
                      <RuDelivery
                          setActiveMob={SetActiveMob}
                          isActiveMob={isActiveMob}
                      />
                      <RuServices
                          setActiveMob={SetActiveMob}
                          isActiveMob={isActiveMob}
                      />
                  </Fragment>
              }
              <Link
                  onClick={() => setActiveMob(!isActiveMob)}
                  to={`${lang}/about`}>
                  О компании
              </Link>
              <Link
                  onClick={() => setActiveMob(!isActiveMob)}
                  to={`/blog/${lang}`}>
                  Блог
              </Link>
              {local === 'ua' ?
                  <UaHelp
                      setActiveMob={SetActiveMob}
                      isActiveMob={isActiveMob}
                  /> :
                  <RuHelp
                      setActiveMob={SetActiveMob}
                      isActiveMob={isActiveMob}
                  />
              }
              {/*<Link*/}
              {/*    onClick={() => setActiveMob(!isActiveMob)}*/}
              {/*    to="/promos/">*/}
              {/*    Акции*/}
              {/*</Link>*/}
              <Link
                  onClick={() => setActiveMob(!isActiveMob)}
                  to={`${lang}/cost`}>
                  Стоимость
              </Link>
              <Link
                  onClick={() => setActiveMob(!isActiveMob)}
                  to={`${lang}/contact`}>
                  Контакты
              </Link>
        </div>
        <Search isActive={isActiveMob}/>
        <div className="row container" >
            <Link to="/" className="row circle" onClick={() => setActiveMob(!isActiveMob)}>
                <Telegram />
            </Link>
            <Link to="/" className="row circle call" onClick={() => setActiveMob(!isActiveMob)}>
                <Call />
            </Link>
            <Login onClick={() => setActiveMob(!isActiveMob)}/>
            <Language local={local} location={location}/>
        </div>
      </Navigation>
    )
};

export default Navbar
