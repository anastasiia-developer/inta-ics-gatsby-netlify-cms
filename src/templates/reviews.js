import React from 'react'
import { graphql } from 'gatsby'
import styled from "styled-components";
import Layout from '../components/Layout'
import TemplateHeader from "../components/TemplateHeader";
import News from "../components/mainPage/news";
import Form from "../components/Footer/Form";

const Wrapper = styled.div`
    header .btn{
        padding: 1em 2.5em;
        background: linear-gradient(100.69deg,#005BE4 0%,#4900E4 100%);
    }
`;

const Review = styled.div`
    width: 49%;
    margin: 0 0 2% 0;
    font-size: .8em;
    padding: 2em 2.5em 1.5em;
    background: #fff;
    box-shadow: 4px 4px 20px rgba(0, 0, 0, 0.18);
    border-radius: .5em;
    display: flex;
    flex-direction: column;
    position: relative;
    overflow: hidden;
    cursor: pointer;
    @media(max-aspect-ratio: 3/3), (max-height: 500px){
        width: 100%;
        border-radius: 0;
        box-shadow: none;
        border-bottom: 1px solid #ccc9c9;
    }
    &:hover{
        &:before{
            content: '';
            display: block;    
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: .5em;
            background: linear-gradient(90.55deg, #005BE4 0.01%, #4900E4 98.79%);
        }
        p{
            color: #4B4F55
        }
    }
    h3{
        font-weight: 500;
        color: #101318;
        margin-bottom: 1.5em;
    }
    p{
        color: #717883;
        font-size: .9em;
        margin-bottom: 1.5em;
        line-height: 1.7em;
    }
    footer{
        justify-content: space-between; 
        align-items: center;
        font-size: .7em;
        margin-top: auto;
    }
    a{
        color: #005BE4;
        font-weight: 500;
    }
    .date{
        color: #B4B9C0;
    }
`;

const Section = styled.div`
    justify-content: space-between; 
    margin-top: -7em;
    flex-wrap: wrap;
    @media(max-aspect-ratio: 3/3), (max-height: 500px){
        margin-top: 0;
    }
`;

export const ReviewsPageTemplate = ({
                                        title,
                                        description,
                                        header,
                                        location,
                                        reviews
}) =>
    <Wrapper>
        <TemplateHeader
            title={title}
            description={description}
            header={{logo: true, arrow: true, ...header}}
            location={location}
            crumbLabel={title}
        />
        <Section className="row-to-column wrapper">
            {reviews.map((review, index) =>
                <Review key={index}>
                    <h3>{review.name}</h3>
                    <p>{review.text}</p>
                    <footer className="row">
                        <a href={review.source.url}>{review.source.name}</a>
                        <div className='date'>{review.date}</div>
                    </footer>
                </Review>
            )}
        </Section>
        <News/>
        <Form/>
    </Wrapper>
;

const Reviews = ({ data, location }) => {
    const { frontmatter } = data.markdownRemark;

    return (
        <Layout>
            <ReviewsPageTemplate
                title={frontmatter.title}
                description={frontmatter.description}
                header={frontmatter.header}
                location={location}
                reviews={frontmatter.reviews}
            />
        </Layout>
    )
}

export default Reviews

export const pageQuery = graphql`
  query ReviewsPage {
    markdownRemark(frontmatter: { templateKey: { eq: "reviews" } }) {      
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
                }
                buttons{
                    link
                    text
                }
            }
            reviews{
              name
              text
              source{
                name
                url    
              }   
              date                         
            }
        }
    }
  }
`
