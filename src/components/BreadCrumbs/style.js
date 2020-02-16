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
        font-size: .9em;
        color: ${props => props.crumbStyle};
        cursor: pointer;
        @media(max-aspect-ratio: 3/3), (max-height: 500px){
          margin-bottom: .5em;
        }
        &:after{
            content: '${props => props.crumbSeparator}';
            padding: 0 .5em;
        }        
    }
    a:last-child{
        color: ${props => props.crumbActiveStyle};
        &:after{
            content: none;
        }        
    }
`;

export default Container;