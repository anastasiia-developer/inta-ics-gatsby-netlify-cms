import React, {Fragment, useState} from "react";
import styled from "styled-components";
import { encode} from "../../pages/contact/form";
import Phone from "../FormComponents/Phone";
import PopupThanks from "../Popups/PopupThanks";
import PopupThanksRu from "../Popups/PopupThanks/index.ru";

const FormCommon = styled.div`
  background: linear-gradient(107deg, #005BE4 -0.2%, #4900E4 100.11%);
  padding-bottom: 4em;
  color: #fff;
  margin-bottom: -1px;
  h2{
    font-weight: 700;
    font-size: 2.7em;
    text-align: center;
    padding: 1em 0 .5em;
    @media(max-aspect-ratio: 3/3), (max-height: 500px){
      font-size: 1.5em;
    }
  }
  h4{
    font-size: 1em;
    text-align: center;
    @media(max-aspect-ratio: 3/3), (max-height: 500px){
      font-size: .5em;
    }
  }
  .calculate-common{
    background: #fff;
    margin: 4em auto 0;
    width: 70%;
    border-radius: .7em;
    padding: 2em 0; 
    justify-content: space-between;
    font-size: .75em;
    align-items: center;
    @media(max-aspect-ratio: 3/3), (max-height: 500px){
      width: 95%;
      padding: 2em 1.5em;
      max-width: 30em;
    }
    .wrapper{
      justify-content: space-between;
    }
    h3{
      text-align: center;
      padding: 0 0 1em;
      font-size: 1.6em;
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
      font-size: 1.15em;
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
      font-size: 1em;
    }
    .calculate-block{
      justify-content: space-between;
      color: #005BE4;
      position: relative;
      img{
        width: 1em;
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

const FormFooter = ({locale}) => {
    const [inputsValue, setInputsValue] = useState({});
    const [isOpenPopup, setPopupOpen] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault()
        const form = e.target
        fetch('/', {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: encode({
                'form-name': form.getAttribute('name'),
                ...inputsValue,
            }),
        })
            .then(() => setPopupOpen(true))
            .catch(error => alert(error))
    };
    const handleChange = (e) => {
        setInputsValue({...inputsValue, [e.target.name]: e.target.value});
    };
    return (
        <FormCommon>
            {isOpenPopup &&
            <Fragment> {
                locale === 'ua' ?
                    <PopupThanks close={setPopupOpen}/>
                    :
                    <PopupThanksRu close={setPopupOpen}/>
            }
            </Fragment>
            }
            <h2>Остались вопросы?</h2>
            <h4>Отправьте заявку и получите до 5% скидку на доставку для новых клиентов!</h4>
            <div className="calculate-common">
                <h3>
                    <span className="blue">Есть вопрос? </span>
                    Наш менеджер ответит вам за
                    <span className="blue"> 15 минут</span>
                </h3>
                <h4> Отправьте заявку и получите до 5% скидку на доставку для новых клиентов!</h4>
                <form
                    name="footerContact"
                    method="post"
                    data-netlify="true"
                    data-netlify-honeypot="bot-field"
                    onSubmit={(e) => handleSubmit(e)}
                    className="row-to-column wrapper">

                    {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
                    <input type="hidden" name="form-name" value="contact" />

                    <div className="column">
                        <h5>Имя</h5>
                        <div className="calculate-block row">
                            <input
                                type="text"
                                className='input-common'
                                name={'name'}
                                onChange={(e) => handleChange(e)}
                                id={'name'}
                                required={true}
                            />
                            <img src="/img/userForm.png" alt="user icon"/>
                        </div>
                    </div>
                    <div className="column">
                        <h5>Телефон</h5>
                        <div className="calculate-block row">
                            <Phone
                                className='input-common'
                                name={'phone'}
                                onChange={(e) => handleChange(e)}
                                required={true}
                            />
                            <img src="/img/telForm.png" alt="phone icon"/>
                        </div>
                    </div>
                    <div className="column">
                        <h5>Комментарий</h5>
                        <div className="calculate-block row">
                            <input
                                type="text"
                                className='input-common'
                                name={'comment'}
                                id={'comment'}
                                required={false}
                                onChange={(e) => handleChange(e)}
                            />
                            <img src="/img/commentForm.png" alt="comment icon"/>
                        </div>
                    </div>
                    <button className="btn-order" type="submit">Отправить</button>
                </form>
            </div>
        </FormCommon>
    )
}
export default FormFooter;