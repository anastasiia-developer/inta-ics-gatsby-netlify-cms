import React from "react";

const FlagTemplate = ({ countries, setOptions, stateOptions }) => {
    if(countries){
        return(
            <div className="row flags">
                {countries.map((item, index) => (
                    <div
                        className="row"
                        key={index}
                        onClick={() => setOptions({open: !stateOptions, value: item.country, flag:item.flag.name})}
                    >
                        <img src={item.flag.publicURL} alt="flag"/>
                        <p>{item.country}</p>
                    </div>
                ))}
            </div>
        )}
    else{
        return <div>..loading</div>
    }
};

export default FlagTemplate;
