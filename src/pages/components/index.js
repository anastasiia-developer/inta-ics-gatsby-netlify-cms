import React from 'react'
import { graphql } from 'gatsby'
import styled from "styled-components";
import Layout from '../../components/Layout'
import CalculatorTemplate from '../../components/Calculator/CalculatorTemplate'
import StorageTemplate from '../../components/Storage/StorageTemplate'
import DestinationsTemplate from '../../components/Destinations/DestinationsTemplate'
import ClientsTemplate from '../../components/Clients/ClientsTemplate'
import ReviewsTemplate from "../../components/Reviews/ReviewsTemplate"
import CalculateHeaderTemplate from "../../components/CalculateHeader/CalculateHeaderTemplate"
import MainPopupTemplate from "../../components/Popups/MainPopup/MainPopupTemplate";
import PopupThanksTemplate from "../../components/Popups/PopupThanks/PopupThanksTemplate";

const Style = styled.div`
    .overlay{
        position: relative;
        .popup{
            position: relative;
        }
    }
`;

export const ComponentsCommonTemplate = ({
                                      calculateHeader,
                                      mainPopup,
                                      calculator,
                                      storage,
                                      destinations,
                                      clients,
                                      popupThanks,
                                      reviews}) => (
    <Style>
        <MainPopupTemplate data={mainPopup}/>
        <CalculateHeaderTemplate data={calculateHeader} admin/>
        <CalculatorTemplate data={calculator}/>
        <StorageTemplate storage={storage}/>
        <DestinationsTemplate destinations={destinations}/>
        <ClientsTemplate clients={clients}/>
        <ReviewsTemplate reviews={reviews}/>
        <PopupThanksTemplate data={popupThanks}/>
    </Style>
);

const Index = ({ data, location, pageContext }) => {
    // const { frontmatter } = data.markdownRemark;

    return (
        <Layout location={location} local={pageContext.locale}>
            {/*<ComponentsCommonTemplate*/}
            {/*    calculateHeader={frontmatter.calculateHeader}*/}
            {/*    calculator={frontmatter.calculator}*/}
            {/*    storage={frontmatter.storage}*/}
            {/*    destinations={frontmatter.destinations}*/}
            {/*    clients={frontmatter.clients}*/}
            {/*    reviews={frontmatter.reviews}*/}
            {/*    mainPopup={frontmatter.mainPopup}*/}
            {/*    popupThanks={frontmatter.popupThanks}*/}
            {/*/>*/}
        </Layout>
    )
}


export default Index

export const pageQuery = graphql`
  query ComponentsCommon($locale: String) {
    markdownRemark(frontmatter: { pageKey: { eq: "components-common" }, locale: { eq: $locale } }) {
      frontmatter {
        title
        description
        calculateHeader {
            title
            description
            from
            to
            toCountry
            weight
            phone
            email
            comment
            btn
        }
        calculator {
          title
          constituents {
            title
            category {
              nameCategory
              price
              image{
                childImageSharp {
                  fluid(maxWidth: 65) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
          resultBlock{
            title
            btnText
            resultText
            note
          }
        }
        storage{
            country
            flag{
                publicURL
            }
        }
        destinations {
            image{
                childImageSharp {
                    fluid(maxWidth: 1000) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            countries{
                country
                flag{
                  publicURL
                  name
                }
            }
        }
        clients{
          image{
              childImageSharp {
                fluid(maxWidth: 200) {
                  ...GatsbyImageSharpFluid
                }
              }
          }
        }
        reviews{
          name
          text
          source{
            name
            url    
          }                            
        }
        mainPopup{
          title
          description
          subTitle
          btn
        }
        popupThanks{
            title
            subTitle
            description
            bonus
            bonusTitle
            btn
            btnLink
            image{
                childImageSharp {
                    fluid(maxWidth: 600) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }    
        }
      }
    }
  }
`;
