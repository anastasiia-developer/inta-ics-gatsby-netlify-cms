import styled from "styled-components";
import TemplateHeader from "../TemplateHeader";

const Header = styled(TemplateHeader)`
    .gatsby-image-wrapper{
        width: 100%;
    }
    .bckg-parallax-container{
        width: 55%;
        margin-right: -10%;
        margin-top: -1.6em;
         @media(max-aspect-ratio: 3/3), (max-height: 500px){
            width: 100%;
            margin: 0;
         }
    }

`;

export default Header
