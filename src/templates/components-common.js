import React, {Fragment} from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import CalculatorTemplate from '../components/Calculator/CalculatorTemplate'
import StorageTemplate from '../components/Storage/StorageTemplate'
import DestinationsTemplate from '../components/Destinations/DestinationsTemplate'
import ClientsTemplate from '../components/Clients/ClientsTemplate'
import ReviewsTemplate from "../components/Reviews/ReviewsTemplate";

const ComponentsCommonTemplate = ({
                                      calculator,
                                      storage,
                                      destinations,
                                      clients,
                                      reviews}) => (
    <Fragment>
        <CalculatorTemplate data={calculator}/>
        <StorageTemplate storage={storage}/>
        <DestinationsTemplate destinations={destinations}/>
        <ClientsTemplate clients={clients}/>
        <ReviewsTemplate reviews={reviews}/>
    </Fragment>
)

const ComponentsCommon = ({ data }) => {
    const { frontmatter } = data.markdownRemark;

    return (
        <Layout>
            <ComponentsCommonTemplate
                calculator={frontmatter.calculator}
                storage={frontmatter.storage}
                destinations={frontmatter.destinations}
                clients={frontmatter.clients}
                reviews={frontmatter.reviews}
            />
        </Layout>
    )
}


export default ComponentsCommon

export const pageQuery = graphql`
  query ComponentsCommon {
    markdownRemark(frontmatter: { templateKey: { eq: "components-common" } }) {
      frontmatter {
        title
        description
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
        }
        storage{
            country
            flag{
                publicURL
            }
        }
        destinations {
            destinationsImage{
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
      }
    }
  }
`;
