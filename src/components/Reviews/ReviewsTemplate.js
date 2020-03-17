import React from "react";
import styled from "styled-components";
import Carousel from 'react-multi-carousel';
import {ButtonGroup, ResponsiveCarousel} from "../CommonCarousel";


const Section = styled.section`
    @media(max-aspect-ratio: 3/3), (max-height: 500px){    
        padding: 0 1em;
    }
    h2{
        padding: 2em 0 3em;
        text-align: center;
        font-weight: 500;
        @media(max-aspect-ratio: 3/3), (max-height: 500px){    
            padding: 1em 0;
        }
    }
    .wrapper{
        width: 79%;
        padding-bottom: 2em;
        @media(max-aspect-ratio: 3/3), (max-height: 500px){    
            width: 100%;
        }
    }
    .react-multiple-carousel__arrow::before{
        color: #005BE4;
    }
    .react-multiple-carousel__arrow{
        top: 50%;
        transform: translateY(-50%);
        @media(max-aspect-ratio: 3/3), (max-height: 500px){    
            top: auto;
            transform: none;
        }
        &--left{
            left: 8%;
            @media(max-aspect-ratio: 3/3), (max-height: 500px){    
                left: -5%;
            }        
        }
        &--right{
            right: 8%;
            @media(max-aspect-ratio: 3/3), (max-height: 500px){    
                right: -5%;
            }
        }
        
    }
    .react-multi-carousel-item{  
        text-align: center;
        display: flex;
        .border{
            height: 100%;
            margin: 0 2em;
            padding: 2em 4em;
            border: 3px solid #005BE4;
            border-radius: .5em;
            @media(max-aspect-ratio: 3/3), (max-height: 500px){    
                padding: 1em 1em;
                margin: 0;
            }
        }  
        h3{
            font-weight: 500;
            color: #101318;
            padding-bottom: 1em;
            font-size: 1em;
        }
        
        p{
            color: #4F5661;
            line-height: 2em;
            font-size: .9em;
            padding-bottom: 2em;
        }  
        .source{
            color: #005BE4;
            font-weight: 500;
            font-size: .8em;
        }
        
    }      
`;

const ReviewsTemplate = ({reviews}) => {
    if(reviews){
        return(
        <Section>
            <h2>Отзывы</h2>
            <div className="wrapper">
                <div style={{position: 'relative'}}>
                    <Carousel
                        containerClass="wrapper"
                        sliderClass="row"
                        arrows={false}
                        renderButtonGroupOutside={true}
                        customButtonGroup={<ButtonGroup />}
                        slidesToSlide={1}
                        showDots
                        autoPlay
                        autoPlaySpeed={5000}
                        dotListClass="custom-dot-list-style"
                        responsive={ResponsiveCarousel(1,1)}
                    >
                        {reviews.map((review, index) =>
                            <div key={index}>
                                <div className="border">
                                    <h3>{review.name}</h3>
                                    <p>{review.text}</p>
                                    <a href={review.source.url} className="source">{review.source.name}</a>
                                </div>
                            </div>
                        )}
                    </Carousel>
                </div>
            </div>
        </Section>)
    }
    else{
        return <div>..loading</div>
    }
};
export default ReviewsTemplate;