import {graphql, StaticQuery} from "gatsby";
import React from "react";
import SubMenu from '../SubMenu'


export default ({setActiveMob, isActiveMob}) => (
    <StaticQuery
        query={graphql`
            query navDeliveryRu{
                 allMarkdownRemark(filter: {frontmatter: {templateKey: {eq: "delivery"}, locale: {eq: "ru"} }}) {
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
                parentName="Доставка"
                list={data.allMarkdownRemark.nodes}
                startPath="/dostavka/ru/"
                setActiveMob={() => setActiveMob}
                isActiveMob={isActiveMob}
            />
        }
    />
)
