import React, {Fragment} from "react";
import {graphql} from "gatsby";
import Layout from "../components/Layout";
import Sections from "../components/delivery/Sections";
import Cargo from "../pages/index/cargo";
import Destinations from "../components/Destinations";
import Clients from "../components/Clients";
import Reviews from "../components/Reviews";
import Article from "../pages/index/Article";
import FormFooter from '../components/Footer/FormFooter'
import News from "../pages/index/news";
import TemplateHeader from "../components/TemplateHeader";
import styled from "styled-components";
import CalculateContainerHeader from "../components/CalculateContainerHeader";
import TitleDesHelmet from "../components/TitleDesHelmet";

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
                                      seoSections
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
            {location &&
            <Fragment>
                <News/>
                <Destinations/>
            </Fragment>
            }
            <Cargo/>
            {location &&
                <Clients/>
            }
            <Reviews/>
            <Article seoSections={seoSections}/>
        </Fragment>
    )
};


const Promo = ({ data, location, pageContext }) => {
    const { frontmatter } = data.markdownRemark;

    return(
        <Layout location={location} local={pageContext.locale}>
        <SalesPageTemplate
            helmet={
                <TitleDesHelmet
                    title={frontmatter.title}
                    description={frontmatter.description}
                />
            }
            title={frontmatter.title}
            description={frontmatter.description}
            location={location}
            header={frontmatter.header}
            sections={frontmatter.sections}
            seoSections={frontmatter.seoSections}
        />
        <FormFooter locale={pageContext.locale}/>
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