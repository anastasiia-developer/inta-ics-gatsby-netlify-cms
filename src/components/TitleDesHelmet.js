import React from 'react'
import Helmet from "react-helmet"

const TitleDesHelmet = ({title, description, img, icon}) =>
    <Helmet titleTemplate="%s">
        <title>{title}</title>
        <meta
            name="description"
            content={description}
        />
        {icon &&
            <link
                rel="icon"
                href={`/img/logo.ico`}
            />
        }
    </Helmet>

export default TitleDesHelmet;