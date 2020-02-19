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
        height: 8vh;
        align-items: flex-start;
        padding: 0 5%;
        background: #0D0D0D;
        top: 0;
        width: 100%;
        justify-content: space-between;
        &:before{
            content: '';
            height: 100vh;
            width: 100%;
            top: 0;
            left: 0;
            position: fixed;
            background: #0D0D0D;
            transform: translateX(${props => props.isActive ? '0' : '-100%'});
            transition: all .4s;
        }
    } 
    .navigation__lines{ 
        display: none;
        height: 2em;
        @media(max-aspect-ratio: 3/3), (max-height: 500px){
            display: block;
            position: absolute;
            top: 2vh;
            left: 5vw;
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
                    margin-bottom: none;
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
          height: 61vh;
          overflow-y: scroll;
          width: 100%;
          top: 18vh;
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
            font-weight: 700;
            text-decoration: underline;
          }
          @media(max-aspect-ratio: 3/3), (max-height: 500px){
            margin: 0 0 2em 0;
            &:last-child{
                margin-bottom: 0;
            }
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
            height: 3vh;
            width: auto;
            position: relative;
            z-index: 2;
            margin: 2vh auto 0;
            img{
                height: 100%;
                width: auto;
            }
        }
    }
    .navigation__contact{
        align-items: center;
        position: absolute;
        top: 1em;
        right: 0;  
        @media(max-aspect-ratio: 3/3), (max-height: 500px){
            position: absolute;
            top: 79vh;
            left: 0;
            flex-direction: column;
            width: 100%;
            z-index: 0;
            padding: 1.5em .7em;
            align-items: baseline;
            border-top: 1px solid #323232;
            transform: translateX(${props => props.isActive ? '0' : '-100%'});
            transition: all .4s;
        }
        svg{
            font-size: .9em;
            margin-right: .5em;
            path{
                fill: #7A7A7A;
                @media(max-aspect-ratio: 3/3), (max-height: 500px){
                    fill: #E0E0E0;
                }
            }
        }
        a{
            display: flex;
            align-items: center;
            margin-right: 1em;
            color: #E0E0E0;
            @media(max-aspect-ratio: 3/3), (max-height: 500px){
                font-size: .8em;
                margin-bottom: .5em;
            }
        }
    }
    
    .container{
        align-items: center;
        @media(max-aspect-ratio: 3/3), (max-height: 500px){
            position: fixed;
            height: 10vh;
            top: 8vh;
            left: 5%;
            width: 90%;
            transition: all .4s;
            border-top: 1px solid #323232;
            border-bottom: 1px solid #323232;
            transform: translateX(${props => props.isActive ? '0' : '-105%'});
        }
    }
    .circle{
        width: 2em;
        height: 2em;
        align-items: center;
        justify-content: center;
        border-radius: 100%;
        margin-right: 1em;
        background: #005BE4;
        svg{
            width: 1em;
            height: 1em;
            path{
                fill: #fff;
            }
        }
        &.call{
            margin-right: 17em;
            @media(max-aspect-ratio: 3/3), (max-height: 500px){
                margin-right: 1em;
            }
        }
    }
`;

export default Navigation