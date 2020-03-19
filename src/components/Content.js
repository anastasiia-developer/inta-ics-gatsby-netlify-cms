import React from 'react'
import PropTypes from 'prop-types'
import showdown from 'showdown';



export const HTMLContent = ({ content, className }) => (
  <div className={className} dangerouslySetInnerHTML={{ __html: content }} />
)

export const ContentInFrontmatter = ({ content, className }) => {
  const converter = new showdown.Converter();

  return <HTMLContent content={converter.makeHtml(content)} className={className}/>
}

const Content = ({ content, className }) => (
  <div className={className}>{content}</div>
)

Content.propTypes = {
  content: PropTypes.node,
  className: PropTypes.string,
}

HTMLContent.propTypes = Content.propTypes

export default Content
