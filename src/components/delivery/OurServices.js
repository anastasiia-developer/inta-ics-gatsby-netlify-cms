import React from "react"
import styled from "styled-components"
import HoverGradientInsideSvg from '../HoverGradientInsideSvg'
import Shopping from '../../img/shopping.svg'
import Search from '../../img/search.svg'
import Truck from '../../img/delivery-truck.svg'
import Clipboard from '../../img/clipboard.svg'
import Warehouse from '../../img/warehouse.svg'

const Section = styled.section`
    padding: 0 2em 5em;
    text-align: center;
    @media(max-aspect-ratio: 3/3), (max-height: 500px){    
        padding: 0 1em 5em;
        align-items: stretch;
    }
    h2{
        padding: 3em 0;
        color: #2D2F33;
        font-weight: 500;
    }
    
`;

const OurServices = () => (
    <Section>
        <h2>Наши услуги</h2>
        <div className="row-to-column">
            <HoverGradientInsideSvg
                title="Проведение платежей"
                svg={<Shopping/>}
                link='/'
            />
            <HoverGradientInsideSvg
                title="Поиск поставщика"
                svg={<Search/>}
                link='/'
            />
            <HoverGradientInsideSvg
                title="Заказ товара из Китая"
                link='/'
                svg={<Truck/>}
            />
            <HoverGradientInsideSvg
                title="Таможенное оформление груза"
                link='/'
                svg={<Clipboard/>}
            />
            <HoverGradientInsideSvg
                title="Складские услуги"
                link='/'
                svg={<Warehouse/>}
            />
        </div>
    </Section>
)

export default OurServices