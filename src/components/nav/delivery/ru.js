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
                list={data.allMarkdownRemark.nodes}
                setActiveMob={() => setActiveMob}
                isActiveMob={isActiveMob}
                locale="/ru/"
            />
        }
    />
)
