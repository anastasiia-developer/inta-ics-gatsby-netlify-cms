import React from 'react'
import PropTypes from 'prop-types'
import {InternationalDestinationsTemplate} from '../../templates/international-destinations';

const InternationalDestinationsPreview = ({ entry }) => {
    const data = entry.getIn(['data']).toJS();

    if (data) {
        return (
            <InternationalDestinationsTemplate
                header={data.header || ''}
                title={data.title}
                description={data.description || ''}
                sections={data.sections || ''}
                seoSections={data.seoSections || ''}
            />
        )
    } else {
        return <div>Loading...</div>
    }
};

InternationalDestinationsPreview.propTypes = {
    entry: PropTypes.shape({
        getIn: PropTypes.func,
    }),
};

export default InternationalDestinationsPreview
