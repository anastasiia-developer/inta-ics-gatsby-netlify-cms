import React, {Fragment} from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import FormFooter from '../components/Footer/FormFooter'
import TemplateHeader from "../components/TemplateHeader";
import styled from "styled-components";
import HoverGradientInsideSvg from '../components/HoverGradientInsideSvg'
import PreviewCompatibleImage from "../components/PreviewCompatibleImage";
import Clients from "../components/Clients";
import Reviews from "../components/Reviews";

const Section = styled.section`
    margin-top: -10em;
    background: #F8F8F8; 
    padding-bottom: 2em;
    @media(max-aspect-ratio: 3/3), (max-height: 500px){    
            margin-top: 1em;
    }
    h2{
        color: #247BFF;
        margin-bottom: 1.5em;
        font-weight: 500; 
        margin-left: 8%;
    }
    .we-specialize {
        flex-wrap: wrap;
        .hover-gradient{
            margin: 0 1em 2em;
            flex-basis: 24%;
            display: flex;
            flex-direction: column;
            align-items: center;
            @media(max-aspect-ratio: 3/3), (max-height: 500px){    
                margin: 1em 0 0 0;
            }
            &:hover{
                .gatsby-image-wrapper{
                    display: none;
                }
                p{
                    color: #fff;
                    display: block;
                    text-align: center;
                    line-height: 2em;
                    font-size: .85em;   
                }
                h4{
                    color: #fff;
                    margin: 0 0 1em 0;
                    font-weight: 600;
                }
                a{
                    display: block;
                    background: #fff;
                    color: #005BE4;
                    padding: .7em 1.8em;
                    font-weight: 500;
                    font-size: .9em;
                    margin-top: 1em;
                    border-radius: 2.5em; 
                    opacity: 1;   
                }
            }
        }
        .gatsby-image-wrapper{
            width: 6em;
            margin-bottom: 1em;
        }
        h4{
            font-size: 1.1em;
            color: #202123;
            margin-top: 2em;
        }
        p{
            display: none;
        }
        a{
            opacity: 0;   
        }
    }
`;

const OurValues = styled.section`
    width: 75%;
    padding: 1em 0 6em;
    @media(max-aspect-ratio: 3/3), (max-height: 500px){    
        width: 90%;
    }
    h2{
        font-weight: 500;
        font-size: 1.8em;
        color: #393939;
        text-align: center;
        margin: 2em 0 3em;
    }
    .row-to-column{
        justify-content: space-around;
        .hover-gradient{
            padding: 1.7em 2.5em;
            position: relative;
            margin: 0;
        }
    }
    h4{
        margin: 0;
        color: #005BE4;
    }
    @media(max-aspect-ratio: 3/3), (max-height: 500px){    
        .hover-gradient{
            min-width: auto;
        }
    }
    .container{
        position: relative;
        &:hover .number{
            color: #005BE4;
            transform: translateY(-100%)
        }
        @media(max-aspect-ratio: 3/3), (max-height: 500px){    
            margin-bottom: 1em;
            display: flex;
            width: 100%;
        }
    }    
    .number{
        color: #E7E7E7;
        font-weight: 500;
        font-size: 3em;
        margin-left: .2em;
        transition: all .4s;
        position: absolute;
        transform: translateY(-65%);
        @media(max-aspect-ratio: 3/3), (max-height: 500px){    
            position: relative;
            margin: 0 .5em 0 0;
            transform: none;
        }
    }
`;

const SectionImg = styled.section`
    position: relative;
    .gatsby-image-wrapper{
        width: 100%;
    }
    .description{
        position: absolute;
        top: 0;
        left: 50%;
        transform: translateX(-50%); 
        background: #fff;
        color: #41479B;
        padding: 4em;
        font-weight: 500;
        line-height: 2em;
        text-align: center;
        border-radius: .5em;
        margin-top: -3em;
        box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.12);
        @media(max-aspect-ratio: 3/3), (max-height: 500px){    
            padding: 1em;
            position: relative;
            border-radius: 0;
            margin: 0;
            font-size: .9em;
        }
    }
`;

export const AboutPageTemplate = ({
                                      title,
                                      description,
                                      header,
                                      location,
                                      weSpecialize,
                                      ourValues,
                                      sectionImg
                                  }) => {
  return (
      <Fragment>
          <TemplateHeader
              description={description}
              title={title}
              header={{logo: true, arrow: true, ...header}}
              location={location}
              crumbLabel={title}
          />
          <Section>
              <h2 className='wrapper'>Мы специализируемся</h2>
              <div className="row wrapper we-specialize">
                  {weSpecialize.map((specialize, index) =>
                      <HoverGradientInsideSvg
                          key={index}
                          title={specialize.title}
                          svg={
                              <PreviewCompatibleImage
                                  key={index}
                                  imageInfo={{
                                      image: specialize.image,
                                  }}
                              />
                          }
                          btnLink={specialize.link}
                          description={specialize.description}
                      />
                  ) }
              </div>
          </Section>
          <OurValues className='wrapper'>
              <h2>Наши ценности</h2>
              <div className="row-to-column">
                  {ourValues.map((value, index) =>
                      <div className='container' key={index}>
                          <h5 className='number'>
                              0{index+1}
                          </h5>
                          <HoverGradientInsideSvg
                            title={value.title}
                          />
                      </div>
                  )}
              </div>
          </OurValues>
          <SectionImg>
              <PreviewCompatibleImage
                  imageInfo={{
                      image: sectionImg[0].image,
                  }}
              />
              <div className="description">
                  {sectionImg[0].description}
              </div>
          </SectionImg>
          {location &&
            <Clients/>
          }
          <Reviews/>
      </Fragment>
      )
}

const AboutPage = ({ data, location }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <AboutPageTemplate
        title={frontmatter.title}
        description={frontmatter.description}
        header={frontmatter.header}
        location={location}
        weSpecialize={frontmatter.weSpecialize}
        ourValues={frontmatter.ourValues}
        sectionImg={frontmatter.sectionImg}
      />
      <FormFooter/>
    </Layout>
  )
}

export default AboutPage

export const aboutPageQuery = graphql`
  query AboutPage {
    markdownRemark(frontmatter: { templateKey: { eq: "about-page" } }) {
      frontmatter {
        title
        description
        header{
          images{
            image{
              childImageSharp {
                fluid(maxWidth: 300, quality: 50) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            alt
          }
          buttons{
            text
            link
          }  
        }
        weSpecialize{
            image{
                childImageSharp {
                    fluid(maxWidth: 100, quality: 50) {
                      ...GatsbyImageSharpFluid
                    }
                }
            }
            title
            description
            link
        }
        ourValues{
            title
        }
        sectionImg{
            description
            image{
                childImageSharp {
                    fluid(maxWidth: 1000, quality: 50) {
                          ...GatsbyImageSharpFluid
                    }
                }
            }
        }
      }
    }
  }
`
