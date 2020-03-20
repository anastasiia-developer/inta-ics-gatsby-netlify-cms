import About from "../mainPage/about"
import React, { Fragment } from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const Section = styled(About)`
    padding: 2em 0;
    margin: 0;
    align-items: center;
    flex-direction: row-reverse;
    justify-content: space-between;
    background: #fff; 
    &.only{
        .text{
            padding: 1em 1em 0 9em;
        } 
    }
    &:nth-child(even){
        background: #F0F5FD; 
        flex-direction: row;
        @media(max-aspect-ratio: 3/3), (max-height: 500px){    
            flex-direction: column-reverse;
        }
    }
    @media(max-aspect-ratio: 3/3), (max-height: 500px){    
        flex-direction: column-reverse;
        padding: 0;
    }   
    .description{
        width: 50%;
        flex: none;
        @media(max-aspect-ratio: 3/3), (max-height: 500px){    
            width: 100%;
            padding:1em;
            display: flex;
            flex-direction: column;
        }
    } 
    .gatsby-image-wrapper{
        flex: none;
        width: 48%;
        @media(max-aspect-ratio: 3/3), (max-height: 500px){    
            width: 100%;
        }
    }
    .text{
        font-size: .9em;
        li{
            color: #3F3F3F;
        }
    }
    .list{
        padding: 2em 6.5em 4em;
        justify-content: space-between;
        @media(max-aspect-ratio: 3/3), (max-height: 500px){    
            padding: 0;
            flex-wrap: wrap;
            margin: 0em 0 2em;
        }
        li{
            align-items: center;
            color: #7C8696;
            font-weight: 400;
            font-size: .95em;
            @media(max-aspect-ratio: 3/3), (max-height: 500px){    
                margin-bottom: .5em;
            }
            
            img{
                height: 1em;
                margin-right: 1em;
            }
        }
    }
    .btn{
        padding: .8em 2em;
        border-radius: 7em;
        font-weight: 700;
        margin-left: 6em;
        background: linear-gradient(101.61deg, #005BE4 0.64%, #4900E4 100%);
        @media(max-aspect-ratio: 3/3), (max-height: 500px){    
            margin: 0 auto 1em;
        }
    }
`;

const Sections = ({ sections, className }) => (
    <Fragment>
        {sections && sections.length > 0 && sections.map((section, index) => { console.log(section); return (
            <Section
                key={index}
                className={className}
                title={section.title}
                image={section.image}
                text={section.text}
                children={
                    section.list && section.list.length > 0 &&
                    (<Fragment>
                        <ul className="row list">
                            {section.list.map((li,index) => (
                                <li className="row" key={index}>
                                    <img src={li.image.publicURL} alt={li.title}/>
                                    {li.title}
                                </li>
                            ))}
                        </ul>
                        <Link className="btn" to={section.button && section.button.link || '/'}>
                            {section.button && section.button.text || 'Узнать больше'}
                        </Link>
                    </Fragment>)
                }
            />
        )})}
    </Fragment>
);

export default Sections;