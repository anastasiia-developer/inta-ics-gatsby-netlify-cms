import styled from "styled-components"


const Container = styled.nav`
    margin-bottom: 2em;
    display: flex;
    align-items: center;
    a, span{
        font-size: .9em;
        color: ${props => props.crumbStyle};
        cursor: pointer;
        &:after{
            content: '${props => props.crumbSeparator}';
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