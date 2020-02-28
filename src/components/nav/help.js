import {graphql, StaticQuery} from "gatsby";
import React from "react";
import SubMenu from './SubMenu'

export default ({setActiveMob, isActiveMob}) => (
    <StaticQuery
        query={graphql`
            query navHelp{
                 allMarkdownRemark(filter: {fields: {slug: {regex: "/help/"}}}) {
                    nodes {
                        frontmatter {
                            crumbLabel
                        }
                        fields {
                             slug
                        }
                     }
                 }
            }
    `}
        render={(data) =>
            <SubMenu
                parentName="Помощь"
                list={data.allMarkdownRemark.nodes}
                startPath="/help/"
                setActiveMob={() => setActiveMob}
                isActiveMob={isActiveMob}
            />
        }
    />
)
