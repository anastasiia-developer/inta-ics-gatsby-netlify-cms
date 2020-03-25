import React from 'react'
import { graphql } from 'gatsby'
import styled from "styled-components";
import Layout from '../../components/Layout'

const Style = styled.div`
    .overlay{
        position: relative;
        .popup{
            position: relative;
        }
    }
`;

export const ComponentsCommonTemplate = () => (
    <Style>

    </Style>
);

const Index = ({ data, location, pageContext }) => {
    return (
        <Layout location={location} local={pageContext.locale}>

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
      }
    }
  }
`;
