import About from "../mainPage/about"
import React, { Fragment } from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const Section = styled(About)`
    padding: 2em 0;
    margin: 0;
    align-items: center;
    flex-direction: row-reverse;
    &:nth-child(odd){
        background: #fff; 
        flex-direction: row;
    }
    .list{
        padding: 2em 6.5em 4em;
        justify-content: space-between;
        li{
            align-items: center;
            color: #878F9B;
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
    }
`;

const Sections = ({ sections }) => (
    <Fragment>
        {sections.map((section, index) => (
            <Section
                key={index}
                title={section.title}
                image={section.image}
                text={section.text}
                children={
                    section.list.length > 0 &&
                    (<Fragment>
                        <ul className="row list">
                            {section.list.map((li,index) => (
                                <li className="row" key={index}>
                                    <img src={li.image.publicURL} alt={li.title}/>
                                    {li.title}
                                </li>
                            ))}
                        </ul>
                        <Link className="btn" to="/">
                            Узнать больше
                        </Link>
                    </Fragment>)
                }
            />
        ))}
    </Fragment>
);

export default Sections;