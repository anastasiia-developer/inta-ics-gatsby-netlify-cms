import React, {Fragment} from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import Helmet from "react-helmet";
import Header from "../components/delivery/Header"
import CalculateHeader from "../components/delivery/CalculateHeader"
import Sections from "../components/delivery/Sections"
import SectionText from "../components/delivery/SectionText"
import OurServices from '../components/delivery/OurServices'
import Destinations from "../components/Destinations"
import Cargo from "../components/mainPage/cargo"
import Clients from "../components/Clients"
import Reviews from "../components/Reviews";
import Article from "../components/mainPage/Article";
import FormFooter from '../components/Footer/FormFooter'
import CalculateContainerHeader from "../components/CalculateContainerHeader";

export const DeliveryTemplate = ({
                                     helmet,
                                     header,
                                     title,
                                     description,
                                     location,
                                     sections,
                                     sectionText,
                                     mainpitch}) => {
    return (
        <Fragment>
            {helmet || ''}
            <Header
                description={description}
                title={title}
                header={header}
                location={location}
                crumbLabel={title}
                crumbLabelParent="Доставка"
                crumbPathParent={false}
                children={location && !header.buttons &&  <CalculateHeader/>}
            />
            {location && header.buttons &&
                <CalculateContainerHeader/>
            }
            <Sections
                className={!header.buttons && 'only'}
                sections={sections}
            />
            <SectionText
                sectionText={sectionText}
            />
            <OurServices/>
            <Destinations />
            <Cargo/>
            <Clients/>
            <Reviews/>
            <Article mainpitch={mainpitch}/>
            <FormFooter/>
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
    const { frontmatter } = data.markdownRemark;

    return (
        <Layout>
            <DeliveryTemplate
                helmet={
                    <Helmet titleTemplate="%s">
                        <title>{`${frontmatter.title}`}</title>
                        <meta
                            name="description"
                            content={`${frontmatter.description}`}
                        />
                    </Helmet>
                }
                header={frontmatter.header}
                title={frontmatter.title}
                description={frontmatter.description}
                location={location}
                sections={frontmatter.sections}
                sectionText={frontmatter.sectionText}
                mainpitch={frontmatter.mainpitch}
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
        sections{
            text
            title
            image{
                childImageSharp {
                  fluid(maxWidth: 900, quality: 100) {
                    ...GatsbyImageSharpFluid
                  }
                }
            }
            list{
                title
                image{
                    publicURL
                }
            }
        }
        sectionText{
          text
          title
          image{
            publicURL   
          }
        }
        mainpitch {
          article
        }
      }
    }
  }
`;
