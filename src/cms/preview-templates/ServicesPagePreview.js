import React from 'react'
import PropTypes from 'prop-types'
import {ServicesPageTemplate} from "../../templates/services";

const ServicesPagePreview = ({ entry }) => {
    const data = entry.getIn(['data']).toJS();

    if (data) {
        return (
            <ServicesPageTemplate
                title={data.title}
                crumbLabelParent={data.crumbLabelParent || ''}
                crumbLabel={data.crumbLabel || ''}
                header={data.header || {}}
                description={data.description || ''}
                sections={data.sections || {}}
                seoSections={data.seoSections || {}}
            />
        )
    } else {
        return <div>Loading...</div>
    }
};

ServicesPagePreview.propTypes = {
    entry: PropTypes.shape({
        getIn: PropTypes.func,
    })
};

export default ServicesPagePreview
