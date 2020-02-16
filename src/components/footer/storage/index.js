import { Section } from './style';
import {graphql, StaticQuery} from "gatsby";
import React from "react";

const Storage = ({ data }) => {
    if(data){
        return(
            <Section>
                <h4 className="storage-title">Наши склады</h4>
                <div className="row flags">
                    {data.markdownRemark.frontmatter.storage.map((item, index) => (
                        <div
                            className="row"
                            key={index}
                        >
                            <img src={item.flag.publicURL} alt="flag"/>
                            <p>{item.country}</p>
                        </div>
                    ))}
                </div>
            </Section>
        )}
    else{
        return <div>..loading</div>
    }
};


export default () => (
    <StaticQuery
        query={graphql`
            query storageFooter{
                markdownRemark(frontmatter: { templateKey: { eq: "components-common" } }) {
                    frontmatter {
                        storage{
                          flag{
                              publicURL
                          }
                          country
                        }
                    }
                }
            }
    `}
        render={(data) => <Storage data={data} />}
    />
)
