import React, {Fragment} from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Header from "../components/delivery/Header"
import CalculateHeader from "../components/delivery/CalculateHeader";

export const DeliveryTemplate = ({
                                 header,
                                 title,
                                 description,
                                 location}) => {
    return (
        <Fragment>
            <Header
                description={description}
                title={title}
                header={header}
                location={location}
                crumbLabel={title}
                children={<CalculateHeader/>}
            />
        </Fragment>
    )
}

DeliveryTemplate.propTypes = {
    header: PropTypes.shape({
        slider: PropTypes.array,
    }),
    description: PropTypes.string,
    title: PropTypes.string,
}

const Delivery = ({ data, location }) => {
    const { markdownRemark: delivery } = data;
    return (
        <Layout>
            <DeliveryTemplate
                header={delivery.frontmatter.header}
                title={delivery.frontmatter.title}
                description={delivery.frontmatter.description}
                location={location}
            />
        </Layout>
    )
}

Delivery.propTypes = {
    data: PropTypes.shape({
        markdownRemark: PropTypes.object,
    }),
    location: PropTypes.object
}

export default Delivery

export const pageQuery = graphql`
  query DeliveryID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      frontmatter {
        title
        description
        header{
          slide{
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
            buttons{
              text
              link
            }
          }
        }
      }
    }
  }
`;
