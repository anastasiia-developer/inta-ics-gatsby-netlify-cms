import React, {Fragment} from "react";
import {graphql} from "gatsby";
import Layout from "../components/Layout";
import Sections from "../components/delivery/Sections";
import Cargo from "../components/mainPage/cargo";
import Destinations from "../components/Destinations";
import Clients from "../components/Clients";
import Reviews from "../components/Reviews";
import Article from "../components/mainPage/Article";
import FormFooter from '../components/Footer/FormFooter'
import News from "../components/mainPage/news";
import TemplateHeader from "../components/TemplateHeader";
import styled from "styled-components";
import CalculateContainerHeader from "../components/CalculateContainerHeader";

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
                                     title,
                                     description,
                                     location,
                                     header,
                                     sections,
                                      seoSections
                                 }) => {
    return(
        <Layout>
            <Header
                title={title}
                description={description}
                location={location}
                header={header}
                crumbLabel={title}
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
            <FormFooter/>
        </Layout>
    )
};


const SalesPage = ({ data, location }) => {
    const { frontmatter } = data.markdownRemark;

    return(
        <SalesPageTemplate
            title={frontmatter.title}
            description={frontmatter.description}
            location={location}
            header={frontmatter.header}
            sections={frontmatter.sections}
            seoSections={frontmatter.seoSections}
        />
    )
}

export default SalesPage;

export const pageQuery = graphql`
  query SalesPageTemplate {
    markdownRemark(frontmatter: { pageKey: { eq: "sales-page" } }) {
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