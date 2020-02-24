import styled from "styled-components";

const Section = styled.section`
    padding-top: 8em;
    .main-image{
        border-radius: 1em;
        height: 20em;
        width: auto;
    }
    h1{
        text-align: center;
        margin: 2em 0 1em;
        font-weight: 600;
    }
    .tags{
        justify-content: center;
        margin: 1.5em 0; 
    }
    p{
        margin: 1em 0;
        color: #454545;
        line-height: 1.7em;
    }
    .content img{
        width: auto;
    } 
`;

export default Section