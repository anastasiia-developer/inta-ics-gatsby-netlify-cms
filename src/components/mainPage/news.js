import React from "react";
import {Link} from "gatsby";
import BlogRoll from "../BlogRoll";
import styled from "styled-components";

const Section = styled.section`
    background: #FFE15A;
    padding: 2em 0;
    margin: 6em 0 3em;
    h2{
        text-align: center;
        padding: 1em 0 2em;
        font-weight: 700;
        color: #393939;
    }
    .btn{
        background: #005BE4;
        font-weight: 700;
        padding: 1em 2.5em;
        border-radius: 2em;
        margin: 6em auto 2em;
        font-size: .9em;
    }
`;

const News = () => {
    return (
        <Section className="column">
            <h2>Новости</h2>
            <BlogRoll />
            <Link className="btn" to="/blog">
                Читать все новости
            </Link>
        </Section>
    )
};

export default News