import React from 'react'
import PropTypes from 'prop-types'
import { DeliveryTemplate } from '../../templates/delivery'

const DeliveryPagePreview = ({ entry }) => {
    const data = entry.getIn(['data']).toJS();

    if (data) {
        return (
            <DeliveryTemplate
                title={data.title}
                header={data.header}
                description={data.description}
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
