import React, {Fragment} from "react";
import {graphql} from "gatsby";
import Layout from "../components/Layout";
import Header from "../components/delivery/Header";
import Sections from "../components/delivery/Sections";
import Cargo from "../components/mainPage/cargo";
import Destinations from "../components/mainPage/destinations";
import Clients from "../components/mainPage/Clients";
import Reviews from "../components/mainPage/Reviews";
import Article from "../components/mainPage/Article";
import Calculator from "../components/Calculator";

export const CostPageTemplate = ({
                                  title,
                                  description,
                                  location,
                                  header,
                                  sections,
                                  mainpitch
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
                    <Destinations/>
                </Fragment>
            }
            <Cargo/>
            {location &&
                <Clients/>
            }
            <Reviews/>
            <Article mainpitch={mainpitch}/>
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
            mainpitch={frontmatter.mainpitch}
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
        mainpitch {
          article
        }
      }
    }
  }
`;