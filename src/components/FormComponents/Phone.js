import React from "react";
import InputMask from 'react-input-mask';

const Phone = (props) =>
    <InputMask {...props}
        placeholder={props.placeholder || '+38 (0__) ___-__-__'}
        mask="+38 (099) 999-99-99" />

export default Phone;