import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import TagsRollTemplate from "./TagsRollTemplate";

export default ({ tag }) => (
    <StaticQuery
        query={graphql`
          query TagsRollQueryRu {
              allMarkdownRemark(limit: 1000, filter: {frontmatter: {locale: {eq: "ru"}}}) {
                group(field: frontmatter___tags) {
                  fieldValue
                }
              }
            }
        `}
        render={(data) => <TagsRollTemplate tagActive={tag} tags={data.allMarkdownRemark.group} locale="ru"/>}
    />
)
