import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql, StaticQuery } from 'gatsby'
import PreviewCompatibleImage from './PreviewCompatibleImage'
import styled from "styled-components";
import ArrowLine from "../img/arrowLine.svg";

const Wrapper = styled.div`
  background: #fff;
`;

const Post = styled.article`
  border-right: 1px solid #ECECEC;
  padding: 1em;
  flex: 1;
  &:last-child{
    border-right: none;
  }
  header{
    width: auto;
    height: 7em;
    .gatsby-image-wrapper{
      height: 100%;
    }
  }
  h3{
      padding: .5em;
    a{
        color: #2F2F2F;
        font-weight: 500;
        font-size: 1em;
        line-height: 1em;
      }
  }
  p{
    padding: .5em;
    color: #474747;
    line-height: 1.5em;
    font-size: .9em;
  }
  footer{
    margin-top: 1em;
    justify-content: space-between;
    .time{
      color: #A3A3A3;
      align-items: center;
      img{
        margin-right: .5em;
      }    
    }
    .row{
      align-items: center;
    }
    a{
      color: #FF4B55;
      text-decoration: underline;
    }
    svg{
      margin-right: .5em;
      width: 1em;
      height: 1em;
      path{
        fill: #FF4B55;
      }
    }
  }
`;

class BlogRoll extends React.Component {
  render() {
    const { data } = this.props;
    const { edges: posts } = data.allMarkdownRemark;

    const sliceText = (text) => {
      let sliced = text.slice(0,100);
      if (sliced.length < text.length) {
        sliced += '...';
      }
      return sliced;
    };

    return (
      <Wrapper className="row-to-column wrapper">
        {posts &&
          posts.map(({ node: post }) => (
            <Post key={post.id}>
              <header>
                {post.frontmatter.featuredimage ? (
                    <PreviewCompatibleImage
                      imageInfo={{
                        image: post.frontmatter.featuredimage,
                        alt: `featured image thumbnail for post ${post.frontmatter.title}`,
                      }}
                    />
                ) : null}
              </header>
              <h3>
                <Link
                  to={post.fields.slug}
                >
                  {post.frontmatter.title}
                </Link>
              </h3>
              <p>
                {
                  sliceText(post.excerpt)
                }
              </p>
              <footer className="row">
                <span className="time row">
                    <img src="./img/timeIcon.png" alt="timeIcon"/>
                    {post.frontmatter.date}
                </span>
                <Link className="row" to={post.fields.slug}>
                  <ArrowLine/>
                  Читать подробнее
                </Link>
              </footer>
            </Post>
          ))}
      </Wrapper>
    )
  }
}

BlogRoll.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export default () => (
  <StaticQuery
    query={graphql`
      query BlogRollQuery {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
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
    render={(data, count) => <BlogRoll data={data} count={count} />}
  />
)
