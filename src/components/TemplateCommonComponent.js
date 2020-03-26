import React, {Fragment} from 'react'
import OurServices from './OurServices'
import OurServicesRu from './OurServices/index.ru'
import Destinations from "./Destinations"
import DestinationsRu from "./Destinations/index.ru"
import Cargo from "./Cargo"
import CargoRu from "./Cargo/index.ru"
import Clients from "./Clients"
import ClientsRu from "./Clients/index.ru"

const TemplateCommonComponent = ({locale}) =>
    <Fragment>
        {locale === 'ua' ?
            <Fragment>
                <OurServices/>
                <Destinations />
                <Cargo/>
                <Clients/>
            </Fragment>
            :
            <Fragment>
                <OurServicesRu/>
                <DestinationsRu/>
                <CargoRu/>
                <ClientsRu/>
            </Fragment>
        }
    </Fragment>;

export default TemplateCommonComponent