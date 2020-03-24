import {Link} from "gatsby";
import React from "react";

const LinkMenu = ({label, link, setActiveMob}) =>
    <Link
        onClick={() => setActiveMob()}
        to={link}>
        {label.markdownRemark.frontmatter.crumbLabel}
    </Link>;

export default LinkMenu