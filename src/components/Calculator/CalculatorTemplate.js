import React,{useState}  from "react";
import styled from "styled-components";
import PreviewCompatibleImage from "../PreviewCompatibleImage";
import {HTMLContent} from "../Content";

const Section = styled.section`
    margin-bottom: 6em;
    @media(max-aspect-ratio: 3/3), (max-height: 500px){    
        padding: 0 1em;
    }
    h2{
        font-weight: 700;
        font-size: 1.6em;
        padding: 3em 0;
        @media(max-aspect-ratio: 3/3), (max-height: 500px){    
            padding: 1em 0;
        }
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
            @media(max-aspect-ratio: 3/3), (max-height: 500px){    
                margin: 0;
                margin-bottom: 2em;
            }   
        }
        div:first-child .categories__wrapper{
            margin-bottom: 4em;
            @media(max-aspect-ratio: 3/3), (max-height: 500px){    
                margin-bottom: 0;
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
        right: -20%;
        z-index: 1;
        transform: translateY(-50%);
    }
    @media(max-aspect-ratio: 3/3), (max-height: 500px){    
        &:after{
            display: none;
        }
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
        @media(max-aspect-ratio: 3/3), (max-height: 500px){    
            width: 100%;
        }    
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
            cursor: pointer;
            pointer-events: auto;
            opacity: 1;
            &:disabled{
                opacity: .7;
                pointer-events: none;
                cursor: none;
            }     
            &:hover{
                background: #cb242d;
            } 
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
            @media(max-aspect-ratio: 3/3), (max-height: 500px){    
                padding: 0 2em 3em;
            }
        }
    }
`;

const Wrapper = styled.div`
    width: 6vw;
    margin-right: 1em;
    @media(max-aspect-ratio: 3/3), (max-height: 500px){    
        width: 26vw;
        &:last-child{
            margin-right: 0;
        }
    }
    .image{
        box-shadow: 4px 4px 14px rgba(0, 0, 0, 0.15);
        border: 1px solid ${props => props.isActive ? '#FF4B55' : 'none'}; 
        border-radius: 6px;
        padding: 1em;
        .gatsby-image-wrapper{
            max-width: 67px;
            width: 100%;
        }    
    }
    h4{
        color: ${props => props.isActive ? '#FF4B55' : '#59658A'};
        font-size: .8em;
        font-weight: 500;
        padding-top: 1.5em;
        text-align: center;
    }
`;

const Category = ({block, setAmout}) => {
    const [isActive, setActive] = useState(false);

    return(
        <Wrapper
             onClick={() => {setActive(!isActive); setAmout(!isActive, block.price) }}
             isActive={isActive}
             className="category">
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
        </Wrapper>
    )

};

const CalculatorTemplate = ({ data }) => {
    const [amount, setAmount] = useState(0);
    const [weight, setWeight] = useState('');
    const [isActive, setIsActive] = useState(false);

    const SetAmount = (isActive, price) => {
        if(isActive){
            setAmount(amount + price)
        }else{
            setAmount(amount - price)
        }
    };

    if(data){
        const { title, constituents } = data;
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
                                        <Category
                                            key={index}
                                            block={block}
                                            setAmout={SetAmount}
                                        />
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
                                <input
                                    value={weight}
                                    onChange={(e)=>{setWeight(+e.target.value.replace(/[^\d]/g,'')); setIsActive(false)}}
                                    type="text"/>
                            </label>
                            <button
                                onClick={() => setIsActive(true)}
                                disabled={weight === 0 || weight === '' && true}>Рассчет стоимости</button>
                            <p>Итого стоимость доставки</p>
                            <div className="amount">${isActive ? (weight * 11) + amount : 0 }</div>
                            <div className="note">*Данный расчет является ориентировочным по тарифу Авиадоставки. Точная стоимость доставки будет зависеть от веса посылки и полного перечня заказанных услуг. Для более детальной информации обратитесь к менеджеру компании.</div>
                        </div>
                    </Form>
                </div>
            </Section>
        )}
    else{
        return <div>..loading</div>
    }
};

export default CalculatorTemplate