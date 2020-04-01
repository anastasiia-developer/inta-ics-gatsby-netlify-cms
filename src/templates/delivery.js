import React, {Fragment} from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import Header from "../components/delivery/Header"
import CalculateHeader from "../components/CalculateHeader"
import CalculateHeaderRu from "../components/CalculateHeader/index.ru"
import Sections from "../components/delivery/Sections"
import SectionText from "../components/delivery/SectionText"
import Article from "../components/mainPage/Article";
import FormFooter from '../components/Footer/FormFooter'
import FormFooterRu from '../components/Footer/FormFooter/index.ru'
import CalculateContainerHeader from "../components/CalculateContainerHeader";
import BarBckgImgSectionText from "../components/BarBckgImgSectionText"
import TitleDesHelmet from "../components/TitleDesHelmet";
import TemplateCommonComponent from "../components/TemplateCommonComponent"

export const DeliveryTemplate = ({
                                     helmet,
                                     crumbLabel,
                                     crumbLabelParent,
                                     header,
                                     title,
                                     description,
                                     location,
                                     sections,
                                     sectionText,
                                     seoSections,
                                     locale}) => {
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
                <CalculateContainerHeader locale={locale}/>
            }
            <Sections
                sections={sections}
                locale={locale}
            />
            {sectionText &&
                <SectionText
                    sectionText={sectionText}
                />
            }
            {sectionText && sectionText.image &&
                <BarBckgImgSectionText
                    image={sectionText.image}
                />
            }
            <TemplateCommonComponent locale={locale} destinations cargo clients reviews services/>
            <Article seoSections={seoSections}/>
        </Fragment>
    )
}

DeliveryTemplate.propTypes = {
    header: PropTypes.shape({
        slider: PropTypes.array,
    }),
    description: PropTypes.string,
    title: PropTypes.string,
}

const Delivery = ({ data, location, pageContext }) => {
    const { frontmatter } = data.markdownRemark;

    return (
        <Layout local={pageContext.locale} location={{location, localePath:pageContext.localePath}}>
            <DeliveryTemplate
                helmet={
                    <TitleDesHelmet
                        title={frontmatter.metaData && frontmatter.metaData.title && frontmatter.title}
                        description={frontmatter.metaData && frontmatter.metaData.description && frontmatter.description}
                    />
                }
                crumbLabel={frontmatter.crumbLabel}
                crumbLabelParent={frontmatter.crumbLabelParent}
                header={frontmatter.header}
                title={frontmatter.title}
                description={frontmatter.description}
                location={location}
                locale={pageContext.locale}
                sections={frontmatter.sections}
                sectionText={frontmatter.sectionText}
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

Delivery.propTypes = {
    data: PropTypes.shape({
        markdownRemark: PropTypes.object,
    }),
    location: PropTypes.object
}

export default Delivery

export const pageQuery = graphql`
  query DeliveryID($id: String!, $locale: String) {
    markdownRemark(id: { eq: $id }, frontmatter: { locale: { eq: $locale } }) {
      id
      frontmatter {
        title
        description
        crumbLabel
        crumbLabelParent
        metaData{
            title
            description
        }
        header{
            images{
              image{
                childImageSharp {
                  fluid(maxWidth: 700, quality: 100) {
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
