import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import Header from "../components/mainPage/header"
import TemplateHeader from "../components/TemplateHeader";
import Section from "../components/mainPage/section"
import About from "../components/mainPage/about"
import Calculator from "../components/Calculator"
import News from "../components/mainPage/news"
import Destinations from "../components/Destinations"
import Cargo from "../components/mainPage/cargo"
import Clients from "../components/Clients"
import Reviews from "../components/Reviews"
import Article from "../components/mainPage/Article"

import FormFooter from '../components/Footer/FormFooter'
import Slider from "react-slick";
import TitleDesHelmet from "../components/TitleDesHelmet";

const settings = {
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    draggable: true,
    swipe: true,
    speed: 1000,
    autoplaySpeed:  5000,
    lazyLoad: true
};

export const IndexPageTemplate = ({
  seoSections,
  description,
  helmet,
  location,
  title,
  header,
  section,
  about
}) => (
  <Fragment>
      {helmet || ''}
      <Header>
        <Slider {...settings}>
            {header.slide.map((item, index) =>
                <TemplateHeader
                    key={index}
                    description={description}
                    title={title}
                    header={item}
                    location={location}
                    storeBtn
                />
            )}
        </Slider>
    </Header>
    <Section section={section}/>
    <About
      title={about.title}
      image={about.image}
      text={about.text}
    />
    <Calculator/>
    <News />
    <Destinations/>
    <Cargo/>
    <Clients/>
    <Reviews/>
    <Article seoSections={seoSections}/>
  </Fragment>
)

IndexPageTemplate.propTypes = {
  title: PropTypes.string,
  seoSections: PropTypes.object,
  description: PropTypes.string,
  header: PropTypes.object,
  section: PropTypes.object,
  about: PropTypes.shape({
      title:PropTypes.string,
      image:PropTypes.object,
      text:PropTypes.string
  }),
};

const Index = ({ data, location, pageContext }) => {
  const { frontmatter } = data.markdownRemark;
  return (
    <Layout local={pageContext.locale} location={location}>
      <IndexPageTemplate
        helmet={
          <TitleDesHelmet
              title={frontmatter.metaData && frontmatter.metaData.title || frontmatter.title}
              description={frontmatter.metaData && frontmatter.metaData.description || frontmatter.description}
          />
        }
        title={frontmatter.title}
        description={frontmatter.description}
        metaData={frontmatter.metaData}
        location={location}
        header={frontmatter.header}
        section={frontmatter.section}
        about={frontmatter.about}
        seoSections={frontmatter.seoSections}
      />
      <FormFooter locale={pageContext.locale}/>
    </Layout>
  )
}

Index.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
  location: PropTypes.object
}

export default Index

export const pageQuery = graphql`
  query IndexPageTemplate($locale: String) {
    markdownRemark(frontmatter: { pageKey: { eq: "index-page" }, locale: { eq: $locale } }) {
      frontmatter {
        title
        description
        metaData{
            title
            description
        }
        header{
          slide{
            images{
              image{
                childImageSharp {
                  fluid(maxWidth: 300, quality: 50) {
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
                fluid(maxWidth: 100) {
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
              fluid(maxWidth: 800) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        seoSections{
          title
          sections{
            text
            image{
                childImageSharp {
                  fluid(maxWidth: 500, quality: 100) {
                    ...GatsbyImageSharpFluid
                  }
                }
            }
          }
        }
      }
    }
  }
`
