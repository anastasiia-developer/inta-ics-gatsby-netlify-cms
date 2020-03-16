import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import Header from "./index/header"
import TemplateHeader from "../components/TemplateHeader";
import Section from "./index/section"
import About from "./index/about"
import Calculator from "../components/Calculator"
import News from "./index/news"
import Destinations from "../components/Destinations"
import Cargo from "./index/cargo"
import Clients from "../components/Clients"
import Reviews from "../components/Reviews"
import Article from "./index/Article"
import { ButtonGroup, ResponsiveCarousel } from "../components/CommonCarousel";
import Carousel from "react-multi-carousel";
import FormFooter from '../components/Footer/FormFooter'

export const IndexPageTemplate = ({
  seoSections,
  description,
  location,
  title,
  header,
  section,
  about
}) => (
  <Fragment>
    <Header>
      <Carousel
          containerClass="slider"
          sliderClass="row"
          ssr={true}
          arrows={false}
          autoPlay
          autoPlaySpeed={5000}
          customButtonGroup={<ButtonGroup />}
          slidesToSlide={1}
          responsive={ResponsiveCarousel(1,1)}
          showDots
      >
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
      </Carousel>
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
        title={frontmatter.title}
        description={frontmatter.description}
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
