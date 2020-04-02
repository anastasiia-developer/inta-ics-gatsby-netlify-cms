import React from "react"
import {encode} from "../../pages/contacts/form";

const HandleSubmit = ({event: e, body: body, setPopupOpen: setPopupOpen}) => {
    e.preventDefault();

    const form = e.target;

    fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode({
            'form-name': form.getAttribute('name'),
            ...body
        }),
    })
        .then(() => setPopupOpen(true))
        .catch(error => alert(error))
};

export default HandleSubmit;