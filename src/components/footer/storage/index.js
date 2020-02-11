import { Section } from './style';
import {Flags} from "../../mainPage/destinations";
import React from "react";

const Storage = ({countries}) => (
    <Section>
        <h4 className="storage-title">Наши склады</h4>
        <Flags countries={countries}/>
    </Section>
)

export default Storage;