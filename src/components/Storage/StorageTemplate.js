import { Section } from './style';
import React from "react";

const StorageTemplate = ({ storage }) => {
    if(storage){
        return(
            <Section>
                <h4 className="storage-title">Наши склады</h4>
                <div className="row flags">
                    {storage.map((item, index) => (
                        <div
                            className="row"
                            key={index}
                        >
                            <img src={item.flag.publicURL} alt="flag"/>
                            <p>{item.country}</p>
                        </div>
                    ))}
                </div>
            </Section>
        )
    }
    else{
        return <div>..loading</div>
    }
};

export default StorageTemplate;