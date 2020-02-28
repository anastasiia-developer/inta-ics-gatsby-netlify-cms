import React, {Fragment} from "react";
import {graphql} from "gatsby";
import Layout from "../components/Layout";
import Sections from "../components/delivery/Sections";
import Cargo from "../components/mainPage/cargo";
import Destinations from "../components/Destinations";
import Clients from "../components/Clients";
import Reviews from "../components/Reviews";
import Article from "../components/mainPage/Article";
import Calculator from "../components/Calculator";
import FormFooter from '../components/Footer/FormFooter'
import News from "../components/mainPage/news";
import TemplateHeader from "../components/TemplateHeader";
import styled from "styled-components";
import CalculateHeader from "../components/delivery/CalculateHeader";

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

const CalculateContainer = styled.div`
    background: linear-gradient(98.88deg, #005BE4 4.62%, #4900E4 102.74%);
    padding-bottom: 3em;
`

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
                                      mainpitch
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
                <CalculateContainer>
                    <CalculateHeader />
                </CalculateContainer>
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
            <Article mainpitch={mainpitch}/>
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
            mainpitch={frontmatter.mainpitch}
        />
    )
}

export default SalesPage;

export const pageQuery = graphql`
  query SalesPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "sales-page" } }) {
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
        mainpitch {
          article
        }
      }
    }
  }
`;