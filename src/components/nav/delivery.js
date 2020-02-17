import {graphql, StaticQuery} from "gatsby";
import React from "react";
import SubMenu from './SubMenu'

const Delivery = ({ data, setActiveMob, isActiveMob, location }) => {
    console.log(location);
    if(data){
        return(
           <SubMenu
               parentName="Доставка"
               list={data.allMarkdownRemark.nodes}
               startPath="/delivery/"
               setActiveMob={() => setActiveMob}
               isActiveMob={isActiveMob}
           />
        )}
    else{
        return <div>..loading</div>
    }
};


export default ({setActiveMob, isActiveMob}) => (
    <StaticQuery
        query={graphql`
            query navDelivery{
                 allMarkdownRemark(filter: {frontmatter: {templateKey: {eq: "delivery"}}}) {
                    nodes{
                      frontmatter {
                        title
                        name
                      }
                    }
                 }
            }
    `}
        render={(data) => <Delivery data={data} setActiveMob={setActiveMob} isActiveMob={() => isActiveMob}/>}
    />
)
