import React, {Fragment} from 'react'
import Container from './style'
import { Link } from 'gatsby'


const Breadcrumbs = ({ location, crumbLabel }) => {
    return (
        <Container>
            <Link to='/'>
                Главная
            </Link>
            {location.pathname.indexOf('delivery') !== -1 &&
               <Fragment>
                <span>Доставка</span>

                <Link to={location.pathname}>
                    {crumbLabel}
                </Link>
               </Fragment>
                }
        </Container>

    )
};

export default Breadcrumbs;