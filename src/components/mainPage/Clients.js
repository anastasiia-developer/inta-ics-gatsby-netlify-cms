import React, {Fragment} from "react";
import styled from "styled-components";
import PreviewCompatibleImage from "../PreviewCompatibleImage";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { ResponsiveCarousel, ButtonGroup } from '../CommonCarousel'

const Section = styled.section`
    background: #FFE15A;
    padding: 3em 0;    
    .wrapper{
        width: 70%;
        padding-bottom: 2em;
    }
    .row{
        overflow: hidden;
    }
    h2{
        font-weight: 500;
        color: #393939;
        margin-bottom: 2em;
        text-align: center;
    }
    .gatsby-image-wrapper{
        width: 30%;
    }
    .img{
        height: 100%;
        margin: 0 3%;
        padding: .3em .15em;
    }
    .shadow{
        background: #fff;
        border-radius: 7px;
        align-items: center;
        justify-content: center;
        padding: 1em 0;
        width: 100%;
        height: 100%;
        box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.12);
    }
    .react-multi-carousel-dot-list {
        bottom: 0;
        .react-multi-carousel-dot button{
            background: #fff;
            border: none;
            opacity: .5;
            width: .6em;
            height: .6em;
        }
        .react-multi-carousel-dot--active button{
            opacity: 1;
        } 
    }
`;

const Clients = ({clients}) => (
    <Section>
        <h2>Наши клиенты</h2>
        <div style={{position: 'relative'}}>
        <Carousel
            containerClass="wrapper"
            sliderClass="row"
            infinite
            arrows={false}
            renderButtonGroupOutside={true}
            customButtonGroup={<ButtonGroup />}
            slidesToSlide={1}
            showDots
            responsive={ResponsiveCarousel()}
        >
        {clients.map((img, index) => (
            <div key={index} className="img">
                <div className="shadow row">
                    <PreviewCompatibleImage
                        imageInfo={{
                            image: img.image
                        }}
                    />
                </div>
            </div>
        ))}
        </Carousel>
        </div>
    </Section>
)


export default Clients