import React, {useState} from 'react'
import styled from "styled-components"
import PreviewCompatibleImage from "../PreviewCompatibleImage";
import { HTMLContent } from '../Content';

const Section = styled.section`
    h2{
        font-weight: 700;
        font-size: 1.6em;
        padding: 3em 0;
    }
    .wrapper{
        align-items: center;
    }
    .categories{
        flex: 1;
        flex-wrap: wrap;
        h3{
            color: #5E98EE;
            font-weight: 500;
            padding-bottom: 1em;
            font-size: .9em;
        }
        .categories__wrapper{
            margin: 0 6em 0 0;
        }
        div:first-child .categories__wrapper{
            margin-bottom: 4em;
        }
        .category{
            width: 6vw;
            margin-right: 1em;
            .image{
                box-shadow: 4px 4px 14px rgba(0, 0, 0, 0.15);
                border-radius: 6px;
                padding: 1em;
                .gatsby-image-wrapper{
                    max-width: 67px;
                    width: 100%;
                }    
            }
            h4{
                color: #59658A;
                font-size: .8em;
                font-weight: 500;
                padding-top: 1.5em;
                text-align: center;
            }
        }
    }
`;

const Form = styled.div`
    flex: 1;
    position: relative;
    &:after{
        content: '';
        display: block;
        width: 100%;
        height: 90%;
        background: #F0F5FD;
        position: absolute;
        top: 50%;
        right: 0;
        z-index: 1;
        transform: translateY(-50%);
    }
    h3{
        color: #fff;
        font-weight: 700;
        text-align: center;
        padding: 2em 0;
        
    }
    .container{
        background: #005BE4;
        border-radius: 7px;
        width: 55%;
        justify-content: center;
        align-items: center;
        position: relative;
        z-index: 2;
        label{
            color: #fff;
            background: #6098EE;
            color: #BAD0F2;
            width: 60%;
            margin: 0 auto 1em;
            position: relative;
            border-radius: 2em;
            border: 1px solid #6098EE; 
            text-align: right;
            padding: .5em 1em;
            input{
                position: absolute;
                left: 0;
                top: 0;
                width: 100%;
                height: 100%;
                font-size: 1em;
                font-weight: 700;
                background: transparent;
                border: none;
                color: #fff;
                padding-left: 1em;
            }
        }
        button{
            background: #FF4B55;
            border-radius: 2em;
            padding: .7em 2em;
            color: #fff;
            border: none;
            font-weight: 700;
            margin-bottom: 3em;       
        }
        p{
            font-size: .8em;
            color: #fff;
        }
        .amount{
            font-size: 3em;
            color: #fff;
            font-weight: 700;
            margin: .5em auto .7em; 
        }
        .note{
            color: #A3C4F5;
            padding: 0 3.5em 3em;
            font-size: .8em;
            text-align: center;   
        }
    }
`;

const Calculator = ({ calculator }) => {
    const { title, constituents } = calculator;
    const [amount, setAmount] = useState(0);

    return(
        <Section>
            <h2 className="wrapper">{ title }</h2>
            <div className="row-to-column wrapper">
                <div className="row categories">
                    {constituents.map((item, index) => (
                        <div key={index}>
                            <h3>{item.title}</h3>
                            <div className="row categories__wrapper">
                                {item.category.map((block,index) => (
                                    <div key={index} className="category">
                                        <div className="image">
                                            <PreviewCompatibleImage
                                                imageInfo={{
                                                    image: block.image,
                                                }}
                                            />
                                        </div>
                                        <h4>
                                            <HTMLContent content={block.nameCategory}/>
                                        </h4>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
                <Form>
                    <div className="container column">
                        <h3>Укажите вес посылки</h3>
                        <label>
                            kg
                            <input type="text"/>
                        </label>
                        <button>Рассчет стоимости</button>
                        <p>Итого стоимость доставки</p>
                        <div className="amount">${amount}</div>
                        <div className="note">*Данный расчет является ориентировочным по тарифу Авиадоставки. Точная стоимость доставки будет зависеть от веса посылки и полного перечня заказанных услуг. Для более детальной информации обратитесь к менеджеру компании.</div>
                    </div>
                </Form>
            </div>
        </Section>
    )
};

export default Calculator