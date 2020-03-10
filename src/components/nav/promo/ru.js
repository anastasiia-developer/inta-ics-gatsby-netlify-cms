import {graphql, StaticQuery} from "gatsby";
import React from "react";
import SubMenu from '../SubMenu'


export default ({setActiveMob, isActiveMob}) => (
    <StaticQuery
        query={graphql`
            query navPromoRu{
                 allMarkdownRemark(filter: {frontmatter: {templateKey: {eq: "promo-page"}, locale: {eq: "ru"} }}) {
                    nodes {
                      frontmatter {
                        crumbLabel
                        name
                      }
                    }
                 }
            }
    `}
        render={(data) =>
            <SubMenu
                parentName="Акции"
                list={data.allMarkdownRemark.nodes}
                startPath="/promos/ru/"
                setActiveMob={() => setActiveMob}
                isActiveMob={isActiveMob}
            />
        }
    />
)
