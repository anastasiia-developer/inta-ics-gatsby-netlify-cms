import React from 'react'
import Helmet from "react-helmet"

const TitleDesHelmet = ({title, description}) =>
    <Helmet titleTemplate="%s">
        <title>{title}</title>
        <meta
            name="description"
            content={description}
        />
    </Helmet>

export default TitleDesHelmet;