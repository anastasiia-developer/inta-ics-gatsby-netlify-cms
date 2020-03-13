import React, {Fragment} from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import Helmet from "react-helmet"
import Header from "../components/delivery/Header"
import CalculateHeader from "../components/delivery/CalculateHeader"
import {Section} from "./services"
import OurServices from '../components/delivery/OurServices'
import Destinations from "../components/Destinations"
import Cargo from "../components/mainPage/cargo"
import Clients from "../components/Clients"
import Reviews from "../components/Reviews"
import Article from "../components/mainPage/Article"
import FormFooter from '../components/Footer/FormFooter'
import CalculateContainerHeader from "../components/CalculateContainerHeader"

export const InternationalDestinationsTemplate = ({
                                     helmet,
                                     header,
                                     title,
                                     description,
                                     location,
                                     sections,
                                     seoSections}) => {
    return (
        <Fragment>
            {helmet || ''}
            <Header
                description={description}
                title={title}
                header={header}
                location={location}
                crumbLabel={title}
                crumbLabelParent="Доставка"
                crumbPathParent={false}
                children={location && !header.buttons &&  <CalculateHeader/>}
            />
            {location && header.buttons &&
            <CalculateContainerHeader/>
            }
            <Section
                sections={sections}
            />
            <OurServices/>
            <Destinations />
            <Cargo/>
            <Clients/>
            <Reviews/>
            <Article seoSections={seoSections}/>
        </Fragment>
    )
}

const InternationalDestinations = ({ data, location, pageContext }) => {
    const { frontmatter } = data.markdownRemark;

    return (
        <Layout local={pageContext.locale} location={location}>
            <InternationalDestinationsTemplate
                helmet={
                    <Helmet titleTemplate="%s">
                        <title>{`${frontmatter.title}`}</title>
                        <meta
                            name="description"
                            content={`${frontmatter.description}`}
                        />
                    </Helmet>
                }
                header={frontmatter.header}
                title={frontmatter.title}
                description={frontmatter.description}
                location={location}
                sections={frontmatter.sections}
                seoSections={frontmatter.seoSections}
            />
            <FormFooter locale={pageContext.locale}/>
        </Layout>
    )
}

export default InternationalDestinations

export const pageQuery = graphql`
  query InternationalDestinations($id: String!, $locale: String) {
    markdownRemark(id: { eq: $id }, frontmatter: { locale: { eq: $locale } }) {
      id
      frontmatter {
        title
        description
        header{
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
        sections{
            text
            title
            image{
                childImageSharp {
                  fluid(maxWidth: 900, quality: 100) {
                    ...GatsbyImageSharpFluid
                  }
                }
            }
            list{
                title
                image{
                    publicURL
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
`;
