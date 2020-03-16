import React from "react";
import styled from "styled-components";
import HoverGradientInsideSvg from "../../components/HoverGradientInsideSvg";
import Storage from "../../img/storage.svg";
import Package from "../../img/package.svg";
import Trolley from "../../img/trolley.svg";
import Ship from "../../img/cargo-ship.svg";
import Air from "../../img/airplane.svg";
import Packages from "../../img/packages.svg";
import Product from "../../img/product.svg";
import Protected from "../../img/protected.svg";
import TrolleyBig from "../../img/trolleyBig.svg";
import Warehouse from "../../img/warehouse.svg";

const Section = styled.section`
    background: #F0F5FD;
    padding: 4em 2.5em;
    margin-top: 2em;
    @media(max-aspect-ratio: 3/3), (max-height: 500px){    
        padding: 2em 1em;
    }
    h2{
        font-weight: 500;
        margin-bottom: 2em;
        text-align: center;
    }
    .row{
        flex-wrap: wrap;
        justify-content: space-between;
        div{
            border: 1px solid #E9F2FF;
            margin-bottom: 1.5%;
            padding: 2em 1em;
            justify-content: center;
            flex-basis: 18.5%;
            align-items: center;
            display: flex;
            flex-direction: column;
            svg{
                width: 3.5em;
            }
             
            @media(max-aspect-ratio: 3/3), (max-height: 500px){    
                margin-bottom: 1em;
            }
        }
    }
`;

const Cargo = () => {

    return(
        <Section>
            <h2>Международные грузоперевозки</h2>
            <div className="row">
                <HoverGradientInsideSvg
                    title="Контейнерные перевозки"
                    svg={<Storage/>}
                />
                <HoverGradientInsideSvg
                    title="Карго доставка"
                    svg={<Package/>}
                />
                <HoverGradientInsideSvg
                    title="Доставка товаров"
                    svg={<Trolley/>}
                />
                <HoverGradientInsideSvg
                    title="Перевозка сборных грузов"
                    svg={<Ship/>}
                />
                <HoverGradientInsideSvg
                    title="Международная доставка посылок"
                    svg={<Air/>}
                />
                <HoverGradientInsideSvg
                    title="Мультимодальные перевозки"
                    svg={<Packages/>}
                />
                <HoverGradientInsideSvg
                    title="Перевозка негабаритных грузов"
                    svg={<Product/>}
                />
                <HoverGradientInsideSvg
                    title="Перевозка техники"
                    svg={<Protected/>}
                />
                <HoverGradientInsideSvg
                    title="Доставка станков и оборудования"
                    svg={<TrolleyBig/>}
                />
                <HoverGradientInsideSvg
                    title="Доставка из Китая в Одессу"
                    svg={<Warehouse/>}
                />
            </div>
        </Section>
    )
};

export default Cargo;