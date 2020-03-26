import React from 'react'
import PropTypes from 'prop-types'
import { graphql, StaticQuery } from 'gatsby'
import styled from "styled-components";
import Post from "./Post";
import {ButtonGroup, ResponsiveCarousel} from "./CommonCarousel";
import Carousel from "react-multi-carousel";

const Wrapper = styled.div`
  position: relative;
  footer .time svg path{
    fill: #A3A3A3;
  }
  .react-multiple-carousel__arrow{
      top: 40%;
      &::before{
        color: #005BE4;
      }
  }
  .wrapper{
    background: #fff;
    width: 90%;
    border: 1px solid #ECECEC;
  }
  li{
    border-right: 1px solid #ECECEC;
  }
`;

const BlogRoll = ({data, className}) => {
    const { edges: posts } = data.allMarkdownRemark;

    return (
      <Wrapper className={`row-to-column ${className || ''}`}>
          <Carousel
              containerClass="wrapper"
              sliderClass="row"
              infinite
              arrows={false}
              renderButtonGroupOutside={true}
              customButtonGroup={<ButtonGroup />}
              slidesToSlide={1}
              responsive={ResponsiveCarousel(4,2)}
          >
              {posts &&
                  posts.map(({ node: post }) => (
                      <Post
                        key={post.id}
                        post={post}
                      />
                  ))}

          </Carousel>
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
          limit: 20 
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
