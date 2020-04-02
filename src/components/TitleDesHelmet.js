import React from 'react'
import Helmet from "react-helmet"
import {withPrefix} from "gatsby";

const TitleDesHelmet = ({title, description, img, icon}) =>
    <Helmet titleTemplate="%s">
        <title>{title}</title>
        <meta
            name="description"
            content={description}
        />
        <meta
            property="og:image"
            content={`${withPrefix('/')}img/logo.ico`}/>
        {icon &&
            <link
                rel="icon"
                href={`${withPrefix('/')}img/logo.ico`}
            />
        }
    </Helmet>

export default TitleDesHelmet;