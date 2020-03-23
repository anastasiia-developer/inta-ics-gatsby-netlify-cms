import React, {Fragment, useState} from 'react'
import styled from 'styled-components'
import Phone from "../../components/FormComponents/Phone";
import PopupThanks from "../../components/Popups/PopupThanks";

export function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}


const Button = styled.button`
    align-items: center;
    background: rgba(255, 255, 255, 0.09);
    border: none;
    font-weight: 700;
    padding: 1em 2.5em;
    border-radius: 5em;
    font-size: .8em;
    color: #fff;
    flex: 1;
    background: linear-gradient(100.69deg, #005BE4 0%, #4900E4 100%);
    @media(max-aspect-ratio: 3/3), (max-height: 500px){
        margin: 0 0 2em 0;
    }
`
const From = styled.form`
  margin-top: 2em;
  input{
    background: #212121;
    border-radius: .5em;
    color: #fff;
    font-weight: 500;
    padding: 1em 1em 1em 2em;
    border: none;
    font-size: .8em;
    margin-right: 1.5em;
    flex: 2;
    @media(max-aspect-ratio: 3/3), (max-height: 500px){
        min-width: 10em;
        margin: 0 0 2em 0;
    }
  }
`;

const Form = ({locale}) => {
  const [inputsValue, setInputsValue] = useState({});
  const [popupOpen, setPopupOpen] = useState(false);

  const handleChange = e => {
    setInputsValue({ [e.target.name]: e.target.value })
  };

  const handleSubmit = e => {
    e.preventDefault();
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
  }

  return (
      <Fragment>
        {popupOpen &&
          <PopupThanks locale={locale} close={setPopupOpen}/>
        }
        <From
          name="contact"
          method="post"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          onSubmit={(e) => handleSubmit(e)}
          className="row-to-column"
        >
          {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
          <input type="hidden" name="form-name" value="contact" />
          <div hidden>
            <label>
              Don’t fill this out:{' '}
              <input name="bot-field" onChange={(e) => handleChange(e)} />
            </label>
          </div>
          <input
            className="input"
            type={'text'}
            name={'name'}
            onChange={(e) => handleChange(e)}
            id={'name'}
            required={true}
            placeholder={'Имя'}
          />
          <Phone
            className="input"
            name={'phone'}
            onChange={(e) => handleChange(e)}
            required={true}
            placeholder={'Номер телефона'}
          />
          <Button type="submit">
            Заказать звонок
          </Button>
        </From>
      </Fragment>
  )
}
export default Form