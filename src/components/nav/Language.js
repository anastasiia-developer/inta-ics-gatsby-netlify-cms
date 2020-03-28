import React, {useState} from 'react'
import styled from 'styled-components';
import Arrow from "../../img/arrow.svg";
import locales from '../../data/locales';
import { Link } from 'gatsby'

const Container = styled.div`
    color: #005BE4;
    align-items: center;
    position: relative;
    margin-left: .5em;
    svg{
        width: .5em;
        margin-left: .25em;
        height: .5em;
    }
    button{
        text-transform: uppercase;
        font-size: 1em;
        color: #005BE4;
    }
`;

const Options = styled.div`
    position: absolute;
    background: #0C0C0C;
    display: ${props => props.isActive ? 'flex' : 'none'};
    flex-direction: column;
    font-size: .9em;
    padding: 1em 1.5em;
    text-transform: uppercase;
    bottom: 0;
    transform: translateY(110%);
    right: 0;
    a{
        padding-bottom: .5em;
        &:hover{
            font-weight: 600;
        }
    }
`;

const Language = ({locale, location}) => {
    const [isActive, setActive] = useState(false);
    const ua = location.pathname.replace("ru/", "");
    const ru = location.pathname.includes("ru") ? location.pathname : `/ru${location.pathname}`;

    return(
    <Container className="row">
        <button className='btn' onClick={() => setActive(!isActive)}>
            {locale} <Arrow/>
        </button>
        <Options isActive={isActive}>
            {Object.keys(locales).map((leng, index) =>
                <Link to={leng === "ua" ? ua : ru}
                      key={index}
                      onClick={() => setActive(false)}>
                    {leng}
                </Link>
            )}
        </Options>
    </Container>
)};

export default Language