import styled from "styled-components";
import Shopping from "../img/shopping.svg";
import React from "react";

const Block = styled.div`
    flex: 1;
    margin: 0 .5em;
    padding: 2em 1em;
    background: #FFFFFF;
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.12);
    border-radius: 7px;
    @media(max-aspect-ratio: 3/3), (max-height: 500px){    
        min-width: 17em;
        margin: 0 0 1em;        
    }
    &:hover{
        background: linear-gradient(119.44deg, #005BE4 -4.2%, #4900E4 108.11%);
        cursor: pointer;
        h4{
            color: #fff;
        }
        svg{
            --color-1: #0B4EA7;
            --color-2: #fff;
        }
    }
    h4{
        color: #4A5566;
        font-weight: 500;
        font-size: .9em;
        margin-top: 1em;
    }
    svg{
        width: 4.5em;
        --color-1: #D9E7F8;
        --color-2: #045DD2;
    }
`;

const HoverGradientInsideSvg = ({title, svg}) => (
    <Block>
        {svg}
        <h4>{title}</h4>
    </Block>
);

export default HoverGradientInsideSvg;