import styled from "styled-components"


const Container = styled.nav`
    margin-bottom: 2em;
    display: flex;
    align-items: center;
    @media(max-aspect-ratio: 3/3), (max-height: 500px){
        flex-wrap: wrap;
        margin: 2em 0 1.5em;
    }
    a, span{
        font-size: 1em;
        color: #5B5B5B;
        cursor: pointer;
        white-space: nowrap;
        @media(max-aspect-ratio: 3/3), (max-height: 500px){
          margin-bottom: .5em;
          white-space: normal;
        }
        &:after{
            content: ' > ';
            padding: 0 .5em;
        }        
    }
    a:last-child{
        color: #0460D9;
        &:after{
            content: none;
        }        
    }
`;

export default Container;