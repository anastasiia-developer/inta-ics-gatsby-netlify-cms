import React from 'react'
import PropTypes from 'prop-types'
import {InternationalCargoTemplate} from "../../templates/international-cargo";

const InternationalCargoPreview = ({ entry }) => {
    const data = entry.getIn(['data']).toJS();

    if (data) {
        return (
            <InternationalCargoTemplate
                title={data.title}
                crumbLabelParent={data.crumbLabelParent || ''}
                crumbLabel={data.crumbLabel || ''}
                header={data.header || {}}
                description={data.description || {}}
                sections={data.sections || {}}
                seoSections={data.seoSections || {}}
            />
        )
    } else {
        return <div>Loading...</div>
    }
};

InternationalCargoPreview.propTypes = {
    entry: PropTypes.shape({
        getIn: PropTypes.func,
    }),
};

export default InternationalCargoPreview
