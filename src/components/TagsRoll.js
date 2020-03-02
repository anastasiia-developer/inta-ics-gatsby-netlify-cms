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
  li{
    background: #222222;
    border-radius: .5em;
    padding: .5em 1em;
    margin-right: 1em;
    margin-bottom: 1em;
    font-size: .9em;
    &:last-child{
        margin-right: 0;
    }
  }
  a{
    font-weight: 500;
    color: #005BE4;
    &:hover{
        color: #fff;
    }
  }
`;

const TagsRoll = ({tags}) => (
    <List className="row">
        {
            tags.map(tag =>
                <li key={tag.fieldValue}>
                    <Link to={`/tags/${kebabCase(tag.fieldValue)}/`}>
                        {tag.fieldValue}
                    </Link>
                </li>
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

export default () => (
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
        render={(data) => <TagsRoll tags={data.allMarkdownRemark.group} />}
    />
)
