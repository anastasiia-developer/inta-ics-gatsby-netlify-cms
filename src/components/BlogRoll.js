import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql, StaticQuery } from 'gatsby'
import PreviewCompatibleImage from './PreviewCompatibleImage'
import styled from "styled-components";
import ArrowLine from "../img/arrowLine.svg";
import Time from '../img/time.svg';
import Post from "./Post";

const Wrapper = styled.div`
  background: #fff;
  footer .time svg path{
    fill: #A3A3A3;
  }
`;

const BlogRoll = ({data, className}) => {
    const { edges: posts } = data.allMarkdownRemark;

    return (
      <Wrapper className={`row-to-column wrapper ${className}`}>
        {posts &&
          posts.map(({ node: post }) => (
              <Post
                post={post}
              />
          ))}
      </Wrapper>
    )
}

BlogRoll.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export default ({className}) => (
  <StaticQuery
    query={graphql`
      query BlogRollQuery {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: { frontmatter: { templateKey: { eq: "blog-post" }}}
          limit: 4 
        ) {
          edges {
            node {
              excerpt(pruneLength: 400)
              id
              fields {
                slug
              }
              frontmatter {
                title
                templateKey
                date(formatString: "DD.MM.YYYY")
                featuredpost
                featuredimage {
                  childImageSharp {
                    fluid(maxWidth: 120, quality: 100) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
            }
          }
        }
      }
    `}
    render={(data) => <BlogRoll data={data} className={className}/>}
  />
)
