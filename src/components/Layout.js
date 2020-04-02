import React, {useState, useEffect} from 'react'
import { Helmet } from 'react-helmet'
import Footer from '../components/Footer'
import FooterRu from '../components/Footer/index.ru'
import Navbar from './nav/Navbar'
import './all.sass'
import useSiteMetadata from './SiteMetadata'
import { withPrefix } from 'gatsby'
import styled from 'styled-components'
import Svg from '../img/arrowTop.svg'
import MainPopup from "./Popups/MainPopup";
import MainPopupRu from "./Popups/MainPopup/index.ru";
import SvgLoader from "../img/svgLoaderWaves.svg"

const ArrowTop = styled.div`
    position: fixed;
    width: 4em;
    bottom: 1em;
    right: 1em;
    z-index: 2;
    cursor: pointer;
    display: ${props => props.isActive ? 'block' : 'none'}
`;
const Loader = styled.div`
    position: fixed;
    z-index: 4;
    width: 100%;
    height: 100%;
    background-color: #0C0C0C;
    background-image: url(/img/loaderBack.png);
    display: flex;
    align-items: center;
    justify-content: center;
`;


const TemplateWrapper = ({ children, local, location }) => {
    const { title, description } = useSiteMetadata();
    const [isVisible, setVisible] = useState(false);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        document.addEventListener("scroll", function(e) {
            setVisible(window.pageYOffset > 300);
        });
    });

    useEffect(() => {
        setIsLoaded(true)
    }, []);


  return (
    <div>
      <Helmet>
        <html lang={local} />
        <title>{title}</title>
        <meta name="description" content={description} />
        <link
          rel="icon"
          href={`${withPrefix('/')}img/logo.ico`}
        />
        <meta name="theme-color" content="#fff" />
        <meta property="og:type" content="business.business" />
        <meta property="og:title" content={title} />
        <meta property="og:url" content="/" />
        <meta
          property="og:image"
          content={`${withPrefix('/')}img/bkgr-air.jpg`}
        />
      </Helmet>
        {!isLoaded &&
            <Loader>
                <SvgLoader/>
            </Loader>
        }
        {location &&
            <Navbar
                local={local}
                location={location}/>
        }
        {local === 'ua' ?
            <MainPopup />
            :
            <MainPopupRu />
        }

      <ArrowTop
          onClick={()=>{
              window.scrollTo({
                top: 0,
                behavior: "smooth"
                })}
          }
          isActive={isVisible}
      >
          <Svg/>
      </ArrowTop>
      <div>{children}</div>
        {local === 'ua' ?
            <Footer/>
            :
            <FooterRu/>
        }
    </div>
  )
}

export default TemplateWrapper
