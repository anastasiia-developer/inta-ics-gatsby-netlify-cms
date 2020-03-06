import React from "react";
import styled from "styled-components";
import Search from "../../img/searchInput.svg";
import Time from "../../img/time.svg";
import ArrowLine from '../../img/arrowLine.svg'

const Wrapper = styled.div`
    margin: 3em auto;
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
    .row{
        align-items: center;
    }
    tr th{
        color: #005BE4;
        
    }
    td, th {
      vertical-align: middle;
      text-align: left;
      border-left: 1px solid #D2D6DD; 
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
    th:first-child, td:first-child{
      border-left: none; 
      color: #717E90;
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
  table{
   border-collapse: collapse;
  }
  td, th {
    padding: 1.8em 2em;
    border-top: 1px #CCC solid;
    border-bottom: 1px #CCC solid;
  }
  
}
@media screen and (max-width: 800px) {
    thead {
        display: none;
    }

    tr {
      display: flex;
      flex-direction: column;
      background-color: white;
      margin: 0px 0px 20px 0px;
      padding: 14px;
      border: 1px #CCCCCC solid; 
    }

    td {
      padding-bottom: 8px;
    }

  /* Add labels for preview table */
    .preview td::before {
      content: attr(data-label) ": ";
      font-weight: bold;
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
                <td className="name" data-label="">1</td>
                <td className="name" data-label="Метод поиска">
                    Самостоятельно в интернете
                </td>
                <td className="id" data-label="Время поиска">
                    <div className="row">
                        1 день - <span className='bold infinity'>&#8734;</span>
                    </div>
                </td>
                <td className="type" data-label="Себестоимость">
                    0$
                </td>
                <td className="value" data-label="Вероятность заключить выгодную сделку">
                    = <span className='medium'>50%</span>
                </td>
            </tr>

            <tr>
                <td className="x" data-label="">
                    2
                </td>
                <td className="name" data-label="Метод поиска">
                    Вместе с <span className='blue bold'>INTA-ICS</span>
                </td>
                <td className="id" data-label="Время поиска">
                    От <span className='blue medium'>7</span> до <span className='blue medium'>14 дней</span>
                </td>
                <td className="type" data-label="Себестоимость">
                    От <span className='green'>100$</span>
                </td>
                <td className="value" data-label="Вероятность заключить выгодную сделку">
                    <div className='green'>90% <ArrowLine/></div>
                </td>
            </tr>

            <tr>
                <td className="x" data-label="">3</td>
                <td className="name" data-label="Метод поиска">
                    Поездка в Китай
                </td>
                <td className="id" data-label="Время поиска">
                    Около <span className='blue medium'>30 дней </span>
                    (с учетом времени на подготовку)
                </td>
                <td className="type" data-label="Себестоимость">
                    От <span className='medium'>1500$</span>
                </td>
                <td className="value" data-label="Вероятность заключить выгодную сделку">
                    <div className='green'>90% <ArrowLine/></div>
                </td>
            </tr>
            </tbody>
            </table>
        </Wrapper>


export default Table