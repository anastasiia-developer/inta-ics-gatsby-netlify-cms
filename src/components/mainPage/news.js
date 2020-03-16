import React from "react";
import {Link} from "gatsby";
import BlogRoll from "../BlogRoll";
import styled from "styled-components";

const Section = styled.section`
    background: #F8F8F8;
    padding: 2em 0;
    margin: 6em 0 0;
    @media(max-aspect-ratio: 3/3), (max-height: 500px){    
        margin: 3em 0 3em;
    }
    h2{
        text-align: center;
        padding: 1em 0 2em;
        font-weight: 700;
        color: #393939;
    }
    article{
        width: 100%;
    }
    .btn{
        background: #005BE4;
        font-weight: 700;
        padding: 1em 2.5em;
        border-radius: 2em;
        margin: 6em auto 2em;
        font-size: .9em;
        @media(max-aspect-ratio: 3/3), (max-height: 500px){    
            margin: 2em auto 0;
        }
    }
`;

const News = () => {
    return (
        <Section className="column">
            <h2>Новости</h2>
            <BlogRoll />
            <Link className="btn" to="/blog/">
                Читать все новости
            </Link>
        </Section>
    )
};

export default News