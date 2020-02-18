import React, {Fragment} from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import CalculatorTemplate from "../components/Calculator/CalculatorTemplate";


const ComponentsCommonTemplate = ({calculator}) => (
    <Fragment>
        <CalculatorTemplate data={calculator}/>
    </Fragment>
)

const ComponentsCommon = ({ data }) => {
    const { frontmatter } = data.markdownRemark;

    return (
        <Layout>
            <ComponentsCommonTemplate
                calculator={frontmatter.calculator}
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
      }
    }
  }
`;
