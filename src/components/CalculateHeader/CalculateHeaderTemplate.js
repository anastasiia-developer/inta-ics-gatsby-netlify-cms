import React, {Fragment, useState} from "react"
import styled from "styled-components"
import Flags from "../Flags/"
import FlagsRu from "../Flags/index.ru"
import Arrow from "../../img/arrow.svg"
import Tel from "../../img/tel.svg"
import Email from "../../img/email.svg"
import {encode} from "../../pages/contact/form"
import Phone from '../FormComponents/Phone'
import PopupThanks from "../Popups/PopupThanks";
import PopupThanksRu from "../Popups/PopupThanks/index.ru";

const Wrapper = styled.section`
  background: #fff;
  border-radius: 1em;
  padding: 2em;
  font-size: .9em;
  width: 95%;
  margin-top: -5em;
  position: relative;
  @media(max-aspect-ratio: 3/3), (max-height: 500px){
      margin-top: 0;
      width: 100%;
      padding: 2em 1em;
    .row-to-column{
        align-items: stretch;
    }
  }
  h3{
    color: #323232;
    font-weight: 700;
    font-size: 1.6em;
    margin: 0;
    @media(max-aspect-ratio: 3/3), (max-height: 500px){
        line-height: 1em;
        font-size: 1.4em;
    }
  }
  h4{
    color: #4286eb;
    margin: 1em 0 4em;
    font-size: 1.3em;
    @media(max-aspect-ratio: 3/3), (max-height: 500px){
      margin: 1em 0;
      font-size: .9em;
      line-height: 1.5em;
      text-align: center;
    }
  }
  .btn{
    align-self: flex-end;
    @media(max-aspect-ratio: 3/3), (max-height: 500px){
      align-self: center;
      margin: 2em auto 0;
    }
  }
  svg{
    position: absolute;
    right: .5em;
    path{
        fill: #005BE4;
    }
  }
  .column{
    color: #8E8E8E;
    font-size: 1em;
    position: relative;
    font-weight: 500;
    outline: none;
    flex: 4;
    & + .column{
      margin-left: 4em;
      @media(max-aspect-ratio: 3/3), (max-height: 500px){
        margin-left: 0;
        margin-top: 2em;
      }
    }
   
    img, .flag {
      width: 1.7em;
      height: 1.7em;
      margin-right: 1em;
    }
    input{
      background: transparent;
      border: none;
      font-size: 1.2em;
      font-weight: 500;
      width: 100%;
    }
    .calculate-block{
      background: #F6F6F6;
      border: 1px solid rgba(0, 0, 0, 0.04);
      border-radius: .7em;
      margin-top: 1em;
      padding: .5em .5em .5em 1em;
      color: #383838;
      font-size: .8em;
      align-items: center;
      position: relative;
      height: 100%;
      &.error{
        border: 1px solid red;
      }
      button{
        background: transparent;
        font-weight: 500;
        border: none;
        outline: none;
        font-size: 1.2em;
        width: 100%;
        color: #383838;
        align-items: center;
        @media(max-aspect-ratio: 3/3), (max-height: 500px){
          padding: 0;
        }
      }
      svg{
        top: 40%;
        width: 1em;
      }
      .arrow-line{
        position: absolute;
        right: -2.5em;
        top: 1em;
        width: 1.2em;
        height: auto;
        margin-right: 0;
        @media(max-aspect-ratio: 3/3), (max-height: 500px){
          display: none;
        }
      }
      &.open .flags{
        display: flex;
      }
    }
    .flags{
      display: none;
      flex-direction: column;
      position: absolute;
      z-index: 1000;
      font-size: 1.2em;
      background: white;
      color: #383838;
      width: 100%;
      top: 2.7em;
      left: 0;
      border: 1px solid #ccc;
      border-top: none;
      .row{
        align-items: center;
        padding: .5em;
        padding-left: 1.1em;
        cursor: pointer;
        &:hover{
          background: rgba(2, 82, 223, 0.5);
        }
      }
    }
  }
  .cargo-weight{
    flex: 3;
    input{
      width: 90%;
      border-right: 1px solid #ccc;
    }
    .calculate-block {
        display: flex;
        flex-direction: row-reverse;
      .title{
          width: 40%;
          text-align: left;
          padding-left: .5em;
          color: #005BE4;
          @media(max-aspect-ratio: 3/3), (max-height: 500px){
            width: 20%;
          }
        }
      .flags{
        width: 30%;
        margin-left: 70%;
        color: #005BE4;
      }
    }
  }
  .comment, .tel{
      .calculate-block{
        display: flex;
      }    

    svg, img{
      width: 1.2em;
      height: auto;
      position: static;
      top: auto;
      right: auto;
      margin: 0 .5em 0 0;
      padding: 0;
    }
  }
`;

