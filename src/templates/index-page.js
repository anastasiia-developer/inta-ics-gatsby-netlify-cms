import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import Header from '../components/Header'
import Section from "../components/mainPage/section"
import About from "../components/mainPage/about"
import Calculator from "../components/mainPage/calculator"
import News from "../components/mainPage/news";

export const IndexPageTemplate = ({
  heading,
  mainpitch,
  description,
  intro,
  location,
  title,
  subheading,
  header,
  section,
  about,
  calculator
}) => (
  <Fragment>
    <Header
        subheading={subheading}
        title={title}
        header={header}
        location={location}
    />
    <Section section={section}/>
    <About about={about}/>
    <Calculator calculator={calculator}/>
    <News />
    {/*<section className="section section--gradient">*/}
    {/*  <div className="container">*/}
    {/*    <div className="section">*/}
    {/*      <div className="columns">*/}
    {/*        <div className="column is-10 is-offset-1">*/}
    {/*          <div className="content">*/}
    {/*            <div className="content">*/}
    {/*              <div className="tile">*/}
    {/*                <h1 className="title">{mainpitch.title}</h1>*/}
    {/*              </div>*/}
    {/*              <div className="tile">*/}
    {/*                <h3 className="subtitle">{mainpitch.description}</h3>*/}
    {/*              </div>*/}
    {/*            </div>*/}
    {/*            <div className="columns">*/}
    {/*              <div className="column is-12">*/}
    {/*                <h3 className="has-text-weight-semibold is-size-2">*/}
    {/*                  {heading}*/}
    {/*                </h3>*/}
    {/*                <p>{description}</p>*/}
    {/*              </div>*/}
    {/*            </div>*/}
    {/*            <Features gridItems={intro.blurbs} />*/}
    {/*            <div className="columns">*/}
    {/*              <div className="column is-12 has-text-centered">*/}
    {/*                <Link className="btn" to="/products">*/}
    {/*                  See all products*/}
    {/*                </Link>*/}
    {/*              </div>*/}
    {/*            </div>*/}
    {/*            <div className="column is-12">*/}
    {/*              <h3 className="has-text-weight-semibold is-size-2">*/}
    {/*                Latest stories*/}
    {/*              </h3>*/}
    {/*              <BlogRoll />*/}
    {/*              <div className="column is-12 has-text-centered">*/}
    {/*                <Link className="btn" to="/blog">*/}
    {/*                  Read more*/}
    {/*                </Link>*/}
    {/*              </div>*/}
    {/*            </div>*/}
    {/*          </div>*/}
    {/*        </div>*/}
    {/*      </div>*/}
    {/*    </div>*/}
    {/*  </div>*/}
    {/*</section>*/}
  </Fragment>
)

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  subheading: PropTypes.string,
  mainpitch: PropTypes.object,
  description: PropTypes.string,
  header: PropTypes.object,
  section: PropTypes.object,
  about: PropTypes.object,
  calculator: PropTypes.object,
  intro: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
};

const IndexPage = ({ data, location }) => {
  const { frontmatter } = data.markdownRemark;
  return (
    <Layout>
      <IndexPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        heading={frontmatter.heading}
        subheading={frontmatter.subheading}
        mainpitch={frontmatter.mainpitch}
        description={frontmatter.description}
        intro={frontmatter.intro}
        location={location}
        header={frontmatter.header}
        section={frontmatter.section}
        about={frontmatter.about}
        calculator={frontmatter.calculator}
      />
    </Layout>
  )
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
  location: PropTypes.object
}

export default IndexPage

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        header{
          slide{
            images{
              image{
                childImageSharp {
                  fluid(maxWidth: 300, quality: 100) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
              alt
            }
            scopeInformation{
              image{
                 publicURL
              }
              text
            }
            buttons{
              text
              link
            }
          }
        }
        section{
          title
          subTitle
          blocks{
            image{
              childImageSharp {
                fluid(maxWidth: 100, quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            title
          }
        }
        about {
          title
          text
          image{
            childImageSharp {
              fluid(maxWidth: 300, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        calculator {
          title
          constituents {
            title
            category {
              nameCategory
              price
              image{
                childImageSharp {
                  fluid(maxWidth: 65, quality: 100) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
        }
        heading
        subheading
        mainpitch {
          title
          description
        }
        description
        intro {
          blurbs {
            image {
              childImageSharp {
                fluid(maxWidth: 240, quality: 64) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            text
          }
          heading
          description
        }
      }
    }
  }
`
