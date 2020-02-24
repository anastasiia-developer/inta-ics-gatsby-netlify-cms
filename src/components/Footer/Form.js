import React from "react";
import styled from "styled-components";

const FormCommon = styled.div`
  background: linear-gradient(107deg, #005BE4 -0.2%, #4900E4 100.11%);
  padding-bottom: 4em;
  color: #fff;
  h2{
    font-weight: 700;
    font-size: 2.5em;
    text-align: center;
    padding: 1em 0 .5em;
    @media(max-aspect-ratio: 3/3), (max-height: 500px){
      font-size: 1.5em;
    }
  }
  h4{
    font-size: .8em;
    text-align: center;
    @media(max-aspect-ratio: 3/3), (max-height: 500px){
      font-size: .5em;
    }
  }
  .calculate-common{
    background: #fff;
    margin: 4em auto 0;
    width: 85%;
    border-radius: .7em;
    padding: 2em 0; 
    justify-content: space-between;
    font-size: .75em;
    align-items: center;
    @media(max-aspect-ratio: 3/3), (max-height: 500px){
      width: 95%;
      padding: 2em .5em; 
    }
    .wrapper{
      justify-content: space-between;
    }
    h3{
      text-align: center;
      padding: 0 0 1em;
      font-size: 1.1em;
      font-weight: 700;
      color: #000;
    }
    .blue{
      color: #005BE4;
    }
    h4{
      margin-bottom: 4em;
      color: #8F8F8F;
      text-align: center;
    }
    .column{
      width: 23%;
      @media(max-aspect-ratio: 3/3), (max-height: 500px){
        width: 100%;
        margin-bottom: 1em;
      }
    }
    h5{
      margin: 0 0 .5em 0;
      font-weight: 400;
      color: #777777;
    }
    .calculate-block{
      justify-content: space-between;
      color: #005BE4;
      position: relative;
  
      img{
        width: .8em;
        position: absolute;
        right: 1em;
        top: 50%;
        transform: translateY(-50%);
      }
      input{
        background: #F7F7F7;
        font-weight: 500;
        font-size: .9em;
        padding: 1em 2em;
        border-radius: 8px;
        border: 1px solid #ECECEC;
        color: #383838;
        width: 100%;
      }
     
    }
    .btn-order{
      padding: 1em 2em;
      width: 20%;
      margin: 0;
      @media(max-aspect-ratio: 3/3), (max-height: 500px){
        padding: 1em 3em;
        width: auto;
        margin: 0 auto;
      }
    }
  }
`;

const Form = () =>
    <FormCommon>
        <h2>Остались вопросы?</h2>
        <h4>Отправьте заявку и получите до 5% скидку на доставку для новых клиентов!</h4>
        <div className="calculate-common">
            <h3>
                <span className="blue">Есть вопрос? </span>
                Наш менеджер ответит вам за
                <span className="blue"> 15 минут</span>
            </h3>
            <h4> Отправьте заявку и получите до 5% скидку на доставку для новых клиентов!</h4>
            <div className="row-to-column wrapper">
                <div className="column">
                    <h5>Имя</h5>
                    <div className="calculate-block row">
                        <input type="text" className='input-common'/>
                        <img src="/img/userForm.png" alt="user icon"/>
                    </div>
                </div>
                <div className="column">
                    <h5>Телефон</h5>
                    <div className="calculate-block row">
                        <input type="text" className='input-common' value='+380'/>
                        <img src="/img/telForm.png" alt="phone icon"/>
                    </div>
                </div>
                <div className="column">
                    <h5>Комментарий</h5>
                    <div className="calculate-block row">
                        <input type="text" className='input-common'/>
                        <img src="/img/commentForm.png" alt="comment icon"/>
                    </div>
                </div>
                <button className="btn-order">Отправить</button>
            </div>
        </div>
    </FormCommon>

export default Form;