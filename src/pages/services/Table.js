import React from "react";
import styled from "styled-components";
import Search from "../../img/searchInput.svg";
import Time from "../../img/time.svg";
import ArrowLine from '../../img/arrowLine.svg'

const Wrapper = styled.table`
    margin: 0 auto;
    width: 75%;
    background: #F9FCFF;
    border: 1px solid #D2D6DD;
    border-radius: .5em;
    svg, img{ 
        width: 1em;
        margin-right: 1em;
        path{
            fill: #005BE4;
        }
    }
    h4{
        display: flex;
        align-items: center;
        padding: 2em;
        color: #005BE4;
        font-weight: 500;
        border-bottom: 1px solid #D2D6DD;
    }
`;

const Table = () =>
    <Wrapper className="column">
        <header className='row'>
            <div> </div>
            <h4>
                <Search/>
                Метод поиска
            </h4>
            <h4>
                <Time/>
                Время поиска
            </h4>
            <h4>
                <img src="/img/card.png" alt=""/>
                Себестоимость
            </h4>
            <h4>
                <img src="/img/start.png" alt=""/>
                Вероятность заключить выгодную сделку
            </h4>
        </header>
        <div className="row">
        <div className="column">
            <div>1</div>
            <div>2</div>
            <div>3</div>
        </div>
        <div className="column">

            <div>Самостоятельно в интернете</div>
            <div>Вместе с INTA-ICS</div>
            <div>Поездка в Китай</div>
        </div>
        <div className="column">

            <div>1 день - </div>
            <div>От 7 до 14 дней</div>
            <div>Около 30 дней
                (с учетом времени на подготовку)</div>
        </div>
        <div className="column">

            <div>0$</div>
            <div>От <span className='green'>100$</span></div>
            <div>От <span className='bold'>1500$</span></div>
        </div>
        <div className="column">

            <div className='bold'>= 50%</div>
            <div className='green'>90% <ArrowLine/></div>
            <div className='green'>90% <ArrowLine/></div>
        </div>
        </div>
    </Wrapper>;


export default Table