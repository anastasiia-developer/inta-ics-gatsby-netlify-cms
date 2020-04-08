import {graphql, StaticQuery} from "gatsby";
import React from "react";
import BarContactsTemplate from "./BarContactsTemplate";

export default ({isActive}) => (
    <StaticQuery
        query={graphql`
            query ContactsRu{
                markdownRemark(frontmatter: { pageKey: { eq: "contact" }, locale: { eq: "ru" } }) {
                    frontmatter {
                        contactsList{
                            phone
                            email
                            local
                        }
                    }   
                }
            }
        `}
        render={(data) =>
            <BarContactsTemplate isActive={isActive} data={data.markdownRemark.frontmatter.contactsList}/>
        }
    />
)