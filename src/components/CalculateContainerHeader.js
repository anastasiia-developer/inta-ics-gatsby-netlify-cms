import React from "react";
import styled from "styled-components";
import CalculateHeader from "../components/CalculateHeader";
import CalculateHeaderRu from "../components/CalculateHeader/index.ru";

const CalculateContainer = styled.div`
    background: linear-gradient(98.88deg, #005BE4 4.62%, #4900E4 102.74%);
    padding-bottom: 3em;
`;

const CalculateContainerHeader = ({locale}) =>
    <CalculateContainer>
        {locale === 'ua' ?
            <CalculateHeader/>
        :
            <CalculateHeaderRu/>
        }
    </CalculateContainer>

export default CalculateContainerHeader;