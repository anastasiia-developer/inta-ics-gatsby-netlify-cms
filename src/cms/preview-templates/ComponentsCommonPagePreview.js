import React from 'react'
import PropTypes from 'prop-types'
import { ComponentsCommonTemplate } from '../../pages/components'

const ComponentsCommonPreview = ({ entry }) => {
    const data = entry.getIn(['data']).toJS();

    if (data) {
        return (
            <ComponentsCommonTemplate
                calculator={data.calculator}
                storage={data.storage}
                destinations={data.destinations}
                reviews={data.reviews}
                clients={data.clients}
            />
        )
    } else {
        return <div>Loading...</div>
    }
};

ComponentsCommonPreview.propTypes = {
    entry: PropTypes.shape({
        getIn: PropTypes.func,
    }),
};

export default ComponentsCommonPreview
