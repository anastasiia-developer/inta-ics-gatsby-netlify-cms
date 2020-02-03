import styled from "styled-components"


const Container = styled.nav`
    margin-bottom: 2em;
    a{
        font-size: .9em;
        color: ${props => props.crumbStyle};
    }
    a:last-child{
        color: ${props => props.crumbActiveStyle};
    }
`;

export default Container;