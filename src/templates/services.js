import React from "react";
import {graphql} from "gatsby";
import Layout from "../components/Layout";
import Sections from "../components/delivery/Sections";
import Cargo from "../components/mainPage/cargo";
import Destinations from "../components/Destinations";
import Clients from "../components/Clients";
import Reviews from "../components/Reviews";
import Article from "../components/mainPage/Article";
import FormFooter from '../components/Footer/FormFooter'
import TemplateHeader from "../components/TemplateHeader";
import styled from "styled-components";
import CalculateContainerHeader from "../components/CalculateContainerHeader";
import OurServices from "../components/delivery/OurServices";
import Table from '../pages/services/Table';

const Section = styled(Sections)`
    background: #F6F6F6;
    .description h2{
        color: #393939;
    }
    .gatsby-image-wrapper{
        width: 50%;
        @media(max-aspect-ratio: 3/3), (max-height: 500px){    
            width: 100%;
        }
    }
    .custom-list {
        padding-left: 0;
        .row{
            align-items: flex-start;
            padding-bottom: 1.5em;
        }
        img{
            width: 1.5em;
            margin: .5em 1em 0 0;
        }
    }
    ul{
        font-weight: 400;
    }
    &:nth-child(odd){
        flex-direction: row-reverse;
        @media(max-aspect-ratio: 3/3), (max-height: 500px){    
            flex-direction: column-reverse;
        }
    }
`;

export const ServicesPageTemplate = ({
                                      title,
                                      description,
                                      location,
                                      header,
                                      sections,
                                      seoSections,
                                      table
                                  }) => {
    return(
        <Layout>
            <TemplateHeader
                title={title}
                description={description}
                location={location}
                header={{logo: true, arrow: true, ...header}}
                crumbLabel={title}
                crumbLabelParent="Услуги"
            />
            {location &&
                <CalculateContainerHeader/>
            }
            {title === 'Поиск и проверка поставщика' &&
                <Table/>
            }
            <Section
                sections={sections}
                children={true}
            />
            <OurServices/>
            {location &&
                <Destinations/>
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


const ServicesPage = ({ data, location }) => {
    const { frontmatter } = data.markdownRemark;
    return(
        <ServicesPageTemplate
            title={frontmatter.title}
            description={frontmatter.description}
            location={location}
            header={frontmatter.header}
            sections={frontmatter.sections}
            seoSections={frontmatter.seoSections}
        />
    )
}

export default ServicesPage;

export const pageQuery = graphql`
  query ServicesPageTemplate($id: String!) {
    markdownRemark(id: { eq: $id }) {
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