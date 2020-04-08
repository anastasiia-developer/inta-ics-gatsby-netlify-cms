import Layout from "../../components/Layout";
import {graphql} from "gatsby";
import React, {Fragment} from "react";
import TemplateHeader from "../../components/TemplateHeader";
import News from "../../components/NewsRoll";
import NewsRu from "../../components/NewsRoll/index.ru";
import ContactPageForm from "../../components/FormComponents/ContactPageForm";
import BarContactsTemplate from "../../components/BarContacts";
import BarContactsTemplateRu from "../../components/BarContacts/index.ru";
import styled from "styled-components";
import Store from "../../components/store";
import FormFooter from '../../components/Footer/FormFooter'
import FormFooterRu from '../../components/Footer/FormFooter/index.ru'

import TitleDesHelmet from "../../components/TitleDesHelmet";
import Storage from '../../components/Storage'
import StorageRu from '../../components/Storage/index.ru'

const Wrapper = styled.div`
    .bar-contacts{
        margin-top: 2em;
        color: #fff;
        svg path{
            fill: #FF4B55;
        }
    }
    .store{
        justify-content: flex-start;
        @media(max-aspect-ratio: 3/3), (max-height: 500px){
            justify-content: center;
        }
    }
`;



export const ContactPageTemplate = ({
                                        helmet,
                                        title,
                                        description,
                                        header,
                                        location,
                                        morePhotoIcon,
                                        locale,
                                        form
                                    }) =>
    <Wrapper>
        { helmet || ''}
        <TemplateHeader
            title={title}
            description={description}
            header={header}
            location={location}
            locale={locale}
            crumbLabel={title}
            childrenInColumn={
                <Fragment>
                    <ContactPageForm locale={locale} form={form}/>
                    {locale === "ua" ?
                        <BarContactsTemplate/>
                        :
                        <BarContactsTemplateRu/>
                    }
                    <Store/>
                </Fragment>}
        />
        {locale === 'ua' ?
            <Fragment>
                <Storage
                    morePhotoIcon={morePhotoIcon}
                />
                <News/>
            </Fragment>
            :
            <Fragment>
                <StorageRu
                    morePhotoIcon={morePhotoIcon}
                />
                <NewsRu/>
            </Fragment>
        }
    </Wrapper>

const ContactPage = ({ data, location, pageContext }) => {
    const { frontmatter } = data.markdownRemark;

    return (
        <Layout local={pageContext.locale} location={{location, localePath:pageContext.localePath}}>
            <ContactPageTemplate
                helmet={
                    <TitleDesHelmet
                        title={frontmatter.metaData ? frontmatter.metaData.title : frontmatter.title}
                        description={frontmatter.metaData ? frontmatter.metaData.description : frontmatter.description}
                    />
                }
                title={frontmatter.title}
                description={frontmatter.description}
                header={frontmatter.header}
                location={location}
                locale={pageContext.locale}
                morePhotoIcon={data.fileName}
                form={frontmatter.form}
            />
            {pageContext.locale === 'ua' ?
                <FormFooter />
                :
                <FormFooterRu />
            }
        </Layout>
    )
}

export default ContactPage

export const pageQuery = graphql`
  query ContactPage($locale: String) {
    markdownRemark(frontmatter: { pageKey: { eq: "contact" }, locale: { eq: $locale }}) {      
        frontmatter {
            title
            description
            metaData{
                title
                description
            }
            header{
                images{
                    image{
                        childImageSharp {
                          fluid(maxWidth: 300, quality: 70) {
                            ...GatsbyImageSharpFluid
                          }
                        }
                    }
                }
            }  
            form{
                name
                phone
                btn
            }     
        }
    }
    fileName: file(relativePath: { eq: "morePhoto.png" }) {
      childImageSharp {
        fluid(maxWidth: 25, maxHeight: 25) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`