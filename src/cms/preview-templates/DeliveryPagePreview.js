import React from 'react'
import PropTypes from 'prop-types'
import { DeliveryTemplate } from '../../templates/delivery'
import {IndexPageTemplate} from "../../pages";

const DeliveryPagePreview = ({ entry }) => {
    const data = entry.getIn(['data']).toJS();

    if (data) {
        return (
            <DeliveryTemplate
                title={data.title}
                header={data.header || ''}
                description={data.description || ''}
                sections={data.sections || ''}
                sectionText={data.sectionText || ''}
                seoSections={data.seoSections || ''}
            />
        )
    } else {
        return <div>Loading...</div>
    }
};

DeliveryPagePreview.propTypes = {
    entry: PropTypes.shape({
        getIn: PropTypes.func,
    }),
    getAsset: PropTypes.func,
};

export default DeliveryPagePreview
