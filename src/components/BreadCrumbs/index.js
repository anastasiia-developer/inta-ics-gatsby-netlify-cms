import React, {Fragment} from 'react'
import { useBreadcrumb, Breadcrumb } from 'gatsby-plugin-breadcrumb'
import Container from './style'
import { Link } from 'gatsby'


const Breadcrumbs = ({ location, crumbLabel }) => {
    const { crumbs } = useBreadcrumb({
        location,
        crumbLabel
    });

    const pathName = (linkPath) => (linkPath.pathname || linkPath.location.pathname);

    const breadcrumbs = crumbs.map((link, index) => (
        <Fragment key={index}>
        {link.crumbLabel &&
            <Fragment>
                {pathName(link).indexOf('delivery') !== -1
                ?
                <Fragment>
                    <span>Доставка</span>
                    {link.crumbSeparator}
                    <Link to={pathName(link)}>{link.crumbLabel}</Link>
                </Fragment>
                :
                <Link to={pathName(link)}>
                    {link.crumbLabel}
                </Link>}
            </Fragment>
        }
        </Fragment>
    ));

    return (
        <Container
            crumbStyle={crumbs[0].crumbStyle.color}
            crumbSeparator={crumbs[0].crumbSeparator}
            crumbActiveStyle={crumbs[0].crumbActiveStyle.color}>
            {breadcrumbs}
        </Container>

    )
};

export default Breadcrumbs;