import Tel from "../../img/tel.svg";
import Email from "../../img/email.svg";
import Local from "../../img/local.svg";
import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
    align-items: center;
    display: flex;
    svg{
        font-size: .8em;
        margin-right: 1em;
        path{
            fill: #7A7A7A;
            @media(max-aspect-ratio: 3/3), (max-height: 500px){
                fill: #E0E0E0;
            }
        }
    }
    a{
        display: flex;
        align-items: center;
        margin-right: 1em;
        color: #E0E0E0;
        @media(max-aspect-ratio: 3/3), (max-height: 500px){
            font-size: .8em;
            margin-bottom: .5em;
        }
    }
`

const BarContacts = () =>
    <Wrapper className='bar-contacts row-to-column'>
        <a href="">
            <Tel className="icon" alt="contacts" />
            +38 (068) 5555 999
        </a>
        <a href="">
            <Email className="icon" alt="contacts" />
            info@inta-ics.com
        </a>
        <a href="" >
            <Local className="icon" alt="contacts" />
            Украина, Киев, ул. Линейная 17
        </a>
    </Wrapper>

export default BarContacts