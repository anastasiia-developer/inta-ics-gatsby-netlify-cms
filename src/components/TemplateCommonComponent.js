import React, {Fragment} from 'react'
import OurServices from './OurServices'
import OurServicesRu from './OurServices/index.ru'
import Destinations from "./Destinations"
import DestinationsRu from "./Destinations/index.ru"
import Cargo from "./Cargo"
import CargoRu from "./Cargo/index.ru"
import Clients from "./Clients"
import ClientsRu from "./Clients/index.ru"
import Reviews from "./Reviews";
import ReviewsRu from "./Reviews/index.ru";
import News from "./NewsRoll";
import NewsRu from "./NewsRoll/index.ru";
import Calculator from "./Calculator"
import CalculatorRu from "./Calculator/index.ru"

const TemplateCommonComponent = ({locale, services, news, destinations, cargo, clients, reviews, calculate}) =>
    <Fragment>
        {locale === 'ua' ?
            <Fragment>
                {calculate &&
                    <Calculator/>
                }
                {news &&
                    <News/>
                }
                {services &&
                    <OurServices/>
                }
                {destinations &&
                    <Destinations/>
                }
                {cargo &&
                    <Cargo/>
                }
                {clients &&
                    <Clients/>
                }
                {reviews &&
                    <Reviews/>
                }
            </Fragment>
            :
            <Fragment>
                {calculate &&
                    <CalculatorRu/>
                }
                {news &&
                    <NewsRu/>
                }
                {services &&
                    <OurServicesRu/>
                }
                {destinations &&
                    <DestinationsRu/>
                }
                {cargo &&
                    <CargoRu/>
                }
                {clients &&
                    <ClientsRu/>
                }
                {reviews &&
                    <ReviewsRu/>
                }
            </Fragment>
        }
    </Fragment>;

export default TemplateCommonComponent