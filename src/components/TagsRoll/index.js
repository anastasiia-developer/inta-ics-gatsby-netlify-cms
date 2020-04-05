import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import TagsRollTemplate from "./TagsRollTemplate";

export default ({ tag }) => (
    <StaticQuery
        query={graphql`
          query TagsRollQuery {
              allMarkdownRemark(limit: 1000, filter: {frontmatter: {locale: {eq: "ua"}}}) {
                group(field: frontmatter___tags) {
                  fieldValue
                }
              }
            }
        `}
        render={(data) => <TagsRollTemplate tagActive={tag} tags={data.allMarkdownRemark.group} locale="ua"/>}
    />
)
