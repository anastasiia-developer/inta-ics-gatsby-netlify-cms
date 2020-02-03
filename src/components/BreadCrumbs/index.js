import React from 'react'
import { useBreadcrumb } from 'gatsby-plugin-breadcrumb'
import Container from './style'
import { Link } from 'gatsby'


const Breadcrumbs = ({ location }) => {
    const { crumbs } = useBreadcrumb({
        location,
        crumbLabel: 'Авіадоставка',
        crumbSeparator: ' / ',
    });
    const breadcrumbs = crumbs.map((link, index) => (
        <Link to={link.pathname || link.location.pathname} key={index} >
            {link.crumbLabel}{crumbs.length-1 !== index && link.crumbSeparator}
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