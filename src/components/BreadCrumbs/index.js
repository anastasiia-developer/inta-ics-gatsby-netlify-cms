import React, {Fragment} from 'react'
import Container from './style'
import { Link } from 'gatsby'
import { localizedPath } from "../../data/localizedPath";

const Breadcrumbs = ({ location, locale, crumbLabel, crumbLabelParent, crumbPathParent }) => {
    return (
        <Container>
            <Link to={localizedPath({path: "/", lang: locale})}>
                Главная
                {console.log(location.pathname)}
            </Link>
            {crumbLabelParent &&
                <Fragment>
                {crumbPathParent ?
                    <Link to={localizedPath({path: crumbPathParent, lang: locale})}>
                        {crumbLabelParent}
                    </Link>
                        :
                    <span>{crumbLabelParent}</span>
                }
                </Fragment>
            }
            {crumbLabel &&
                <Link to={location.pathname}>
                    {crumbLabel}
                </Link>
            }
        </Container>

    )
};

export default Breadcrumbs;