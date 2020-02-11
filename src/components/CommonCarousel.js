import React, {Fragment} from "react";
import 'react-multi-carousel/lib/styles.css';
import styled from "styled-components";

const Arrow = styled.button`
    background: transparent;
    z-index: 1;
    top: 25%;
    opacity: ${props => props.isDisable && '.5'};
    &:hover{
        background: ${props => props.isDisable && 'transparent'};
    }
    &:before{
        font-size: 2em;
    }
    &.react-multiple-carousel__arrow--left{
        left: 12%;
    }
    &.react-multiple-carousel__arrow--right {
        right: 12%;
    }
`;

export const ButtonGroup = ({ next, previous, goToSlide, ...rest }) => {
    const { carouselState: { currentSlide, totalItems } } = rest;
    return (
        <Fragment>
            <Arrow
                onClick={() => previous()}
                isDisable={currentSlide === 0}
                className="react-multiple-carousel__arrow react-multiple-carousel__arrow--left">
            </Arrow>
            <Arrow
                onClick={() => next()}
                isDisable={(currentSlide + 1) === totalItems}
                className="react-multiple-carousel__arrow react-multiple-carousel__arrow--right">
            </Arrow>
        </Fragment>
    )

};


export const ResponsiveCarousel = (desktop = 4,  tablet = 3, mobile = 1) => ({
    desktop: {
        breakpoint: {
            max: 3000,
            min: 1024
        },
        items: desktop,
    },
    tablet: {
        breakpoint: {
            max: 1024,
            min: 464
        },
        items: tablet,
        partialVisibilityGutter: 30
    },
    mobile: {
        breakpoint: {
            max: 464,
            min: 0
        },
        items: mobile,
    }
});