import React, {useState} from 'react'
import styled from 'styled-components'
import {Link} from 'gatsby'
import ArrowLine from '../../img/arrowLine.svg'
import Arrow from '../../img/arrow.svg'

const SubNav = styled.nav`
    position: relative;
    font-size: 1em;
    @media(max-aspect-ratio: 3/3), (max-height: 500px){
      align-items: flex-start;
      min-height: ${props => props.isActiveSub ? '10em' : '0'};
      transition: all .4s;
      margin-bottom: 2em;
    }
    &:hover span{
      color: #005BE4;
      @media(max-aspect-ratio: 3/3), (max-height: 500px){
          color: #fff;
      }
    }
    &:hover .drop-down{
        pointer-events: auto;
        opacity: 1;
    }
    span{
        &:after{
          content: '';
          height: 2em;
          width: 100%;
          display: block;
          position: absolute;
          @media(max-aspect-ratio: 3/3), (max-height: 500px){
            display: none;
          }
        }
        svg path{
            fill: #595959;
        }
    }
    svg{
        margin-left: .5em;
        width: .7em;
        height: .7em;
    }
    
    .drop-down{
        pointer-events: none;
        opacity: 0;
        position: absolute;
        left: 2em;
        top: 2em;
        background: #fff;
        font-size: 1em;
        min-width: 8em;
        padding: 1.5em 1em 1em;
        border-radius: 4px;
        border-top: 3px solid #005BE4;
        border-bottom: 1px solid #ccc;
        border-left: 1px solid #ccc;
        border-right: 1px solid #ccc;
        overflow: hidden;
        @media(max-aspect-ratio: 3/3), (max-height: 500px){
            position: static;
            opacity: 1;
            left: auto;
            top: auto;
            background: transparent;
            width: auto;
            padding: 0 0 0 2em;
            border-radius: 0;
            font-size: 1.1em;
            border: none;
            font-size: .8em;
            color: #fff;
            pointer-events: auto;
            max-height: ${props => !props.isActiveSub ? '0' : 'auto'};
        }
        &:hover{
            opacity: 1;
        }
        a{
          color: #000;
          margin-bottom: 1em;
          margin-left: 0;
          white-space: nowrap;  
          @media(max-aspect-ratio: 3/3), (max-height: 500px){
            white-space: normal;  
            color: #fff;
            margin: ${props => props.isActiveSub ? '1.5em' : '0'} 0 0 0;
          }
          svg{
            opacity: 0;
            @media(max-aspect-ratio: 3/3), (max-height: 500px){
                display: none;
            }
          }
          &:hover{
            color: #005BE4;
            svg{
              opacity: 1;
            }
          }
        }
`;

const SubMenu = ({parentName, list, setActiveMob, isActiveMob}) => {
    const [isActiveSub, setActiveSub] = useState(false);

    return(
        <SubNav
            isActiveSub={isActiveSub}>
            <span onClick={() => {setActiveSub(!isActiveSub)}}>
              {parentName}
              <Arrow/>
            </span>
            <nav className="drop-down column">
                {list.map((link, index) => (
                    <Link
                        key={index}
                        onClick={() => {setActiveMob(!isActiveMob); setActiveSub(false)}}
                        to={link.fields.slug}>
                        {link.frontmatter.crumbLabel}
                        <ArrowLine/>
                    </Link>
                ))}
            </nav>
        </SubNav>
    )
}

export default SubMenu