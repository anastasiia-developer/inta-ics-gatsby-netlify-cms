import {graphql, StaticQuery} from "gatsby";
import React from "react";
import SubMenu from './SubMenu'

export default ({setActiveMob, isActiveMob}) => (
    <StaticQuery
        query={graphql`
            query navServices{
                 allMarkdownRemark(filter: {fields: {slug: {regex: "/services/"}}}) {
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
                parentName="Услуги"
                list={data.allMarkdownRemark.nodes}
                startPath="/services/"
                setActiveMob={() => setActiveMob}
                isActiveMob={isActiveMob}
            />
        }
    />
)
