import styled from "styled-components";
import TemplateHeader from "../TemplateHeader";


const Header = styled.div`
    position: relative;
    .wrapper{
        width: 85%;
    }
    .react-multi-carousel-list{
        .react-multiple-carousel__arrow{
            top: 50vh;
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