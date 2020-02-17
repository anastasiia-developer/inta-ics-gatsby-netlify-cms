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
      max-height: ${props => !props.isActiveSub ? '3em' : '13em'};
      min-height: ${props => props.isActiveSub ? '13em' : '0'};
      transition: all .4s;
      overflow: hidden;
    }
    &:has(nav){
        background: red;
        span{
            color: #FFE15A;
        }
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
        left: 0;
        top: 2em;
        background: #fff;
        width: 16em;
        padding: 1.5em 1.5em 1em;
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
            margin-top: 2em;
        }
        &:hover{
            opacity: 1;
        }
        a{
          color: #000;
          margin-bottom: 1em;
          margin-left: 0;
          @media(max-aspect-ratio: 3/3), (max-height: 500px){
            color: #fff;
            margin-bottom: 2em;
          }
          svg{
            opacity: 0;
          }
          &:hover{
            color: #005BE4;
            svg{
              opacity: 1;
            }
          }
        }
`;

const SubMenu = ({parentName, startPath, list, setActiveMob, isActiveMob}) => {
    const [isActiveSub, setActiveSub] = useState(false);

    return(
        <SubNav
            isActiveSub={isActiveSub}
            onClick={() => {setActiveSub(!isActiveSub)}}>
            <span>
              {parentName}
              <Arrow/>
            </span>
            <nav className="drop-down column"
                 onClick={() => setActiveMob(!isActiveMob)}
            >
                {list.map((link, index) => (
                    <Link
                        key={index}
                        to={startPath+link.frontmatter.name}>
                        {link.frontmatter.title}
                        <ArrowLine/>
                    </Link>
                ))}
            </nav>
        </SubNav>
    )
}

export default SubMenu