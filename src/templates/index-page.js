import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import Section from "../components/mainPage/section"
import About from "../components/mainPage/about"
import Calculator from "../components/mainPage/calculator"
import News from "../components/mainPage/news"
import Destinations from "../components/mainPage/destinations"
import Cargo from "../components/mainPage/cargo"
import Clients from "../components/mainPage/Clients"
import Reviews from "../components/mainPage/Reviews"
import Header from "../components/mainPage/header"
import Article from "../components/mainPage/Article"



export const IndexPageTemplate = ({
  mainpitch,
  description,
  location,
  title,
  header,
  section,
  about,
  calculator,
}) => (
  <Fragment>
    <Header
        description={description}
        title={title}
        header={header}
        location={location}
        crumbLabel={false}
        storeBtn
    />
    <Section section={section}/>
    <About
      title={about.title}
      image={about.image}
      text={about.text}
      />
    <Calculator calculator={calculator}/>
    <News />
      {location &&
        <Destinations/>
      }
    <Cargo/>
      {location &&
          <Clients/>
      }
    <Reviews/>
    <Article mainpitch={mainpitch}/>
  </Fragment>
)

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  mainpitch: PropTypes.object,
  description: PropTypes.string,
  header: PropTypes.object,
  section: PropTypes.object,
  about: PropTypes.shape({
      title:PropTypes.string,
      image:PropTypes.object,
      text:PropTypes.string
  }),
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
        description
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
        mainpitch {
          article
        }
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
