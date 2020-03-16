import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql, StaticQuery } from 'gatsby'
import styled from "styled-components";
import {kebabCase} from "lodash";

const List = styled.ul`
  justify-content: flex-start;  
  margin-top: 5%;
  flex-wrap: wrap;
  @media(max-aspect-ratio: 3/3), (max-height: 500px){
    margin: 0;
    width: 100%;
  }
  
`;

const Item = styled.li`
    background: #222222;
    border-radius: .5em;
    padding: .5em 1em;
    margin-right: 1em;
    margin-bottom: 1em;
    font-size: .9em;
    &:last-child{
        margin-right: 0;
    }
  a{
    font-weight: 500;
    color: ${props => !!props.color ? '#fff' : '#005BE4'};
    &:hover{
        color: #fff;
    }
  }
`

const TagsRoll = ({tags, tagActive}) => (
    <List className="row">
        {
            tags.map(tag =>
                <Item key={tag.fieldValue} color={tagActive === tag.fieldValue ? 1 : 0}>
                    <Link  to={`/blog/${tagActive === tag.fieldValue ? '' : kebabCase(tag.fieldValue)}/`}>
                        {tag.fieldValue}
                    </Link>
                </Item>
            )
        }
    </List>
)

TagsRoll.propTypes = {
    data: PropTypes.shape({
        allMarkdownRemark: PropTypes.shape({
            group: PropTypes.array,
        }),
    }),
}

export default ({ tag }) => (
    <StaticQuery
        query={graphql`
          query TagsRollQuery {
            allMarkdownRemark(limit: 1000) {
              group(field: frontmatter___tags) {
                fieldValue
              }
            }
          }
        `}
        render={(data) => <TagsRoll tagActive={tag} tags={data.allMarkdownRemark.group} />}
    />
)
