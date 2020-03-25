import {graphql, StaticQuery} from "gatsby";
import React from "react";
import SubMenu from '../SubMenu'

export default ({setActiveMob, isActiveMob}) => (
    <StaticQuery
        query={graphql`
            query navServicesRu{
                 allMarkdownRemark(filter: {frontmatter: {templateKey: {eq: "services"}, locale: {eq: "ru"} }}) {
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
                parentName="Услуги"
                list={data.allMarkdownRemark.nodes}
                setActiveMob={() => setActiveMob}
                isActiveMob={isActiveMob}
            />
        }
    />
)
