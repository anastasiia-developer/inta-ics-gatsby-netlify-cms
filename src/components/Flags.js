import React, {Fragment} from "react";
import {graphql, useStaticQuery} from "gatsby";

export default ({stateOptions, setOptions}) => {
    const data = useStaticQuery(graphql`
    query Flags {
       markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
          frontmatter {
            destinations{
              countries{
                country
                flag{
                  publicURL
                  name
                }
              }
            }
          }
        }
    }
  `)
    return (
        <div className="row flags">
            {data.markdownRemark.frontmatter.destinations.countries.map((item, index) => (
                <div className="row" key={index} onClick={() => setOptions({open: !stateOptions, value: item.country, flag:item.flag.name})}
                >
                    <img src={item.flag.publicURL} alt="flag"/>
                    <p>{item.country}</p>
                </div>
            ))}
        </div>
    )
}