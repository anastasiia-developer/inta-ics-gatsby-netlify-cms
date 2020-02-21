import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql, StaticQuery } from 'gatsby'
import styled from "styled-components";
import {kebabCase} from "lodash";

const List = styled.ul`
  justify-content: flex-start;  
  width: 50%;
  margin-left: 7%;
  margin-top: -10%;
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
    &:last-child{
        margin-right: 0;
    }
    @media(max-aspect-ratio: 3/3), (max-height: 500px){
        margin-bottom: 1em;
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
