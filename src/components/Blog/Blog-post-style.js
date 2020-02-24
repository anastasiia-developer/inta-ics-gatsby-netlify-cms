import styled from "styled-components";

const Section = styled.section`
    padding-top: 8em;
    @media(max-aspect-ratio: 3/3), (max-height: 500px){
        padding-top: 3em;
    }
    .main-image{
        border-radius: .5em;
        height: 20em;
        width: auto;
        @media(max-aspect-ratio: 3/3), (max-height: 500px){
            height: auto;
            width: 100%;
        }
    }
    h1{
        text-align: center;
        margin: 2em 0 1em;
        font-weight: 600;
    }
    h4{
        color: #A0A0A0;
        margin: 4em auto 2em;
        width: 90%;
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
    .content {
        @media(max-aspect-ratio: 3/3), (max-height: 500px){
            padding: 0 1em;
        }
        img{
            width: auto;
        } 
    }    
    .pagination{
        margin: 2em auto;
        justify-content: space-between;
        font-size: .9em;
        a{
            font-weight: 500;
            color: #005BE4;
            display: flex;
            align-items: center;
            &:hover{
                text-decoration: underline;
            }
        }   
        svg{
            width: 1em;
        }
        .next svg{
            margin-left: .5em;
        }
        .prev svg{
            position: relative;
            transform: rotate(180deg);
            margin-right: .5em;
        } 
    }
    .blog-roll{
        margin: 0 auto 3em;
    }
`;

export default Section