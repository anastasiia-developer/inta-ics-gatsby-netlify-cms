import {graphql, StaticQuery} from "gatsby";
import React from "react";
import LinkMenu from "../LinkMenu";


export default ({setActiveMob}) => (
    <StaticQuery
        query={graphql`
            query navCostRu{
                markdownRemark(frontmatter: { pageKey: { eq: "cost-page" }, locale: { eq: "ru" } }) {
                    frontmatter {
                        crumbLabel
                    }   
                }
            }
        `}
        render={(data) =>
            <LinkMenu
                label={data}
                link="ru/cost"
                setActiveMob={() => setActiveMob}
            />
        }
    />
)
