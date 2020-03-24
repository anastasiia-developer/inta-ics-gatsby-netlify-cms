import React, {Fragment} from 'react'
import { graphql } from 'gatsby'
import Layout from '../../components/Layout'
import CalculatorTemplate from '../../components/Calculator/CalculatorTemplate'
import StorageTemplate from '../../components/Storage/StorageTemplate'
import DestinationsTemplate from '../../components/Destinations/DestinationsTemplate'
import ClientsTemplate from '../../components/Clients/ClientsTemplate'
import ReviewsTemplate from "../../components/Reviews/ReviewsTemplate"
import CalculateHeaderTemplate from "../../components/CalculateHeader/CalculateHeaderTemplate"
import MainPopupTemplate from "../../components/Popups/MainPopup/MainPopupTemplate";

export const ComponentsCommonTemplate = ({
                                      calculateHeader,
                                      mainPopup,
                                      calculator,
                                      storage,
                                      destinations,
                                      clients,
                                      reviews}) => (
    <Fragment>
        <MainPopupTemplate data={mainPopup}/>
        <CalculateHeaderTemplate data={calculateHeader} admin/>
        <CalculatorTemplate data={calculator}/>
        <StorageTemplate storage={storage}/>
        <DestinationsTemplate destinations={destinations}/>
        <ClientsTemplate clients={clients}/>
        <ReviewsTemplate reviews={reviews}/>
    </Fragment>
)

const Index = ({ data, location, pageContext }) => {
    const { frontmatter } = data.markdownRemark;

    return (
        <Layout location={location} local={pageContext.locale}>
            <ComponentsCommonTemplate
                calculateHeader={frontmatter.calculateHeader}
                calculator={frontmatter.calculator}
                storage={frontmatter.storage}
                destinations={frontmatter.destinations}
                clients={frontmatter.clients}
                reviews={frontmatter.reviews}
                mainPopup={frontmatter.mainPopup}
            />
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
                  fluid(maxWidth: 65, quality: 100) {
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
                    fluid(maxWidth: 1000, quality: 100) {
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
                fluid(maxWidth: 200, quality: 100) {
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
      }
    }
  }
`;
