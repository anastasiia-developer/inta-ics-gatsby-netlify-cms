import React, {Fragment} from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import Header from "../components/delivery/Header"
import {Section} from "./services"
import TemplateCommonComponent from "../components/TemplateCommonComponent";
import Article from "../components/mainPage/Article"
import FormFooter from '../components/Footer/FormFooter'
import FormFooterRu from '../components/Footer/FormFooter/index.ru'
import CalculateContainerHeader from "../components/CalculateContainerHeader"
import TitleDesHelmet from "../components/TitleDesHelmet"
import CalculateHeader from "../components/CalculateHeader";
import CalculateHeaderRu from "../components/CalculateHeader/index.ru";
import { DeliveryTemplate } from "./delivery"

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
                locale={locale}
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
            {location && header.buttons &&
                <CalculateContainerHeader/>
            }
            <Section
                sections={sections}
                locale={locale}
            />
            <TemplateCommonComponent locale={locale} destinations cargo clients reviews services/>
            {seoSections &&
            <Article seoSections={seoSections}/>
            }
        </Fragment>
    )
}

const InternationalDestinations = ({ data, location, pageContext }) => {
    const { frontmatter } = data.markdownRemark;
    const setting = {
        helmet:
            <TitleDesHelmet
                title={frontmatter.metaData && frontmatter.metaData.title && frontmatter.title}
                description={frontmatter.metaData && frontmatter.metaData.description && frontmatter.description}
            />
        ,
        crumbLabel: frontmatter.crumbLabel,
        crumbLabelParent: frontmatter.crumbLabelParent,
        header: frontmatter.header,
        title: frontmatter.title,
        description: frontmatter.description,
        location: location,
        locale: pageContext.locale,
        sections: frontmatter.sections,
        seoSections: frontmatter.seoSections
    };
    // const btnInSections = frontmatter.sections.some(section => section.button != null);
    return (
        <Layout local={pageContext.locale} location={{location, localePath:pageContext.localePath}}>
            {frontmatter.header.buttons ?
                <DeliveryTemplate
                    sectionText={frontmatter.sectionText}
                    {...setting}
                />
                :
                <InternationalDestinationsTemplate
                    {...setting}
                />
            }
            {pageContext.locale === 'ua' ?
                <FormFooter />
                :
                <FormFooterRu />
            }
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
        locale
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
                  fluid(maxWidth: 500, quality: 100) {
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
            button{
                link
                text
            }
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
        sectionText{
          text
          title
          image{
            childImageSharp {
                fluid(maxWidth: 1200, maxHeight: 30) {
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
`;
