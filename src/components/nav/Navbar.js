import React, {useState, useEffect, Fragment} from 'react'
import { Link } from 'gatsby'
import Navigation from './styled'
import Search from './Search'
import Login from './Login'
import Language from './Language'
import RuDelivery from './delivery/ru'
import UaDelivery from './delivery/ua'
import RuAbout from './about/index.ru'
import UaAbout from './about/'
import RuCost from './cost/index.ru'
import UaCost from './cost/'
import RuContact from './contact/index.ru'
import UaContact from './contact/'
import Telegram from '../../img/social/telegram.svg'
import Call from '../../img/call.svg'
import BarContacts from "./BarContacts"
import UaHelp from "./help/ua"
import RuHelp from "./help/ru"
import UaServices from './services/ua.js'
import RuServices from './services/ru.js'
import UaPromo from './promo/ua.js'
import RuPromo from './promo/ru.js'

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
            role = "button"
            tabIndex={0}
            onKeyDown={() => {setActiveMob(!isActiveMob)}}
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
            to={lang === 'ua' ? '/' : '/ru/'}
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
                      <UaAbout
                          setActiveMob={SetActiveMob}
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
                      <RuAbout
                          setActiveMob={SetActiveMob}
                      />
                  </Fragment>
              }
              <Link
                  onClick={() => setActiveMob(!isActiveMob)}
                  to={`${lang === 'ua' ? '' : '/ru'}/blog/`}>
                  Блог
              </Link>
              {local === 'ua' ?
                  <Fragment>
                      <UaHelp
                          setActiveMob={SetActiveMob}
                          isActiveMob={isActiveMob}
                      />
                      <UaPromo
                          setActiveMob={SetActiveMob}
                          isActiveMob={isActiveMob}
                      />
                      <UaCost
                          setActiveMob={SetActiveMob}
                      />
                      <UaContact
                          setActiveMob={SetActiveMob}
                      />
                  </Fragment>
                  :
                  <Fragment>
                      <RuHelp
                          setActiveMob={SetActiveMob}
                          isActiveMob={isActiveMob}
                      />
                      <RuPromo
                          setActiveMob={SetActiveMob}
                          isActiveMob={isActiveMob}
                      />
                      <RuCost
                          setActiveMob={SetActiveMob}
                      />
                      <RuContact
                          setActiveMob={SetActiveMob}
                      />
                  </Fragment>
              }
        </div>
        <Search isActive={isActiveMob}/>
        <div className="row container" >
            <a href="/" className="row circle" onClick={() => setActiveMob(!isActiveMob)}>
                <Telegram />
            </a>
            <a href="tel:+380685555999" className="row circle call" onClick={() => setActiveMob(!isActiveMob)}>
                <Call />
            </a>
            <Login onClick={() => setActiveMob(!isActiveMob)}/>
            <Language locale={local} location={location}/>
        </div>
      </Navigation>
    )
};

export default Navbar
