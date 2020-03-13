import React from 'react'
import PropTypes from 'prop-types'
import { IndexPageTemplate } from '../../pages/index'

const IndexPagePreview = ({ entry }) => {
  const data = entry.getIn(['data']).toJS();

  if (data) {
    return (
      <IndexPageTemplate
        title={data.title}
        description={data.description}
        mainpitch={data.mainpitch || {}}
        header={data.header || {}}
        section={data.section || {}}
        about={data.about || {}}
        seoSections={data.seoSections || {}}
      />
    )
  } else {
    return <div>Loading...</div>
  }
};

IndexPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
};

export default IndexPagePreview
