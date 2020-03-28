import React from 'react'
import styled from "styled-components";
import TitleDesHelmet from "../components/TitleDesHelmet";
import {graphql} from "gatsby";
import PreviewCompatibleImage from "../components/PreviewCompatibleImage";
import {Button} from "../components/TemplateHeader";

const Container = styled.div`
    background-color: #0C0C0C;
    height: 100vh;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    .gatsby-image-wrapper{
        width: 30%;
        margin: 0 auto;
        min-width: 200px;
    }
    h1{
        color: #fff;
        text-align: center;
        margin-bottom: 2em;
        font-size: 1.3em;
    }
    a{
        padding: 1em 3em;
        margin: 3em auto;
        display: flex;
        img.logo{
            margin-right: 1em;
        }
        &:hover{
            background: #005BE4;
        }
    }
`;

const NotFoundPage = ({data}) => {
    const page = data.markdownRemark.frontmatter.pageNotFound;
    return(
        <Container
            style={{
                backgroundImage:`url(${
                    !!page.background.childImageSharp ? page.background.childImageSharp.fluid.src : page.background
                })`
            }}
        >
            <TitleDesHelmet
                icon
                title={page.seoTitle}
            />
            <h1>{page.title}</h1>
            <PreviewCompatibleImage
                imageInfo={page.image}
            />
            <Button to={page.btnLink}>
                <img src="/img/logoMini.svg"
                     alt="logo Mini"
                     className="logo"/>
                {page.btnText}
            </Button>
        </Container>
    )
}

export default NotFoundPage

export const pageQuery = graphql`
  query pageNotFoundTemplate($locale: String) {
    markdownRemark(frontmatter: { pageKey: { eq: "components-common" }, locale: { eq: $locale } }) {
      frontmatter {
        pageNotFound{
            title
            seoTitle
            background{
                childImageSharp {
                  fluid(maxWidth: 1800) {
                    ...GatsbyImageSharpFluid
                  }
                }
            }
            image{
                childImageSharp {
                  fluid(maxWidth: 500) {
                    ...GatsbyImageSharpFluid
                  }
                }
            }
            btnText
            btnLink        
        }
      }
    }
  }
  `;