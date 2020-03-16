import React, {Fragment} from "react";
import { Link } from 'gatsby'

const FlagTemplate = ({ countries, setOptions, stateOptions, link }) => {
    if(countries){
        return(
            <div className="row flags">
                {countries.map((item, index) =>{
                    return  link ?
                            <Link
                                key={index}
                                className="row"
                                to={item.link ? link+item.link : '/'}
                            >
                                <img src={item.flag.publicURL} alt="flag"/>
                                <p>{item.country}</p>
                            </Link>
                            :
                            <div
                                className="row"
                                key={index}
                                onClick={() => setOptions({open: !stateOptions, value: item.country, flag:item.flag.name})}
                            >
                                <img src={item.flag.publicURL} alt="flag"/>
                                <p>{item.country}</p>
                            </div>
                })}
            </div>
        )}
    else{
        return <div>..loading</div>
    }
};

export default FlagTemplate;
