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
import Table from '../components/Table';
import TitleDesHelmet from "../components/TitleDesHelmet";
import TemplateCommonComponent from "../components/TemplateCommonComponent";

export const Section = styled(Sections)`
    background: #F6F6F6;
    flex-direction: row-reverse;
    padding: 2em 0;
    @media(max-aspect-ratio: 3/3), (max-height: 500px){    
        flex-direction: column-reverse;
    }
    &:nth-child(even){
        flex-direction: row-reverse;
        background: #F6F6F6;
    }
    .description h2{
        color: #393939;
    }
    .gatsby-image-wrapper{
        width: 50%;
        @media(max-aspect-ratio: 3/3), (max-height: 500px){    
            width: 100%;
        }
    }
    .custom-list{
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
    
`;

export const ServicesPageTemplate = ({
                                    helmet,
                                    title,
                                    description,
                                    location,
                                    header,
                                    sections,
                                    seoSections,
                                    locale,
                                    crumbLabelParent,
                                    crumbLabel,
                                    table
                                  }) => {
    return(
       <Fragment>
           {helmet || ''}
            <TemplateHeader
                title={title}
                description={description}
                location={location}
                header={{logo: true, arrow: true, ...header}}
                crumbLabel={crumbLabel}
                crumbLabelParent={crumbLabelParent}
            />
            {location &&
                <CalculateContainerHeader locale={locale}/>
            }
            {table &&
                <Table table={table}/>
            }
            <Section
                sections={sections}
            />
            <TemplateCommonComponent locale={locale} destinations cargo clients reviews services/>
           {seoSections &&
                <Article seoSections={seoSections}/>
           }
       </Fragment>
    )
};


const ServicesPage = ({ data, location, pageContext }) => {
    const { frontmatter } = data.markdownRemark;

    return(
        <Layout
            local={pageContext.locale}
            location={{location, localePath:pageContext.localePath}}>
            <ServicesPageTemplate
                helmet={
                    <TitleDesHelmet
                        title={frontmatter.metaData && frontmatter.metaData.title && frontmatter.title}
                        description={frontmatter.metaData && frontmatter.metaData.description && frontmatter.description}
                    />
                }
                title={frontmatter.title}
                description={frontmatter.description}
                location={location}
                locale={pageContext.locale}
                header={frontmatter.header}
                sections={frontmatter.sections}
                seoSections={frontmatter.seoSections}
                crumbLabel={frontmatter.crumbLabel}
                crumbLabelParent={frontmatter.crumbLabelParent}
                table={frontmatter.table}
            />
            {pageContext.locale === 'ua' ?
                <FormFooter />
                :
                <FormFooterRu />
            }
        </Layout>
    )
}

export default ServicesPage;

export const pageQuery = graphql`
  query ServicesPageTemplate($id: String!, $locale: String) {
    markdownRemark(id: { eq: $id }, frontmatter: { locale: { eq: $locale } }) {
      frontmatter{
        title
        description
        crumbLabelParent
        crumbLabel
        metaData{
            title
            description
        }
        table{
            head{
                name
                image{
                    childImageSharp {
                      fluid(maxWidth: 50) {
                        ...GatsbyImageSharpFluid
                      }
                    }
                }
            }
            body{
                column{
                    value
                }
            }
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