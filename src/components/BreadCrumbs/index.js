import React, {Fragment} from 'react'
import { useBreadcrumb } from 'gatsby-plugin-breadcrumb'
import Container from './style'
import { Link } from 'gatsby'


const Breadcrumbs = ({ location, crumbLabel }) => {
    const { crumbs } = useBreadcrumb({
        location,
        crumbLabel: crumbLabel
    });

    const breadcrumbs = crumbs.map((link, index) => (
       link.crumbLabel &&
        <Link key={index} to={link.pathname || link.location.pathname}  >
            {link.crumbLabel}
        </Link>
    ));

    return (
        <Container
            crumbStyle={crumbs[0].crumbStyle.color}
            crumbActiveStyle={crumbs[0].crumbActiveStyle.color}>
            {breadcrumbs}
        </Container>
    )
};

export default Breadcrumbs;