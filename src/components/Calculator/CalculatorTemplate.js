import React, {useState, useEffect} from "react";
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
            text-align: center;
        }
    }
    .wrapper{
        align-items: center;
    }
    .categories{
        flex: 1;
        flex-wrap: wrap;
        @media(max-aspect-ratio: 3/3), (max-height: 500px){    
            justify-content: space-around;
        }
        @media(max-width: 500px){
            justify-content: flex-start;
        }
        h3{
            color: #5E98EE;
            font-weight: 500;
            padding-bottom: 1em;
            font-size: .9em;
            @media(max-aspect-ratio: 3/3), (max-height: 500px){    
                margin-right: 1em;
            }
        }
        .categories__wrapper{
            margin: 0 6em 0 0;
            @media(max-aspect-ratio: 3/3), (max-height: 500px){    
                margin: 0 1em 2em 0 ;
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
    .form-container{
        display: flex;
        flex-direction: column;
        width: 100%;
        align-items: center;
        @media(max-aspect-ratio: 3/3), (max-height: 500px){    
            justify-content: center;
            flex-direction: row;
            flex-wrap: wrap;
            max-width: 500px;
            margin: 0 auto 2em;
        }
        label{
            color: #fff;
            background: #6098EE;
            color: #BAD0F2;
            width: 50%;
            margin: 0 auto 1em;
            position: relative;
            border-radius: 2em;
            border: 1px solid #6098EE; 
            text-align: right;
            padding: .5em 1em;
            @media(max-aspect-ratio: 3/3), (max-height: 500px){    
                margin: 0 1em 0 0;
            }
            @media(max-width: 500px){
                margin: 0 auto 1em;
            }
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
            font-size: .9em;
            border-radius: 2em;
            padding: .7em 2em;
            color: #fff;
            border: none;
            font-weight: 700;
            margin-bottom: 3em; 
            cursor: pointer;
            pointer-events: auto;
            opacity: 1;
            @media(max-aspect-ratio: 3/3), (max-height: 500px){    
                margin-bottom: 0; 
            }
            
            &:disabled{
                opacity: .7;
                pointer-events: none;
                cursor: none;
            }     
            &:hover{
                background: #cb242d;
            } 
        }        
    }
    h3{
        color: #fff;
        font-weight: 700;
        text-align: center;
        padding: 3em 0 3em;
    }
    .container{
        background: #005BE4;
        border-radius: 7px;
        width: 70%;
        justify-content: center;
        align-items: center;
        position: relative;
        z-index: 2;
        @media(max-aspect-ratio: 3/3), (max-height: 500px){    
            width: 100%;
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
            padding: 0 6em 4.5em;
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
        max-width: 100px;
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
const ConstituentsWrapper = styled.div`
    @media(max-width: 500px){
        order: ${props => props.order || 0};
    }
`;

const Constituents = ({title, category, setAmount, amount, canChoose, name, order}) => {
    const [isActive, setActive] = useState(null);

    useEffect(() => {
        category.forEach((item, key) => {

            if(!!item.default) {
                setActive(key);
            }
        }
        )
    },[]);

    const SetActive = (key, blockPrice) => {
        if(category.find(item => item.default === true)){
            setActive(key);
            if (isActive !== key) {
                setAmount({...amount, [name]:blockPrice})
            }
        }else{
            setActive(isActive === key ? null : key);
            if(isActive === null) {
                setAmount({...amount, [name]:blockPrice})
            }else if(isActive === key) {
                setAmount({...amount, [name]:0})
            }
        }
    };

    return (
        <ConstituentsWrapper order={order}>
            <h3>{title}</h3>
            <div className="row categories__wrapper">
                {category.map((block,key) => (
                    <Wrapper
                        key={key}
                        onClick={() => canChoose &&  SetActive(key, block.price)}
                        isActive={!!canChoose ? isActive === key : true}
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
                ))}
            </div>
        </ConstituentsWrapper>
    )
}

const CalculatorTemplate = ({ data }) => {
    const [amount, setAmount] = useState({
        typeArrive: 11,
        storeServices: 0,
        typeDeliver: 2,
        moreServices: 0
    });
    const [weight, setWeight] = useState('');
    const [isActive, setIsActive] = useState(false);

    const formula = () => {
        const { typeArrive, storeServices, typeDeliver, moreServices } = amount;
        return (weight * typeArrive) + storeServices  + typeDeliver + moreServices;
    };

    if(data){
        const { title, constituents, resultBlock } = data;
        return(
            <Section>
                <h2 className="wrapper">{ title }</h2>
                <div className="row-to-column wrapper">
                    <div className="row categories">
                        {constituents.map(item => (
                            <Constituents
                                key={item.name}
                                name={item.name}
                                title={item.title}
                                canChoose={item.canChoose}
                                category={item.category}
                                setAmount={setAmount}
                                amount={amount}
                                order={item.category.length > 1 ? 0 : 1 }
                            />
                        ))}
                    </div>
                    <Form>
                        <div className="container column">
                            <h3>{resultBlock.title}</h3>
                            <div className="form-container">
                                <label>
                                    kg
                                    <input
                                        value={weight === 0 ? '' : weight}
                                        onChange={(e)=>{setWeight(+e.target.value.replace(/[^\d]/g,''))}}
                                        type="text"/>
                                </label>
                                <button
                                    onClick={() => setIsActive(true)}
                                    disabled={weight === 0 || weight === '' && true}>{resultBlock.btnText}</button>
                            </div>
                            <p>{resultBlock.resultText}</p>
                            <div className="amount">${weight !== 0 && isActive ? formula()  : 0 }</div>
                            <div className="note">{resultBlock.note}</div>
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