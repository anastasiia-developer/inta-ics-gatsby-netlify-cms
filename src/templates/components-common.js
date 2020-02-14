import React, {Fragment} from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'


const ComponentsCommon = ({ data, location }) => {
    const { markdownRemark: delivery } = data;
    return (
        <Layout>
            <div>
                ComponentsCommon
            </div>
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
      }
    }
  }
`;
