import React, {useState, useEffect} from 'react'
import { Helmet } from 'react-helmet'
import Footer from '../components/Footer'
import Navbar from './nav/Navbar'
import './all.sass'
import useSiteMetadata from './SiteMetadata'
import { withPrefix } from 'gatsby'
import styled from 'styled-components'
import Svg from '../img/arrowTop.svg'

const ArrowTop = styled.div`
    position: fixed;
    width: 4em;
    bottom: 1em;
    right: 1em;
    z-index: 2;
    cursor: pointer;
    display: ${props => props.isActive ? 'block' : 'none'}
`;

const TemplateWrapper = ({ children }) => {
    const { title, description } = useSiteMetadata();
    const [isVisible, setVisible] = useState(false);

    useEffect(() => {
        document.addEventListener("scroll", function(e) {
            setVisible(window.pageYOffset > 300)
        });
    });

  return (
    <div>
      <Helmet>
        <html lang="ru" />
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
      <Navbar/>
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
      <Footer />
    </div>
  )
}

export default TemplateWrapper
