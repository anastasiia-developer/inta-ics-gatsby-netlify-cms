import React from "react";

const BarBckgImgSectionText = ({image}) =>
    <div
        style={{
            backgroundImage: `url(${
                !!image.childImageSharp ? image.childImageSharp.fluid.src : image
            })`,
            width: '100%',
            height: '3em',
            margin: ' 4em auto',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'left center',
            backgroundSize: '55% 40%'
        }}
    />;

export default BarBckgImgSectionText