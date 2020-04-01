import React, {Fragment} from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import Header from "../components/delivery/Header"
import CalculateHeader from "../components/CalculateHeader"
import CalculateHeaderRu from "../components/CalculateHeader/index.ru"
import {Section} from "./services"
import Article from "../components/mainPage/Article"
import FormFooter from '../components/Footer/FormFooter'
import FormFooterRu from '../components/Footer/FormFooter/index.ru'
import CalculateContainerHeader from "../components/CalculateContainerHeader"
import TitleDesHelmet from "../components/TitleDesHelmet"
import TemplateCommonComponent from "../components/TemplateCommonComponent"


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
                    locale={locale}
                    crumbLabel={crumbLabel}
                    crumbLabelParent={crumbLabelParent}
                    crumbPathParent={false}
                    children={location && !header.buttons &&
                    <Fragment>
                        {locale === 'ua' ?
                            <CalculateHeader/>
                            :
                            <CalculateHeaderRu/>
                        }
                    </Fragment>
                    }
                />
            }
            {location && header.buttons &&
                <CalculateContainerHeader/>
            }
            <Section
                sections={sections}
            />
            <TemplateCommonComponent
                locale={locale}
                destinations
                cargo
                clients
                reviews
                services/>
            {seoSections &&
                <Article seoSections={seoSections}/>
            }
        </Fragment>
    )
}

const InternationalCargo = ({ data, location, pageContext }) => {
    const { frontmatter } = data.markdownRemark;

    return (
        <Layout local={pageContext.locale} location={{location, localePath:pageContext.localePath}}>
            <InternationalCargoTemplate
                helmet={
                    <TitleDesHelmet
                        title={frontmatter.metaData && frontmatter.metaData.title && frontmatter.title}
                        description={frontmatter.metaData && frontmatter.metaData.description && frontmatter.description}
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
            {pageContext.locale === 'ua' ?
                <FormFooter />
                :
                <FormFooterRu />
            }
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
        metaData{
            title
            description
        }
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
