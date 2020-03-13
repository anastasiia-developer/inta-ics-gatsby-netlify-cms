import React from 'react'
import PropTypes from 'prop-types'
import { CostPageTemplate } from '../../pages/cost'

const CostPagePreview = ({ entry }) => {
    const data = entry.getIn(['data']).toJS();

    if (data) {
        return (
            <CostPageTemplate
                title={data.title}
                description={data.description}
                header={data.header || ''}
                sections={data.sections || ''}
                seoSections={data.seoSections || ''}
            />
        )
    } else {
        return <div>Loading...</div>
    }
};

CostPagePreview.propTypes = {
    entry: PropTypes.shape({
        getIn: PropTypes.func,
    }),
    getAsset: PropTypes.func,
};

export default CostPagePreview
