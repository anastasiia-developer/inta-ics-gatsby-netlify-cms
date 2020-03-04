import React, {Fragment} from "react";
import {graphql} from "gatsby";
import Layout from "../components/Layout";
import Header from "../components/delivery/Header";
import Sections from "../components/delivery/Sections";
import Cargo from "../components/mainPage/cargo";
import Destinations from "../components/Destinations";
import Clients from "../components/Clients";
import Reviews from "../components/Reviews";
import Article from "../components/mainPage/Article";
import Calculator from "../components/Calculator";
import FormFooter from '../components/Footer/FormFooter'
import BarBckgImgSectionText from '../components/BarBckgImgSectionText'

export const CostPageTemplate = ({
                                  title,
                                  description,
                                  location,
                                  header,
                                  sections,
                                  seoSections,
                                  barBckgImg
                                 }) => {
    return(
        <Layout>
           <Header
            title={title}
            description={description}
            location={location}
            header={header}
           />
            <Sections
                sections={sections}
            />
            {location &&
                <Fragment>
                    <Calculator/>
                    <BarBckgImgSectionText
                        image={barBckgImg}
                    />
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


const CostPage = ({ data, location }) => {
    const { frontmatter } = data.markdownRemark;

    return(
        <CostPageTemplate
            title={frontmatter.title}
            description={frontmatter.description}
            location={location}
            header={frontmatter.header}
            sections={frontmatter.sections}
            seoSections={frontmatter.seoSections}
            barBckgImg={data.fileName}

        />
    )
}

export default CostPage;

export const pageQuery = graphql`
  query CostPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "cost-page" } }) {
      frontmatter{
        title
        description
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