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
        padding: .7em;
        background: #0D0D0D;
        top: 0;
        width: 100%;
        justify-content: space-between;
    } 
    .navigation__lines{ 
        display: none;
        height: 2em;
        @media(max-aspect-ratio: 3/3), (max-height: 500px){
            display: block;
            position: absolute;
            top: .7em;
            hr{
                transition: transform .4s;
                background: #FFE15A;
                border: 0;
                height: .15em;
                width: 1.5em;
                margin: 0 auto .5em 0;
                pointer-events: auto;
                &:last-child{
                    width: 1.25em;
                }
                &:nth-child(2){
                    width: 1em;
                }
            }
        }
    }
    .navigation__list{
        margin-right: auto;
        font-size: .8em;
        cursor: pointer;
        align-items: center;
        @media(max-aspect-ratio: 3/3), (max-height: 500px){
          position: absolute;
          background: #0D0D0D;
          height: 68vh;
          overflow-y: scroll;
          width: 100%;
          top: 6.3em;
          left: 0;
          font-size: 1.1em;
          align-items: flex-start;
          padding: 1em .7em;
          transform: translateX(${props => props.isActive ? '0' : '-100%'});
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
            @media(max-aspect-ratio: 3/3), (max-height: 500px){
              color: #fff;
            }
          }
          img{
            margin-left: .5em;
            width: .7em;
          }
        }
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
          margin: 0 auto;
        }
    }
    .navigation__contact{
        align-items: center;
        position: absolute;
        top: 1em;
        right: 0;  
        @media(max-aspect-ratio: 3/3), (max-height: 500px){
            background: #0D0D0D;
            position: absolute;
            top: 100vh;
            left: 0;
            flex-direction: column;
            width: 100%;
            z-index: 0;
            padding: 1.5em .7em;
            align-items: baseline;
            transition: all .4s;
            border-top: 1px solid #323232;
            transform: translate(${props => props.isActive ? '0' : '-100%'}, -100%);
            transition: all .4s;
        }
        svg{
            font-size: .9em;
            margin-right: .5em;
            @media(max-aspect-ratio: 3/3), (max-height: 500px){
                path{
                    fill: #E0E0E0;
                }
            }
        }
        a{
            display: flex;
            align-items: center;
            margin-right: 1em;
            @media(max-aspect-ratio: 3/3), (max-height: 500px){
                font-size: .8em;
                margin-bottom: .5em;
                color: #E0E0E0;
            }
        }
    }
    
    .container{
        align-items: center;
        @media(max-aspect-ratio: 3/3), (max-height: 500px){
            position: fixed;
            top: 2.9em;
            left: 0;
            width: 100%;
            padding: 1em;
            transition: all .4s;
            transform: translateX(${props => props.isActive ? '0' : '-100%'});
            background: #0D0D0D;
            &:before{
                content: '';
                width: 95%;
                left: 2.5%;
                height: 100%;
                position: fixed;
                border-top: 1px solid #323232;
                border-bottom: 1px solid #323232;
            } 
        }
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
            margin-right: 17em;
            @media(max-aspect-ratio: 3/3), (max-height: 500px){
                margin-right: 1em;
            }
        }
    }
`;

export default Navigation