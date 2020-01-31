import React from 'react'
import styled from 'styled-components';
import arrow from "../../img/arrow.svg";

const Container = styled.div`
    color: #005BE4;
    margin-left: 1em;
    align-items: center;
    font-size: .9em;
    img{
        width: .5em;
        margin-left: .25em;
        height: .5em;
    }
`;
const Language = () => (
    <Container className="row">
        RU
        <img src={arrow} alt="arrow Line"/>
    </Container>
);

export default Language