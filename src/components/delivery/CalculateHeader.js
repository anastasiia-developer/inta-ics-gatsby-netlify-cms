import React, {Fragment, useState} from "react"
import styled from "@emotion/styled"
import Flags from "../Flags"
import Arrow from "../../img/arrow.svg"
import Tel from "../../img/tel.svg"

const Wrapper = styled.section`
  background: #fff;
  border-radius: 1em;
  padding: 2em;
  margin-top: 2em;
  font-size: .9em;
  width: 95%;
  h3{
    color: #323232;
    font-weight: 700;
    font-size: 1.6em;
    margin: 0;
  }
  h4{
    color: #4286eb;
    margin: 1em 0 4em;
    @media(max-aspect-ratio: 3/3), (max-height: 500px){
      margin: 1em 0;
      font-size: .9em;
      line-height: 1.5em;
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
    width: .7em;
    height: .7em;
    position: absolute;
    right: 1em;
    path{
    fill: #005BE4;
    }
  }
  .column{
    color: #8E8E8E;
    font-size: .7em;
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
      font-size: 1.2em;
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
      width: 1.5em;
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
                        <button className="title row" onClick={() =>setOptions({...stateOptions, open: !stateOptions.open })}>
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

const CalculateHeader = () => {
    const [optionsFrom, setOptionsFrom] = useState({open: false, value: 'Китай', flag: '001-china 3'});
    const [optionsTo, setOptionsTo] = useState({open: false});
    const [optionsWeight, setOptionsWeight] = useState({open: false, value: ''});

    return (
        <Wrapper className='wrapper'>
            <h3>Рассчитать стоимость доставки</h3>
            <h4>Отправьте заявку и получите до 5% скидку на доставку для новых клиентов!</h4>
            <div className="row-to-column">
                <CalculateBlock
                    title="Откуда груз?"
                    options={<Flags
                        stateOptions={optionsFrom}
                        setOptions={setOptionsFrom}
                    />}
                    stateOptions={optionsFrom}
                    setOptions={setOptionsFrom}
                    arrowLine
                />
                <CalculateBlock
                    title="Призначение груза?"
                    option="Украина"
                    flag="ukraine"
                    options={false}
                    stateOptions={optionsTo}
                    setOptions={setOptionsTo}
                    arrowLine
                />
                <CalculateBlock
                    title="Вес груза"
                    option="kg"
                    flag={false}
                    className="cargo-weight"
                    options={
                        <Fragment>
                            <input type="text" />
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
                    title="Телефон"
                    option={false}
                    flag={false}
                    className="tel"
                    options={
                        <Fragment>
                            <input type="text" name='phone' value='+380'/>
                            <Tel/>
                        </Fragment>}
                    arrowLine
                    stateOptions={false}
                    setOptions={false}
                />
                <CalculateBlock
                    title="Комментарий"
                    option={false}
                    flag={false}
                    className="comment"
                    options={
                        <Fragment>
                            <input type="text" name='comment' value=''/>
                            <img src="/img/comment.png" alt="comment"/>
                        </Fragment>}
                    stateOptions={false}
                    setOptions={false}
                />
                <button className="btn btn-order">Рассчет стоимости</button>
            </div>
        </Wrapper>
    )
};

export default CalculateHeader