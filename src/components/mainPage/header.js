import styled from "styled-components";
const Header = styled.div`
    position: relative;
    .wrapper{
        width: 85%;
    }
    .slick-track{
        display: flex;
    }
    .slick-arrow{
        border: solid #757575;
        color: transparent;
        top: 50%;
        position: absolute;
        z-index: 2;
        width: 1.5em;
        height: 1.5em;
        border-width: 0 .15em .15em 0;
        cursor: pointer;
        @media(max-aspect-ratio: 3/3), (max-height: 500px){    
            display: none !important;
        }
        &:hover{
            border-color: #005BE4;
        }
        &.slick-next{
            right: 3%;
            transform: rotate(-45deg);
        }
        &.slick-prev{
            left: 3%;
            transform: rotate(135deg);
        }
    }
    .slick-dots{
        display: flex !important;
        align-items: center;
        justify-content: center;
        top: -2em;
        position: relative;
        button{
            background: #222222;
            border: none;
            width: .6em;
            height: .6em;
            color: transparent;
            border-radius: 100%;
        }
        .slick-active button{
            background: #005BE4;
        }
        li + li{
            margin-left: .5em;
        }

    }
    .react-multi-carousel-list{
        .react-multiple-carousel__arrow{
            top: 50vh;
            &:hover.react-multiple-carousel__arrow::before{
                color: #005BE4;
            }
            &--left{
                left: 3em;
                @media(max-aspect-ratio: 3/3), (max-height: 500px){    
                    left: 0;
                }
            }
            &--right{
                right: 3em;
                @media(max-aspect-ratio: 3/3), (max-height: 500px){    
                    right: 0;
                }
            }
        }    
    }
    .react-multi-carousel-dot-list{
        bottom: 3em;
        .react-multi-carousel-dot button{
            border: none;
            margin: 0 .4em;
            width: .7em;
            height: .7em;
            background: #222222;   
        }
        .react-multi-carousel-dot--active button{
            background: #005BE4;
        } 
    } 
    @media(max-aspect-ratio: 3/3), (max-height: 500px){    
        .wrapper{
            width: 85%;
        }
        .store{
            font-size: .8em;
            margin-top: 6em;
        }
        nav{
            justify-content: center;
        }
    }
     .wrapper .bckg-parallax-container{
        width: 40%;
        margin: 0;
        @media(max-aspect-ratio: 3/3), (max-height: 500px){    
            width: 100%;
            max-width: 500px;
        }
        .gatsby-image-wrapper{
            width: 45%;
            @media(max-aspect-ratio: 3/3), (max-height: 500px){    
                width: 70%;
                z-index: 1;
                &:last-child{
                    margin: 20% 0 -20% -30%;
                    z-index: 0;
                }
            }
        }
    }
`;

export default Header;