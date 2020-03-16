import Layout from "../../components/Layout";
import {graphql} from "gatsby";
import React, {Fragment, useState} from "react";
import TemplateHeader from "../../components/TemplateHeader";
import News from "../index/news";
import Form from "./form";
import BarContacts from "../../components/nav/BarContacts";
import styled from "styled-components";
import Store from "../../components/store";
import FormFooter from '../../components/Footer/FormFooter'
import {HTMLContent} from "../../components/Content";
import PreviewCompatibleImage from "../../components/PreviewCompatibleImage";
import Carousel from "react-multi-carousel";
import {ButtonGroup, ResponsiveCarousel} from "../../components/CommonCarousel";
import TitleDesHelmet from "../../components/TitleDesHelmet";

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
const Section = styled.section`
    h3{
        color: #898989;
        font-size: .9em;
        margin: 2.5em 0;
    }
    .container{
        flex-wrap: wrap;
        justify-content: space-between;
    }
    .store{
        width: 24%;
        position: relative;
        cursor: pointer;
        margin-bottom: 7%;
        &:before{
            content: '';
            width: 100%;
            height: 1px;
            background: #D9E7F8;
            position: absolute;
            top: 0;
            left: 0;
        }
        &:hover:before{
            background: #FF4B55;
            height: 2px;
        }
        @media(max-aspect-ratio: 3/3), (max-height: 500px){
            width: 100%;
        }
    }
    .images{
        margin-top: auto;
        position: relative;
    }
    header{
        align-items: center;
        padding: 1em 1em 1.5em;
        img{
            height: 3em;
            margin-right: 1em;
        }
        h4{
            font-weight: 500;
            color: #393939;
            span{
                color: #005BE4;
                margin-left: .5em;
            }
        }
        p{
            color: #8E8E8E;
            font-size: .8em;
        }
    }
    .address{
        color: #565656;
        line-height: 2em;
        font-size: .9em;
        padding: 0 1em;
    }
    .phone{
        color: #005BE4;
        margin-bottom: 2em;
        font-size: .9em;
        padding: 0 1em;
        line-height: 2em;
    }
    .more-photo-icon{
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        display: flex;
        &-img{
            width: 3em;
            height: 3em;
            margin-left: auto;
        }
    }
    .react-multiple-carousel__arrow{
        top: 45%;
    }
`;
const Popup = styled.div`
    position: fixed;
    z-index: 3;
    background: rgba(0, 0, 0, .7);
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    align-items: center;
    display: ${props => props.isActive ? 'flex' : 'none'};
    .wrapper{
        width: 60%;
        @media(max-aspect-ratio: 3/3), (max-height: 500px){
            width: 80%;
        }
    }
`;

const MorePhoto = ({photos, morePhotos, setMorePhotos}) =>
    <Popup isActive={morePhotos} onClick={() => setMorePhotos(false)}>
        <Carousel
            containerClass="wrapper"
            sliderClass="row"
            infinite
            arrows={false}
            renderButtonGroupOutside={true}
            customButtonGroup={<ButtonGroup />}
            slidesToSlide={1}
            responsive={ResponsiveCarousel(1,1)}
        >
            {photos &&
            photos.map((photo, i) => (
                <PreviewCompatibleImage
                    key={i}
                    imageInfo={{
                        image: photo.image,
                    }}
                />
            ))}

        </Carousel>
    </Popup>

const StoreBlock = ({store, morePhotoIcon}) => {
    const [morePhotos, setMore] = useState(false);

    return(
        <div className='store column'>
            <header className="row">
                <img src={store.flag.publicURL} alt="flag"/>
                <div>
                    <h4>{store.country}
                        {store.city &&
                        <span>{store.city}</span>
                        }
                    </h4>
                    <p>{store.postIndex}</p>
                </div>
            </header>
            <HTMLContent
                content={store.address}
                className='address'
            />
            {store.phone &&
            <a href={`tel:${store.phone}`} className='phone'>{store.phone}</a>
            }
            <div className="images">
                <PreviewCompatibleImage
                    imageInfo={{
                        image: store.image,
                    }}
                />
                {store.images &&
                    <Fragment>
                        <div
                            className='more-photo-icon'
                            onClick={() => setMore(true)}
                        >
                        <PreviewCompatibleImage
                            className='more-photo-icon-img'
                            imageInfo={{
                                image: morePhotoIcon,
                            }}
                        />
                        </div>
                    <MorePhoto
                        photos={store.images}
                        setMorePhotos={setMore}
                        morePhotos={morePhotos}
                    />
                    </Fragment>
                }
            </div>
        </div>
    )
}

export const ContactPageTemplate = ({
                                        helmet,
                                        title,
                                        description,
                                        header,
                                        location,
                                        storage,
                                        morePhotoIcon,
                                        locale
                                    }) =>
    <Wrapper>
        { helmet || ''}
        <TemplateHeader
            title={title}
            description={description}
            header={header}
            location={location}
            crumbLabel={title}
            childrenInColumn={
                <Fragment>
                    <Form locale={locale}/>
                    <BarContacts/>
                    <Store/>
                </Fragment>}
        />
        <Section className="wrapper">
            <h3>Наши склады</h3>
            <div className="row-to-column container">
            {storage.filter(store => store.address !== null)
                    .map((store, index) =>
                        <StoreBlock
                            key={index}
                            store={store}
                            morePhotoIcon={morePhotoIcon}/>
            )}
            </div>
        </Section>
        <News/>
    </Wrapper>

const ContactPage = ({ data, location, pageContext }) => {
    const { frontmatter } = data.markdownRemark;

    return (
        <Layout local={pageContext.locale} location={location}>
            <ContactPageTemplate
                helmet={
                    <TitleDesHelmet
                        title={frontmatter.title}
                        description={frontmatter.description}
                    />
                }
                title={frontmatter.title}
                description={frontmatter.description}
                header={frontmatter.header}
                storage={frontmatter.storage}
                location={location}
                locale={pageContext.locale}
                morePhotoIcon={data.fileName}
            />
            <FormFooter locale={pageContext.locale}/>
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
            storage{
                country
                city
                flag {
                    publicURL
                }
                postIndex
                address
                phone
                image{
                    childImageSharp {
                      fluid(maxWidth: 200, quality: 70) {
                        ...GatsbyImageSharpFluid
                      }
                    }
                }
                images{
                    image{
                        childImageSharp {
                          fluid(maxWidth: 800, quality: 70) {
                            ...GatsbyImageSharpFluid
                          }
                        }
                    }
                }
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