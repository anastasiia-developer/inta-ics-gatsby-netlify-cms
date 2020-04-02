import React, {Fragment, useEffect, useState} from "react";
import styled from "styled-components";
import {Close} from "../PopupThanks/PopupThanksTemplate";
import PopupThanksRu from "../PopupThanks/index.ru";
import PopupThanks from "../PopupThanks";
import Phone from "../../FormComponents/Phone";
import {encode} from "../../../pages/contacts/form";

const Popup = styled.div`
    position: fixed;
    top: 0;
    right: 0;
    height: 100vh;
    overflow: scroll;
    max-width: 24vw;
    z-index: 3;
    padding: 0 2em;
    transition: all .4s;
    transform: translateX${props => props.isDisplay ? '(0)' : '(100%)'};
    background: linear-gradient(152.61deg,#045DD2 -5.64%,#4900E4 102.01%);
    @media(max-aspect-ratio: 3/3), (max-height: 500px){
        font-size: .8em;
        max-width: 100%;
    }
    header{
        padding: 2em 0;
        justify-content: space-between;
        .logo{
            width: 30%;
            height: 100%;
        }
        button{
            position: relative;    
            top: 0;
            right: 0;
            &:after, &:before{
                right: 0;
                left: 0;
                top: 0;
                height: 1.2em;
            }
        }
    }
    h2{
        color: #fff;
        font-weight: 900;
        width: 90%;
        margin: 2em auto 2em;
        text-align: center;
        font-size: 1.5em;
        line-height: 1.5em;
    }
    h3, h4{
        color: #fff;
        font-weight: 700;
        text-align: center;
        margin: 0 auto 2em;
        font-size: 1em;
    }
    h4{
       margin: 2em auto;
       font-size: .9em;
    }
    .white{
        background: #fff;
        border-radius: .5em;
        padding: 1.5em 2em;
    }
    .social-btn{
        padding: 1em 1.5em;
        color: #575757;
        font-weight: 500;
        font-size: .9em;
        border-radius: .5em;
        &.row{
            align-items: center;
        }
        &.telegram{
            background: #FFF1F2;
            margin-bottom: 1em;
        }
        img{
            width: 1.5em;
            margin-right: 1em;
        }
    }
    .input, .messenger{
        background: #EDF5FF;
    }
    form{
        align-items: center;
        margin-bottom: 5em;
        .input{
            text-align: center;
            color: #000;
            border: none;
        }
        .submit{
            color: #fff;
            border-radius: 1.5em;
            padding: 1em 4em;
            font-weight: 700;
            margin-top: 2em;
            font-size: .9em;
            background: #FF4B55;
        }
    }
`;

const MainPopupTemplate = ({data, className}) => {
    const [phone, setPhone] = useState();
    const [popupOpen, setPopupOpen] = useState(false);
    const [headerPopupOpen, setHeaderPopupOpen] = useState(false);
    const mainPopup = data.mainPopup;

    const handleSubmit = e => {
        e.preventDefault();
        setHeaderPopupOpen(false);

        const form = e.target
        fetch('/', {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: encode({
                'form-name': form.getAttribute('name'),
                ...phone,
            }),
        })
            .then(() => setPopupOpen(true))
            .catch(error => alert(error))
    };

    useEffect( () => {
        if(window.matchMedia("(max-aspect-ratio: 3/3)").matches){
            setTimeout(() => setHeaderPopupOpen(true), 30000)
        }else {
            setTimeout(() => setHeaderPopupOpen(true), 7000)
        }
    }, []);
    useEffect(() => {
        document.documentElement.style.overflowY = popupOpen || headerPopupOpen ? 'hidden' : 'unset';

    }, [popupOpen,headerPopupOpen]);

    return(
        <Fragment>
            {popupOpen &&
                <Fragment> {
                    data.locale === 'ua' ?
                        <PopupThanks close={setPopupOpen}/>
                        :
                        <PopupThanksRu close={setPopupOpen}/>
                    }
                </Fragment>
            }
            <Popup className={`popup ${className || ''}`} isDisplay={headerPopupOpen}>
                <header className="row">
                    <img className='logo' src="/img/logo.png" alt=""/>
                    <Close onClick={ () => setHeaderPopupOpen(false) }/>
                </header>
                <h2>{mainPopup.title}</h2>
                <h3>{mainPopup.description}</h3>
                <div className="white column">
                    <a className="row social-btn telegram" href='https://web.telegram.org'>
                        <img src="/img/telegramPng.png" alt="telegram"/>Telegram
                    </a>
                    <a className="row social-btn messenger" href='https://www.facebook.com/'>
                        <img src="/img/messengerPng.png" alt="messenger"/>Facebook Messenger
                    </a>
                </div>
                <h4>
                    {mainPopup.subTitle}
                </h4>
                <form
                    name="header popup"
                    method="post"
                    data-netlify="true"
                    data-netlify-honeypot="bot-field"
                    onSubmit={(e) => handleSubmit(e)}
                    className="white column">
                    <Phone
                        className="input social-btn"
                        name={'phone'}
                        onChange={(e) => setPhone(e.value)}
                        required={true}
                    />
                    <button
                        className='submit'
                        type="submit">{mainPopup.btn}</button>
                </form>
            </Popup>
        </Fragment>
    )
}

export default MainPopupTemplate