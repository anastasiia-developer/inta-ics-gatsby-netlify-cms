import {graphql, StaticQuery} from "gatsby";
import React from "react";
import BarContactsTemplate from "./BarContactsTemplate";

export default () => (
    <StaticQuery
        query={graphql`
            query ContactsUa{
                markdownRemark(frontmatter: { pageKey: { eq: "contact" }, locale: { eq: "ua" } }) {
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
            <BarContactsTemplate data={data.markdownRemark.frontmatter.contactsList}/>
        }
    />
)