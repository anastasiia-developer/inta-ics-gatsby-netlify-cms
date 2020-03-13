import CalculateHeader from "./delivery/CalculateHeader";
import React from "react";
import styled from "styled-components";

const CalculateContainer = styled.div`
    background: linear-gradient(98.88deg, #005BE4 4.62%, #4900E4 102.74%);
    padding-bottom: 3em;
`

const CalculateContainerHeader = ({locale}) =>
    <CalculateContainer>
        <CalculateHeader locale={locale}/>
    </CalculateContainer>

export default CalculateContainerHeader;