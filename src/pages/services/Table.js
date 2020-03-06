import React from "react";
import styled from "styled-components";
import Search from "../../img/searchInput.svg";
import Time from "../../img/time.svg";
import ArrowLine from '../../img/arrowLine.svg'

const Wrapper = styled.div`

    border-radius: .5em;
    svg, img{ 
        width: 1em;
        margin-right: 1em;
        path{
            fill: #005BE4;
        }
    }
    .row{
        align-items: center;
    }
    tr th{
        color: #005BE4;
    }
    td, th {
      vertical-align: middle;
      text-align: left;
    }
    thead th{
      border-top: none; 
      font-size: .9em;
    }
    tbody tr:last-child td{
      border-bottom: none; 
    }
    tbody td{
       font-size: .85em;
       &:hover{
        background: #E8F2FF;
        cursor: pointer;
       }
    } 

    th:nth-child(2), th:nth-child(4){
      min-width: 20em;
    }
    .blue{
        color: #005BE4;
    }
    .green{
        color: #2EAF00;
        svg{ 
            position: relative;
            transform: rotate(-90deg);
            path{
                fill: #2EAF00;
            }
        }
    }
    .bold{
        font-weight: 700;
    }
    .medium{
        font-weight: 500;
    }
    .infinity{
        font-size: 1.5em;
        margin-left: .25em;
    }
@media screen and (min-width: 801px) {
    border: 1px solid #D2D6DD;
    background: #F9FCFF;
    margin: 3em auto;
    width: 75%;
    
    table{
        border-collapse: collapse;
    }
    td, th {
        padding: 1.8em 2em;
        border-top: 1px #CCC solid;
        border-bottom: 1px #CCC solid;
        border-left: 1px solid #D2D6DD; 
    }
    tbody th{
        display: none;
    }
    th:first-child, td:first-child{
        border-left: none; 
        color: #717E90;
    }
  
}
@media screen and (max-width: 800px) {
    margin: 1em auto;
    width: 90%;
    thead {
        display: none;
    }
    tr {
      display: flex;
      flex-direction: column;
      background-color: #F9FBFF;
      margin-bottom: 1em;
      padding: 2em 1em;
      border: 1px solid #DDE5F0; 
      border-radius: .5em;
      font-size: .9em;
    }

    td {
        display: flex;
        width: 100%;
        padding-bottom: 1em;
        font-weight: 500;
    }
    .index{
        display: none;
    }
    
    tbody th{
        min-width: 12em;
        max-width: 12em;
        font-size: .9em;
    }  
    .best-deal{
        padding-top: 0;
        overflow: hidden;
        &:before{
            content: 'Лучшее придложение';
            background: #6BC028;
            padding: .8em 0;
            width: calc(100% + 2em);
            margin-left: -1em;
            text-align: center;
            font-weight: 700;
            color: #fff;
            font-size: 1.2em;
            margin-bottom: 1.5em;
        }
    }
}
`;

const Table = () =>
        <Wrapper >
            <table className="preview">
            <thead>
            <tr>
                <th>
                </th>
                <th>
                    <div className="row">
                        <Search/>
                        Метод поиска
                    </div>
                </th>
                <th>
                    <div className="row">
                        <Time/>
                        Время поиска
                    </div>
                </th>
                <th>
                    <div className="row">
                        <img src="/img/card.png" alt=""/>
                        Себестоимость
                    </div>
                </th>
                <th>
                    <div className="row">
                        <img src="/img/start.png" alt=""/>
                        Вероятность заключить выгодную сделку
                    </div>
                </th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td className="index">1</td>
                <td className="name">
                    <th>
                        <div className="row">
                            <Search/>
                            Метод поиска
                        </div>
                    </th>
                    <span>
                        Самостоятельно в интернете
                    </span>
                </td>
                <td className="id">
                    <th>
                        <div className="row">
                            <Time/>
                            Время поиска
                        </div>
                    </th>
                    <div className="row">
                        1 день - <span className='bold infinity'>&#8734;</span>
                    </div>
                </td>
                <td className="type">
                    <th>
                        <div className="row">
                            <img src="/img/card.png" alt=""/>
                            Себестоимость
                        </div>
                    </th>
                    <span>0$</span>
                </td>
                <td className="value">
                    <th>
                        <div className="row">
                            <img src="/img/start.png" alt=""/>
                            Вероятность заключить выгодную сделку
                        </div>
                    </th>
                    <span>= <span className='medium'>50%</span></span>
                </td>
            </tr>

            <tr className='best-deal'>
                <td className="index" data-label="">
                    2
                </td>
                <td className="name">
                    <th>
                        <div className="row">
                            <Search/>
                            Метод поиска
                        </div>
                    </th>
                    <span>Вместе с <span className='blue bold'>INTA-ICS</span></span>
                </td>
                <td className="id">
                    <th>
                        <div className="row">
                            <Time/>
                            Время поиска
                        </div>
                    </th>
                    <span>От <span className='blue medium'>7</span> до <span className='blue medium'>14 дней</span></span>
                </td>
                <td className="type">
                    <th>
                        <div className="row">
                            <img src="/img/card.png" alt=""/>
                            Себестоимость
                        </div>
                    </th>
                    <span>От <span className='green'>100$</span></span>
                </td>
                <td className="value">
                    <th>
                        <div className="row">
                            <img src="/img/start.png" alt=""/>
                            Вероятность заключить выгодную сделку
                        </div>
                    </th>
                    <div className='green'>90% <ArrowLine/></div>
                </td>
            </tr>

            <tr>
                <td className="index" data-label="">3</td>
                <td className="name">
                    <th>
                        <div className="row">
                            <Search/>
                            Метод поиска
                        </div>
                    </th>
                    <span>Поездка в Китай</span>
                </td>
                <td className="id">
                    <th>
                        <div className="row">
                            <Time/>
                            Время поиска
                        </div>
                    </th>
                    <span>Около <span className='blue medium'>30 дней </span>
                    (с учетом времени на подготовку)</span>
                </td>
                <td className="type">
                    <th>
                        <div className="row">
                            <img src="/img/card.png" alt=""/>
                            Себестоимость
                        </div>
                    </th>
                    <span>От <span className='medium'>1500$</span></span>
                </td>
                <td className="value" >
                    <th>
                        <div className="row">
                            <img src="/img/start.png" alt=""/>
                            Вероятность заключить выгодную сделку
                        </div>
                    </th>
                    <div className='green'>90% <ArrowLine/></div>
                </td>
            </tr>
            </tbody>
            </table>
        </Wrapper>


export default Table