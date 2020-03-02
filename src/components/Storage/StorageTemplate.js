import { Section } from './style';
import React from "react";
import {Link} from "gatsby";

const StorageTemplate = ({ storage }) => {
    if(storage){
        return(
            <Section>
                <h4 className="storage-title">Наши склады</h4>
                <div className="row flags">
                    {storage.map((item, index) => (
                        <Link
                            to='/contact'
                            className="row"
                            key={index}
                        >
                            <img src={item.flag.publicURL} alt="flag"/>
                            <p>{item.country}</p>
                        </Link>
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