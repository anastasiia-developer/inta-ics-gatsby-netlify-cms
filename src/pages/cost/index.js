import React, {Fragment} from "react";
import {graphql} from "gatsby";
import Layout from "../../components/Layout";
import Header from "../../components/delivery/Header";
import Sections from "../../components/delivery/Sections";
import Article from "../../components/mainPage/Article";
import Calculator from "../../components/Calculator";
import CalculatorRu from "../../components/Calculator/index.ru";
import FormFooter from '../../components/Footer/FormFooter'
import BarBckgImgSectionText from '../../components/BarBckgImgSectionText'
import TitleDesHelmet from "../../components/TitleDesHelmet";
import TemplateCommonComponent from "../../components/TemplateCommonComponent";

export const CostPageTemplate = ({
                                  helmet,
                                  title,
                                  description,
                                  location,
                                  header,
                                  locale,
                                  sections,
                                  seoSections,
                                  barBckgImg,
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
           />
            <Sections
                sections={sections}
            />
            {location &&
                <Fragment>
                    {
                        locale === 'ua' ?
                            <Calculator/>
                        :
                            <CalculatorRu/>
                    }
                    <BarBckgImgSectionText
                        image={barBckgImg}
                    />
                    <TemplateCommonComponent
                        locale={locale}
                        destinations
                        cargo
                        clients
                        reviews
                        services
                    />

                </Fragment>
            }
            <TemplateCommonComponent
                locale={locale}
                destinations
                cargo
                clients
                reviews
            />
            <Article seoSections={seoSections}/>
        </Fragment>
    )
};


const Index = ({ data, location, pageContext }) => {
    const { frontmatter } = data.markdownRemark;

    return(
        <Layout local={pageContext.locale} location={location}>
            <CostPageTemplate
                helmet={
                    <TitleDesHelmet
                        title={frontmatter.metaData ? frontmatter.metaData.title : frontmatter.title}
                        description={frontmatter.metaData ? frontmatter.metaData.description : frontmatter.description}
                    />
                }
                locale={pageContext.locale}
                title={frontmatter.title}
                description={frontmatter.description}
                location={location}
                header={frontmatter.header}
                sections={frontmatter.sections}
                seoSections={frontmatter.seoSections}
                barBckgImg={data.fileName}
            />
            <FormFooter locale={pageContext.locale}/>
        </Layout>
    )
}

export default Index;

export const pageQuery = graphql`
  query CostPageTemplate($locale: String) {
    markdownRemark(frontmatter: { pageKey: { eq: "cost-page" }, locale: { eq: $locale }}) {
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
    fileName: file(relativePath: { eq: "calculateBkg.png" }) {
      childImageSharp {
        fluid(maxWidth: 1200, maxHeight: 20) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;