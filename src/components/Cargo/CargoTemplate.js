import React, {Fragment} from "react";
import HoverGradientInsideSvg from "../HoverGradientInsideSvg";
import CargoSprite from '../../components/../img/CargoSprite.svg';


const CargoTemplate = ({data}) => {

    return(
        <Fragment>
            <h2>{data.title}</h2>
            <div className="row">
                <CargoSprite/>
                {data.list.map((item, index) =>
                    <HoverGradientInsideSvg
                        key={index}
                        title={item.title}
                        svg={
                            <svg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg" version="1.1" preserveAspectRatio="xMinYMin">
                                <use xlinkHref={`#${item.svg}`} />
                            </svg>
                            }
                        link={item.link}
                    />
                )}
            </div>
        </Fragment>
    )
};
export default CargoTemplate;