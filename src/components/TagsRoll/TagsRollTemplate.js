import {Link} from "gatsby";
import {kebabCase} from "lodash";
import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";
import {localizedPath} from "../../data/localizedPath";


const List = styled.ul`
  justify-content: flex-start;  
  margin-top: 5%;
  flex-wrap: wrap;
  @media(max-aspect-ratio: 3/3), (max-height: 500px){
    margin: 0;
    width: 100%;
  }
  
`;
const Item = styled.li`
    background: #222222;
    border-radius: .5em;
    padding: .5em 1em;
    margin-right: 1em;
    margin-bottom: 1em;
    font-size: .9em;
    &:last-child{
        margin-right: 0;
    }
  a{
    font-weight: 500;
    color: ${props => !!props.color ? '#fff' : '#005BE4'};
    &:hover{
        color: #fff;
    }
  }
`

const TagsRollTemplate = ({tags, locale, tagActive}) => (
    <List className="row">
        {
            tags.map(tag =>
                <Item key={tag.fieldValue} color={tagActive === tag.fieldValue ? 1 : 0}>
                    <Link to={localizedPath({path: `blog/${tagActive === tag.fieldValue ? '' : kebabCase(tag.fieldValue)}/`, lang: locale})}>
                        {tag.fieldValue}
                    </Link>
                </Item>
            )
        }
    </List>
)

TagsRollTemplate.propTypes = {
    data: PropTypes.shape({
        allMarkdownRemark: PropTypes.shape({
            group: PropTypes.array,
        }),
    }),
}
export default TagsRollTemplate