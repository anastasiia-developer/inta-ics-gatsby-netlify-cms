import React from 'react'
import PropTypes from 'prop-types'
import { ContactPageTemplate } from '../../pages/contacts'


const ContactPagePreview = ({ entry }) => {
  const data = entry.getIn(['data']).toJS();

  if(data) {
    return (
        <ContactPageTemplate
            title={data.title}
            description={data.description}
            header={data.header || {}}
            morePhotoIcon={data.fileName}
            form={data.form}
        />
    )
  }else {
    return <div>Loading...</div>
  }
};

ContactPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
}

export default ContactPagePreview
