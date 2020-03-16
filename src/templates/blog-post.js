import React from 'react'
import PropTypes from 'prop-types'
import { kebabCase } from 'lodash'
import Helmet from 'react-helmet'
import { graphql, Link } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'
import Breadcrumbs from '../components/BreadCrumbs'
import Section from '../components/Blog/Blog-post-style'
import PreviewCompatibleImage from "../components/PreviewCompatibleImage";
import Tags from "../components/Blog/TagStyle";
import ArrowLine from '../img/arrowLine.svg'
import BlogRoll from '../components/BlogRoll'
import TitleDesHelmet from "../components/TitleDesHelmet";

export const BlogPostTemplate = ({
                                    helmet,
                                    location,
                                    title,
                                    image,
                                    content,
                                    contentComponent,
                                    tags,
                                    prevPost,
                                    nextPost
}) => {
  const PostContent = contentComponent || Content

  return (
      <Section>
          <div className='wrapper'>
          {helmet || ''}
            <div className="wrapper">
                {location &&
                    <Breadcrumbs
                        location={location}
                        crumbLabel={title}
                        crumbLabelParent="Блог"
                        crumbPathParent="/blog/"
                    />
                }
            </div>
                <PreviewCompatibleImage
                    imageInfo={{
                        image: image,
                    }}
                    className='main-image'
                />
                <h1>
                  {title}
                </h1>
                {tags && tags.length ? (
                    <Tags className="tags">
                      {tags.map(tag => (
                          <Link key={tag + `tag`} to={`/tags/${kebabCase(tag)}/`}>{tag}</Link>
                      ))}
                    </Tags>
                ) : null}
            <PostContent className='wrapper content' content={content} />
            <div className="pagination wrapper row">
                <Link className='prev' to={prevPost}>
                    <ArrowLine/>
                    Предыдущая статья
                </Link>
                <Link className='next' to={nextPost}>
                    Следующая статья
                    <ArrowLine/>
                </Link>
            </div>
        </div>
        <h4 className="wrapper">Вам может быть интересно:</h4>
        <BlogRoll className='blog-roll'/>
    </Section>
  )
}

BlogPostTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  description: PropTypes.string,
  title: PropTypes.string,
  helmet: PropTypes.object,
  image: PropTypes.object
}

const BlogPost = ({ data, pageContext, location }) => {
  const { markdownRemark: post } = data;

    return (
    <Layout location={location} local={pageContext.locale}>
      <BlogPostTemplate
        content={post.html}
        contentComponent={HTMLContent}
        description={post.frontmatter.description}
        helmet={
            <TitleDesHelmet
                title={post.frontmatter.title}
                description={post.frontmatter.description}
            />
        }
        location={location}
        tags={post.frontmatter.tags}
        title={post.frontmatter.title}
        image={post.frontmatter.featuredimage}
        nextPost={pageContext.next}
        prevPost={pageContext.prev}
      />
    </Layout>
  )
}

BlogPost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
    location: PropTypes.object
}

export default BlogPost

export const pageQuery = graphql`
  query BlogPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        description
        featuredimage{
            childImageSharp {
                fluid(maxWidth: 2000, quality: 100) {
                ...GatsbyImageSharpFluid
                }
            }
        }
        tags
      }
    }
  }
`
