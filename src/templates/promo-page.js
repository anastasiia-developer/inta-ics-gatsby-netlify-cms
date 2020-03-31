import React, {Fragment} from "react";
import {graphql} from "gatsby";
import Layout from "../components/Layout";
import Sections from "../components/delivery/Sections";
import Article from "../components/mainPage/Article";
import FormFooter from '../components/Footer/FormFooter'
import FormFooterRu from '../components/Footer/FormFooter/index.ru'
import TemplateHeader from "../components/TemplateHeader";
import styled from "styled-components";
import CalculateContainerHeader from "../components/CalculateContainerHeader";
import TitleDesHelmet from "../components/TitleDesHelmet";
import TemplateCommonComponent from "../components/TemplateCommonComponent"



const Header = styled(TemplateHeader)`
    position: relative;
    @media(max-aspect-ratio: 3/3), (max-height: 500px){    
        min-height: auto;
        padding-bottom: 1em;
    }
    h1, h3{
        display: none;
    }
    .wrapper{
        flex-direction: column;
    }
    .bckg-parallax-container{
        width: 100%;
    }
`;
const Section = styled(Sections)`
    &:nth-child(odd){
        flex-direction: row-reverse;
    }
`;

export const SalesPageTemplate = ({
                                     helmet,
                                     title,
                                     description,
                                     location,
                                     header,
                                     sections,
                                     seoSections,
                                     locale
                                 }) => {
    return(
        <Fragment>
            {helmet || ''}
            <Header
                title={title}
                description={description}
                location={location}
                header={header}
                crumbLabel={title}
                crumbLabelParent='Акции'
            />
            {location &&
                <CalculateContainerHeader/>
            }
            <Section
                sections={sections}
            />
            <TemplateCommonComponent locale={locale} destinations cargo clients reviews news/>
            <Article seoSections={seoSections}/>
        </Fragment>
    )
};


const Promo = ({ data, location, pageContext }) => {
    const { frontmatter } = data.markdownRemark;

    return(
        <Layout local={pageContext.locale} location={{location, localePath:pageContext.localePath}}>
        <SalesPageTemplate
            helmet={
                <TitleDesHelmet
                    title={frontmatter.metaData && frontmatter.metaData.title && frontmatter.title}
                    description={frontmatter.metaData && frontmatter.metaData.description && frontmatter.description}
                />
            }
            title={frontmatter.title}
            description={frontmatter.description}
            location={location}
            header={frontmatter.header}
            sections={frontmatter.sections}
            seoSections={frontmatter.seoSections}
            locale={pageContext.locale}
        />
        {pageContext.locale === 'ua' ?
            <FormFooter />
            :
            <FormFooterRu />
        }
        </Layout>
    )
}

export default Promo;

export const pageQuery = graphql`
  query SalesPageTemplate($locale: String) {
    markdownRemark(frontmatter: { templateKey: { eq: "promo-page" }, locale: { eq: $locale } }) {
      frontmatter{
        title
        description
        metaData{
            title
            description
        }
        header{
            images{
              image{
                childImageSharp {
                  fluid(maxWidth: 1100) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
        }
        sections{
            text
            title
            image{
                childImageSharp {
                  fluid(maxWidth: 900) {
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