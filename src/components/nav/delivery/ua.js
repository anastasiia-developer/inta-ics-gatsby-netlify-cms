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
                        crumbLabelParent
                        crumbLabel
                        name
                      }
                    }
                 }
            }
    `}
        render={(data) =>
            <SubMenu
                parentName={data.allMarkdownRemark.nodes.frontmatter.crumbLabelParent}
                list={data.allMarkdownRemark.nodes}
                startPath="/dostavka/"
                setActiveMob={() => setActiveMob}
                isActiveMob={isActiveMob}
            />
        }
    />
)
