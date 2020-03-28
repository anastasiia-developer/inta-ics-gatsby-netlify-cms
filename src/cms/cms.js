import CMS from 'netlify-cms-app'
import uploadcare from 'netlify-cms-media-library-uploadcare'
import cloudinary from 'netlify-cms-media-library-cloudinary'

import AboutPagePreview from './preview-templates/AboutPagePreview'
import BlogPostPreview from './preview-templates/BlogPostPreview'
import IndexPagePreview from './preview-templates/IndexPagePreview'
import DeliveryPagePreview from "./preview-templates/DeliveryPagePreview"
import ReviewPagePreview from './preview-templates/ReviewPagePreview'
import CostPagePreview from './preview-templates/CostPagePreview'
import InternationalCargoPreview from './preview-templates/internationaCargoPreview'
import ServicesPagePreview from './preview-templates/ServicesPagePreview'

import withStyledComponentsRendered from './StyleManager'
import InternationalDestinationsPreview from "./preview-templates/InternationalDestinationsPreview";

CMS.registerMediaLibrary(uploadcare)
CMS.registerMediaLibrary(cloudinary)

CMS.registerPreviewTemplate(
    'index',
    withStyledComponentsRendered(IndexPagePreview)
);
CMS.registerPreviewTemplate(
    'index-ru',
    withStyledComponentsRendered(IndexPagePreview)
);
CMS.registerPreviewTemplate(
    'delivery',
    withStyledComponentsRendered(DeliveryPagePreview)
);
CMS.registerPreviewTemplate(
    'delivery-ru',
    withStyledComponentsRendered(DeliveryPagePreview)
);
CMS.registerPreviewTemplate(
    'about',
    withStyledComponentsRendered(AboutPagePreview)
)
CMS.registerPreviewTemplate(
    'about-ru',
    withStyledComponentsRendered(AboutPagePreview)
)
CMS.registerPreviewTemplate(
    'blog',
    withStyledComponentsRendered(BlogPostPreview)
);
CMS.registerPreviewTemplate(
    'blog-ru',
    withStyledComponentsRendered(BlogPostPreview)
);
CMS.registerPreviewTemplate(
    'cost',
    withStyledComponentsRendered(CostPagePreview)
);
CMS.registerPreviewTemplate(
    'cost-ru',
    withStyledComponentsRendered(CostPagePreview)
);
CMS.registerPreviewTemplate(
    'reviews',
    withStyledComponentsRendered(ReviewPagePreview)
);
CMS.registerPreviewTemplate(
    'international-destinations',
    withStyledComponentsRendered(InternationalDestinationsPreview)
);
CMS.registerPreviewTemplate(
    'international-destinations-ru',
    withStyledComponentsRendered(InternationalDestinationsPreview)
);
CMS.registerPreviewTemplate(
    'international-cargo',
    withStyledComponentsRendered(InternationalCargoPreview)
);
CMS.registerPreviewTemplate(
    'international-cargo-ru',
    withStyledComponentsRendered(InternationalCargoPreview)
);
CMS.registerPreviewTemplate(
    'services',
    withStyledComponentsRendered(ServicesPagePreview)
);
CMS.registerPreviewTemplate(
    'services-ru',
    withStyledComponentsRendered(ServicesPagePreview)
);

