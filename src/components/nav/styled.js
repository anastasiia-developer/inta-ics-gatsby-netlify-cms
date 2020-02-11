import styled from "styled-components";

const Navigation = styled.nav`
    position: fixed;
    width: 100%;
    left: 0;
    align-items: center;
    z-index: 3;
    background: #000;
    padding: 3em 5% 1em;
  
    @media(max-aspect-ratio: 3/3), (max-height: 500px){
        padding: 1em;
        background: #000;
        top: 0;
        width: 100%;
        justify-content: space-between;
    } 
    .navigation__lines{ 
        display: none;
        height: 2em;
    @media(max-aspect-ratio: 3/3), (max-height: 500px){
        display: block;
        hr{
            transition: transform .4s;
            background: #fff;
            border: 0;
            height: .2em;
            width: 1.5em;
            margin: 0 0 .5em;
            margin-left: auto;
            pointer-events: auto;
            &:last-child{
              margin: 0 0 0 auto;
            }
        }
        &.navigation_open hr:first-child {
          transform: translate(0%,100%) rotate(-45deg);
          margin: .5em 0 0 auto;
        }
        &.navigation_open hr:nth-child(2){
            transform: rotate(45deg);
            margin: 0 0 0 auto;
        }
        &.navigation_open hr:last-child {
          opacity: 0;
        }
    }
    }
    .navigation__list{
    margin-right: auto;
    font-size: .8em;
    cursor: pointer;
    @media(max-aspect-ratio: 3/3), (max-height: 500px){
      position: fixed;
      background: #000;
      height: 100vh;
      width: 100%;
      top: 3em;
      left: 0;
      font-size: 1.1em;
      align-items: flex-start;
      padding: 1em 0 0 2em;
      transform: translateX(-100%);
      transition: all .4s;
    }
    a, span{
      margin-left: 2em;
      color: #fff;
      &[aria-current]{
        color: #FFE15A;
      }
      @media(max-aspect-ratio: 3/3), (max-height: 500px){
        margin: 0 0 2em 0;
      }
      &:hover{
        color: #005BE4;
      }
      img{
        margin-left: .5em;
        width: .7em;
      }
    }
    }
    &.navigation_open .navigation__list{
        transform: translateX(0);
    }
    .logo{
        margin-right: 2em;
        width: 10%;
        img{
            width: 100%;
        }
        @media(max-aspect-ratio: 3/3), (max-height: 500px){
          width: 40%;
          position: relative;
          z-index: 2;
          margin-right: 0;
        }
    }
    .nav-delivery{
    position: relative;
    @media(max-aspect-ratio: 3/3), (max-height: 500px){
      align-items: flex-start;
    }
    &:hover span{
      color: #005BE4;
    }
    span:after{
      content: '';
      height: 2em;
      width: 100%;
      display: block;
      position: absolute;
    }
    span:hover + .sub-menu, .sub-menu:hover {
      pointer-events: auto;
      opacity: 1;
      @media(max-aspect-ratio: 3/3), (max-height: 500px){
        min-height: 13em;
      }
    }
    }
    .sub-menu{
    opacity: 0;
    position: absolute;
    left: 0;
    top: 2em;
    background: #fff;
    width: 15em;
    padding: 1.5em 1.5em 1em;
    border-radius: 4px;
    font-size: 1.1em;
    border-top: 3px solid #005BE4;
    border-bottom: 1px solid #ccc;
    border-left: 1px solid #ccc;
    border-right: 1px solid #ccc;
    overflow: hidden;
    pointer-events: none;
    @media(max-aspect-ratio: 3/3), (max-height: 500px){
      pointer-events: auto;
      opacity: 1;
      position: static;
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
      max-height: 0;
      transition: all .4s;
    }
    a{
      color: #000;
      font-weight: 500
      margin-bottom: 1em;
      margin-left: 0;
      @media(max-aspect-ratio: 3/3), (max-height: 500px){
        color: #fff;
        margin-bottom: 2em;
      }
      img{
        opacity: 0;
      }
      &:hover{
        color: #005BE4;
        img{
          opacity: 1;
        }
      }
    }
    }
    .navigation__contact{
      align-items: center;
      position: absolute;
      top: 1.25em;
      right: 0;    
    @media(max-aspect-ratio: 3/3), (max-height: 500px){
      position: relative;
      z-index: 2;
      &.active svg:nth-child(2){
        transform: rotate(180deg);
      }
      img{
        width: .6em;
        height: .6em;
        margin-left: .5em;
        position: relative;
        path{
          fill: #fff;
        }
      }
      img:first-child{
        width: 1em;
        height: 1em;
        margin: 0;
      }
    }
    }
    .common-contact{
    @media(max-aspect-ratio: 3/3), (max-height: 500px){
      background: #005BE4;
      position: absolute;
      top: 0;
      left: 0;
      flex-direction: column;
      width: 100%;
      z-index: 0;
      padding: 5em 2em 2em;
      align-items: center;
      font-size: .9em;
      transform: translateY(-100%);
      transition: all .4s;
      &.active{
        transform: translateY(0);
      }
    }
    a{
      @media(max-aspect-ratio: 3/3), (max-height: 500px){
        margin: 0 0 1em 0;
      }
      svg{
        margin-left: 0;
        margin-right: .5em;
      }
      &:hover svg path{
        fill: #005BE4;
      }
    }
    }
    .container{
    align-items: center;
    }
    .circle{
    width: 2em;
    height: 2em;
    align-items: center;
    justify-content: center;
    border-radius: 100%;
    margin-right: 1em;
    img{
        width: 1em;
        height: 1em;
    }
    &.telegram{
        background: #1E96C8;
    }
    &.call{
        background: #FFE15A;
    }
    }
`;

export default Navigation