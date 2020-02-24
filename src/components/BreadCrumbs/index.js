import React, {Fragment} from 'react'
import Container from './style'
import { Link } from 'gatsby'


const Breadcrumbs = ({ location, crumbLabel, crumbLabelParent, crumbPathParent }) => {
    return (
        <Container>
            <Link to='/'>
                Главная
            </Link>
            {crumbLabelParent &&
                <Fragment>
                {crumbPathParent ?
                    <Link to={crumbPathParent}>
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