import React from 'react'
import Helmet from "react-helmet"
import {withPrefix} from "gatsby";

const TitleDesHelmet = ({title, description, icon}) =>
    <Helmet titleTemplate="%s">
        <title>{title}</title>
        <meta
            name="description"
            content={description}
        />
        {icon &&
            <link
                rel="icon"
                href={`${withPrefix('/')}img/logo.ico`}
            />
        }
    </Helmet>

export default TitleDesHelmet;