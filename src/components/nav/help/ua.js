import {graphql, StaticQuery} from "gatsby";
import React from "react";
import SubMenu from '../SubMenu'

export default ({setActiveMob, isActiveMob}) => (
    <StaticQuery
        query={graphql`
            query navHelpUa{
                 allMarkdownRemark(filter: {
                    frontmatter: {
                        collection: {eq: "help"},
                        locale: {eq: "ua"}
                    }
                 }) {
                    nodes {
                        frontmatter {
                            crumbLabel
                            crumbLabelParent
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
            />
        }
    />
)
