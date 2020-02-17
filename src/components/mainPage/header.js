import styled from "styled-components";
import TemplateHeader from "../TemplateHeader";


const Header = styled.div`
    position: relative;
    .wrapper{
        width: 85%;
    }
    .react-multiple-carousel__arrow{
        top: 50vh;
        &--left{
            left: 3.5%;
        }
        &--right{
            right: 3.5%;
        }
    }
    @media(max-aspect-ratio: 3/3), (max-height: 500px){    
         padding: 6em 0 0;
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
    .bckg-parallax-container{
        width: 40%;
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