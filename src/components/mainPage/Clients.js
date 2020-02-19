import React from "react";
import styled from "styled-components";
import PreviewCompatibleImage from "../PreviewCompatibleImage";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { ResponsiveCarousel, ButtonGroup } from '../CommonCarousel'
import {graphql, StaticQuery} from "gatsby";

const Section = styled.section`
    background: #F8F8F8;
    padding: 3em 0;  
    @media(max-aspect-ratio: 3/3), (max-height: 500px){    
        padding: 1em 0;  
    }  
    .wrapper{
        width: 70%;
        padding-bottom: 2em;
        @media(max-aspect-ratio: 3/3), (max-height: 500px){    
                width: 80%;
        }
    }
    .row{
        overflow: hidden;
    }
    h2{
        font-weight: 500;
        color: #393939;
        margin-bottom: 2em;
        text-align: center;
        @media(max-aspect-ratio: 3/3), (max-height: 500px){    
                margin-bottom: 1em;
        }
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


const Clients = ({ data }) => {
        if(data){
            return(
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
                                            {data.markdownRemark.frontmatter.clients.map((img, index) => (
                                                <div key={index} className="img">
                                                        <div className="shadow row">
                                                                <PreviewCompatibleImage
                                                                    imageInfo={{
                                                                            image: img.image,
                                                                    }}
                                                                />
                                                        </div>
                                                </div>
                                            ))}
                                    </Carousel>
                            </div>
                    </Section>
                )}
        else{
                return <div>..loading</div>
        }
};


export default () => (
    <StaticQuery
        query={graphql`
            query clientsComponent{
                markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
                    frontmatter {
                        clients{
                          image{
                              childImageSharp {
                                fluid(maxWidth: 200, quality: 100) {
                                  ...GatsbyImageSharpFluid
                                }
                              }
                          }
                        }
                    }
                }
            }
    `}
        render={(data) => <Clients data={data} />}
    />
)
