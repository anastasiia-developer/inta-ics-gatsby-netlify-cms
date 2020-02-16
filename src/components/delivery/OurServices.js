import React from "react"
import styled from "styled-components"
import Shopping from '../../img/shopping.svg'
import Search from '../../img/search.svg'
import Truck from '../../img/delivery-truck.svg'
import Clipboard from '../../img/clipboard.svg'
import Warehouse from '../../img/warehouse.svg'

const Section = styled.section`
    padding: 0 2em 2em;
    text-align: center;
    h2{
        padding: 3em 0;
        color: #2D2F33;
        font-weight: 500;
    }
    .row div{
        flex: 1;
        margin: 0 .5em;
        padding: 2em 1em;
        background: #FFFFFF;
        box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.12);
        border-radius: 7px;
        &:hover{
            background: linear-gradient(119.44deg, #005BE4 -4.2%, #4900E4 108.11%);
            cursor: pointer;
            h4{
                color: #fff;
            }
            svg{
                --color-1: #0B4EA7;
                --color-2: #fff;
            }
        }
        h4{
            color: #4A5566;
            font-weight: 500;
            margin-top: 1em;
        }
        svg{
            width: 4.5em;
            --color-1: #D9E7F8;
            --color-2: #045DD2;
        }
    }
`;

const OurServices = () => (
    <Section>
        <h2>Наши услуги</h2>
        <div className="row">
            <div>
                <Shopping/>
                <h4>Проведение платежей</h4>
            </div>
            <div>
                <Search/>
                <h4>Поиск поставщика</h4>
            </div>
            <div>
                <Truck/>
                <h4>Заказ товара из Китая</h4>
            </div>
            <div>
                <Clipboard/>
                <h4>Таможенное оформление груза</h4>
            </div>
            <div>
                <Warehouse/>
                <h4>Складские услуги</h4>
            </div>
        </div>
    </Section>
)

export default OurServices