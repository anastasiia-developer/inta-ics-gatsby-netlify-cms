import React, {Fragment} from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
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
import TitleDesHelmet from "../components/TitleDesHelmet"

export const InternationalCargoTemplate = ({
                                            helmet,
                                            crumbLabelParent,
                                            crumbLabel,
                                            header,
                                            locale,
                                            title,
                                            description,
                                            location,
                                            sections,
                                            seoSections}) => {

    return (
        <Fragment>
            {helmet || ''}
            {title &&
                <Header
                    description={description}
                    title={title}
                    header={header}
                    location={location}
                    crumbLabel={crumbLabel}
                    crumbLabelParent={crumbLabelParent}
                    crumbPathParent={false}
                    children={location && !header.buttons &&  <CalculateHeader/>}
                />
            }
            {location && header.buttons &&
                <CalculateContainerHeader/>
            }
            <Section
                sections={sections}
            />
            <OurServices locale={locale}/>
            {locale &&
                <Destinations />
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

const InternationalCargo = ({ data, location, pageContext }) => {
    const { frontmatter } = data.markdownRemark;

    return (
        <Layout local={pageContext.locale} location={location}>
            <InternationalCargoTemplate
                helmet={
                    <TitleDesHelmet
                        title={frontmatter.title}
                        description={frontmatter.description}
                    />
                }
                locale={pageContext.locale}
                crumbLabel={frontmatter.crumbLabel}
                crumbLabelParent={frontmatter.crumbLabelParent}
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

export default InternationalCargo

export const pageQuery = graphql`
  query InternationalCargo($id: String!, $locale: String) {
    markdownRemark(id: { eq: $id }, frontmatter: { locale: { eq: $locale } }) {
      id
      frontmatter {
        title
        description
        crumbLabelParent
        crumbLabel
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