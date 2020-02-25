import CMS from 'netlify-cms-app'
import uploadcare from 'netlify-cms-media-library-uploadcare'
import cloudinary from 'netlify-cms-media-library-cloudinary'

import AboutPagePreview from './preview-templates/AboutPagePreview'
import BlogPostPreview from './preview-templates/BlogPostPreview'
import ProductPagePreview from './preview-templates/ProductPagePreview'
import IndexPagePreview from './preview-templates/IndexPagePreview'
import DeliveryPagePreview from "./preview-templates/DeliveryPagePreview"
import ComponentsCommonPreview from './preview-templates/ComponentsCommonPagePreview'
import ReviewPagePreview from './preview-templates/ReviewPagePreview'


import withStyledComponentsRendered from './StyleManager'

CMS.registerMediaLibrary(uploadcare)
CMS.registerMediaLibrary(cloudinary)

CMS.registerPreviewTemplate(
    'index',
    withStyledComponentsRendered(IndexPagePreview)
);
CMS.registerPreviewTemplate(
    'delivery',
    withStyledComponentsRendered(DeliveryPagePreview)
);
CMS.registerPreviewTemplate(
    'components',
    withStyledComponentsRendered(ComponentsCommonPreview)
);
CMS.registerPreviewTemplate('about', AboutPagePreview)
CMS.registerPreviewTemplate('products', ProductPagePreview)
CMS.registerPreviewTemplate(
    'blog',
    withStyledComponentsRendered(BlogPostPreview)
);
CMS.registerPreviewTemplate(
    'reviews',
    withStyledComponentsRendered(ReviewPagePreview)
);
