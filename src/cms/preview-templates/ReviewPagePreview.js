import React from 'react'
import PropTypes from 'prop-types'
import { ReviewsPageTemplate } from "../../templates/reviews";

const ReviewPagePreview = ({ entry }) => {
    const data = entry.getIn(['data']).toJS();

    if (data) {
        return (
            <ReviewsPageTemplate
                title={data.title}
                description={data.description}
                header={data.header || {}}
                reviews={data.reviews || {}}
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
