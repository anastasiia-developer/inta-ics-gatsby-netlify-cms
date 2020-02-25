import React from 'react'
import PropTypes from 'prop-types'
import { ReviewsPageTemplate } from "../../templates/reviews";

const ReviewPagePreview = ({ entry, getAsset }) => {
    const data = entry.getIn(['data']).toJS();

    if (data) {
        return (
            <ReviewsPageTemplate
                title={data.title}
                description={data.description}
                mainpitch={data.mainpitch || {}}
                header={data.header || {}}
                section={data.section || {}}
                about={data.about || {}}
            />
        )
    } else {
        return <div>Loading...</div>
    }
};

ReviewPagePreview.propTypes = {
    entry: PropTypes.shape({
        getIn: PropTypes.func,
    })
};

export default ReviewPagePreview
