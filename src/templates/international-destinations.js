import React, {Fragment} from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import Header from "../components/delivery/Header"
import {Section} from "./services"
import OurServices from '../components/delivery/OurServices'
import Destinations from "../components/Destinations"
import Cargo from "../components/mainPage/cargo"
import Clients from "../components/Clients"
import Reviews from "../components/Reviews"
import Article from "../components/mainPage/Article"
import FormFooter from '../components/Footer/FormFooter'
import CalculateContainerHeader from "../components/CalculateContainerHeader"
import TitleDesHelmet from "../components/TitleDesHelmet"
import CalculateHeaderRu from "../components/CalculateHeader/index.ru";
import CalculateHeader from "../components/CalculateHeader";

export const InternationalDestinationsTemplate = ({
                                     helmet,
                                     header,
                                     locale,
                                     crumbLabel,
                                     crumbLabelParent,
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
                crumbLabel={crumbLabel}
                crumbLabelParent={crumbLabelParent}
                crumbPathParent={false}
                children={location && !header.buttons &&
                locale === 'ua' &&
                    <CalculateHeader />
                    &&
                    <CalculateHeaderRu />
                }
            />
            {location && header.buttons &&
                <CalculateContainerHeader/>
            }
            <Section
                sections={sections}
            />
            <OurServices locale={locale}/>
            {locale &&
                <Destinations/>
            }
            <Cargo/>
            {locale &&
                <Fragment>
                    <Clients/>
                    <Reviews/>
                </Fragment>
            }
            {seoSections &&
            <Article seoSections={seoSections}/>
            }
        </Fragment>
    )
}

const InternationalDestinations = ({ data, location, pageContext }) => {
    const { frontmatter } = data.markdownRemark;

    return (
        <Layout local={pageContext.locale} location={location}>
            <InternationalDestinationsTemplate
                helmet={
                    <TitleDesHelmet
                        title={frontmatter.metaData && frontmatter.metaData.title && frontmatter.title}
                        description={frontmatter.metaData && frontmatter.metaData.description && frontmatter.description}
                    />
                }
                header={frontmatter.header}
                crumbLabel={frontmatter.crumbLabel}
                crumbLabelParent={frontmatter.crumbLabelParent}
                title={frontmatter.title}
                description={frontmatter.description}
                location={location}
                locale={pageContext.locale}
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
        metaData{
            title
            description
        }
        crumbLabel
        crumbLabelParent
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
