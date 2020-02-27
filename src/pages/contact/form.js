import React from 'react'
import { navigate } from 'gatsby-link'
import styled from 'styled-components'

function encode(data) {
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

export default class Form extends React.Component {
  constructor(props) {
    super(props)
    this.state = { isValidated: false }
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleSubmit = e => {
    e.preventDefault()
    const form = e.target
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': form.getAttribute('name'),
        ...this.state,
      }),
    })
      .then(() => navigate(form.getAttribute('action')))
      .catch(error => alert(error))
  }

  render() {
    return (
      <From
        name="contact"
        method="post"
        action="/contact/thanks/"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        onSubmit={this.handleSubmit}
        className="row-to-column"
      >
        {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
        <input type="hidden" name="form-name" value="contact" />
        <div hidden>
          <label>
            Don’t fill this out:{' '}
            <input name="bot-field" onChange={this.handleChange} />
          </label>
        </div>
        <input
          className="input"
          type={'text'}
          name={'name'}
          onChange={this.handleChange}
          id={'name'}
          required={true}
          placeholder={'Имя'}
        />
        <input
          className="input"
          type={'text'}
          name={'phone'}
          onChange={this.handleChange}
          id={'phone'}
          required={true}
          placeholder={'Номер телефона'}
        />
        <Button type="submit">
          Заказать звонок
        </Button>
      </From>
    )
  }
}