const CalculateBlock = ({
                        title,
                        option,
                        flag,
                        options,
                        className,
                        name,
                        arrowLine,
                        stateOptions,
                        setOptions}) => {

    const optionState = stateOptions.value || option;

    return(
        <div className={`column ${className || ''}`}>
            {title}
            <div className={`calculate-block ${stateOptions.open ? 'open' : ''}`}>
                {arrowLine &&
                    <img src="/img/arrowLine.png" className="arrow-line" alt="arrow"/>
                }
                {optionState &&
                    <Fragment>
                        <Arrow/>
                        <button
                            className="title row"
                            name={name}
                            onClick={() =>setOptions({...stateOptions, open: !stateOptions.open })}>
                            {(flag || stateOptions.flag) &&
                                <img src={`/img/${stateOptions.flag || flag}.png`} alt={optionState} className="flag"/>
                            }
                            {optionState}
                        </button>
                    </Fragment>
                }
                {options}
            </div>
        </div>
)}

const CalculateHeaderTemplate = ({data}) => {
    const [optionsFrom, setOptionsFrom] = useState({open: false, value: 'Китай', flag: '001-china 3'});
    const [optionsTo, setOptionsTo] = useState({open: false});
    const [optionsWeight, setOptionsWeight] = useState({open: false, value: ''});
    const [inputsValue, setInputsValue] = useState({
        weight: ''
    });
    const [popupOpen, setPopupOpen] = useState(false);
    const text = data.calculateHeader;

    const handleSubmit = (e) => {
        e.preventDefault()

        const from = optionsFrom.value;
        const form = e.target;

        fetch('/', {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: encode({
                'form-name': form.getAttribute('name'),
                ...inputsValue,
                optionsTo,
                from
            }),
        })
            .then(() => setPopupOpen(true))
            .catch(error => alert(error))
    };
    const handleChange = (e) => {
        if(e.target.name === 'weight'){
            setInputsValue({...inputsValue, [e.target.name]: e.target.value.replace(/[^+\d.,]/g, '')});
        }else{
            setInputsValue({...inputsValue, [e.target.name]: e.target.value});
        }
    };

    return (
        <Fragment>
            {popupOpen &&
                <Fragment>
                    {data.locale === 'ua' ?
                        <PopupThanks close={setPopupOpen}/>
                        :
                        <PopupThanksRu close={setPopupOpen}/>
                    }
                </Fragment>
            }
        <Wrapper className='wrapper'>
            <h3>{text.title}</h3>
            <h4>{text.description}</h4>
            <form
                name="footerContact"
                method="post"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
                onSubmit={(e) => handleSubmit(e)}
                className="row-to-column">
                <CalculateBlock
                    title={text.from}
                    options={
                        data.locale === 'ua' ?
                            <Flags
                                stateOptions={optionsFrom}
                                setOptions={setOptionsFrom}
                            />
                                :
                            <FlagsRu
                                stateOptions={optionsFrom}
                                setOptions={setOptionsFrom}
                            />

                        }
                    stateOptions={optionsFrom}
                    setOptions={setOptionsFrom}
                    name={'from'}
                    onClick={(e) => handleChange(e)}
                    arrowLine
                />
                <CalculateBlock
                    title={text.to}
                    option={text.toCountry}
                    flag="ukraine"
                    options={false}
                    name={'to'}
                    stateOptions={optionsTo}
                    setOptions={setOptionsTo}
                    arrowLine
                />
                <CalculateBlock
                    title={text.weight}
                    option="kg"
                    flag={false}
                    className="cargo-weight"
                    options={
                        <Fragment>
                            <input
                                type="text"
                                name={'weight'}
                                value={inputsValue.weight}
                                required={true}
                                onChange={(e) => handleChange(e)}
                            />
                        <ul className="flags">
                            <li data-value='kg'>kg</li>
                            <li data-value='g'>g</li>
                            <li data-value='t'>t</li>
                        </ul>
                        </Fragment>}
                    stateOptions={optionsWeight}
                    setOptions={setOptionsWeight}
                    arrowLine
                />
                <CalculateBlock
                    title={text.phone}
                    option={false}
                    flag={false}
                    className="tel"
                    options={
                        <Fragment>
                            <Phone
                                name={"phone"}
                                required={true}
                                onChange={(e) => handleChange(e)}
                            />
                            <Tel/>
                        </Fragment>}
                    arrowLine
                    stateOptions={false}
                    setOptions={false}
                />
                <CalculateBlock
                    title={text.email}
                    option={false}
                    flag={false}
                    className="tel"
                    options={
                        <Fragment>
                            <input
                                type="email"
                                name={"email"}
                                required={true}
                                onChange={(e) => handleChange(e)}
                            />
                            <Email/>
                        </Fragment>}
                    arrowLine
                    stateOptions={false}
                    setOptions={false}
                />
                <CalculateBlock
                    title={text.comment}
                    option={false}
                    flag={false}
                    className="comment"
                    options={
                        <Fragment>
                            <input
                                type="text"
                                name={'comment'}
                                required={false}
                                onChange={(e) => handleChange(e)}
                            />
                            <img src="/img/comment.png" alt="comment"/>
                        </Fragment>}
                    stateOptions={false}
                    setOptions={false}
                />
                <button className="btn btn-order" type="submit">{data.btn}</button>
            </form>
        </Wrapper>
        </Fragment>
    )
};

export default CalculateHeaderTemplate