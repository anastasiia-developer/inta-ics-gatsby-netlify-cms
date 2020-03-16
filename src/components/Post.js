import React from "react";
import styled from "styled-components";
import PreviewCompatibleImage from "./PreviewCompatibleImage";
import {Link} from "gatsby";
import Time from "../img/time.svg";
import ArrowLine from "../img/arrowLine.svg";
import {kebabCase} from "lodash";
import Tags from "../components/Blog/TagStyle"


const Article = styled.article`
  border-right: 1px solid #ECECEC;
  padding: 1em;
  width: 48%;
  &:last-child{
    border-right: none;
  }
  header{
    width: auto;
    height: 7em;
    .gatsby-image-wrapper{
      height: 100%;
    }
  }
  h3{
      padding: .5em;
    a{
        color: #2F2F2F;
        font-weight: 500;
        font-size: 1em;
        line-height: 1em;
      }
  }
  p{
    padding: .5em;
    color: #474747;
    line-height: 1.5em;
    font-size: .9em;
  }
  footer{
    margin-top: 1em;
    justify-content: flex-start;
    display: flex;
    flex-wrap: wrap;
    .time{
      color: #A3A3A3;
      align-items: center;
      img{
        margin-right: .5em;
      }    
        @media(max-aspect-ratio: 3/3), (max-height: 500px){
            font-size: .9em;
        }
    }
    .row{
      align-items: center;
    }
    footer a{
      color: #FF4B55;
      text-decoration: underline;
    }
    svg{
      margin-right: .5em;
      width: 1em;
      height: 1em;
      path{
        fill: #FF4B55;
      }
    }
    .more{
        margin-left: auto;
        color: #FF4B55;
        @media(max-aspect-ratio: 3/3), (max-height: 500px){
            font-size: .9em;
        }
    }
  }
`;

const Post = ({post, className}) => {
    const sliceText = (text) => {
        let sliced = text.slice(0,100);
        if (sliced.length < text.length) {
            sliced += '...';
        }
        return sliced;
    };
    return (
    <Article className={className}>
        <header>
            {post.frontmatter.featuredimage ? (
                <PreviewCompatibleImage
                    imageInfo={{
                        image: post.frontmatter.featuredimage,
                        alt: `featured image thumbnail for post ${post.frontmatter.title}`,
                    }}
                />
            ) : null}
        </header>
        <div className="body">
            <h3>
                <Link
                    to={post.fields.slug}
                >
                    {post.frontmatter.title}
                </Link>
            </h3>
            <p>
                {
                    sliceText(post.excerpt)
                }
            </p>
            <footer>
                {post.frontmatter.tags &&
                    <Tags>
                        {
                            post.frontmatter.tags.slice(0,2).map((post, index) =>
                            <Link key={index} to={`/blog/${kebabCase(post)}/`} >
                                {post}
                            </Link>
                        )}
                    </Tags>
                }
                <span className="time row">
                    <Time />
                    {post.frontmatter.date}
                </span>
                <Link className="more row" to={post.fields.slug}>
                    <ArrowLine/>
                    Читать подробнее
                </Link>
            </footer>
        </div>
    </Article>
)
}

export default Post