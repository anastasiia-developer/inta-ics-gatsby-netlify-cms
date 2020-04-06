import React, {useState} from "react";
import InputMask from 'react-input-mask';

const Phone = (props) => {
    const [valid, setValid] = useState(false);

    return (
        <InputMask {...props}
            placeholder={props.placeholder || '+38 (0__) ___-__-__'}
            mask="+38 (099) 999-99-99"
            style={{border: `${valid ? "1px solid red" : ""}`}}
            onBlur={(e) => setValid(e.target.value.length < 1 || e.target.value.includes("_"))}
        />
    )
};

export default Phone;