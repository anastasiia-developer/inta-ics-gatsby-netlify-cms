import {graphql, StaticQuery} from "gatsby";
import React from "react";
import SubMenu from '../SubMenu'


export default ({setActiveMob, isActiveMob}) => (
    <StaticQuery
        query={graphql`
            query navDeliveryUa{
                 allMarkdownRemark(filter: {frontmatter: {templateKey: {eq: "delivery"}, locale: {eq: "ua"} }}) {
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
                startPath="/delivery/"
                setActiveMob={() => setActiveMob}
                isActiveMob={isActiveMob}
            />
        }
    />
)
