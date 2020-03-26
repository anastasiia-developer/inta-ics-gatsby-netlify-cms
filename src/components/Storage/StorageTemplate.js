import { Section, Popup, SectionMorePhotoIcon } from './style';
import React, {Fragment, useState} from "react";
import {Link} from "gatsby";
import Carousel from "react-multi-carousel";
import {ButtonGroup, ResponsiveCarousel} from "../CommonCarousel";
import PreviewCompatibleImage from "../PreviewCompatibleImage";
import {HTMLContent} from "../Content";


const MorePhoto = ({photos, morePhotos, setMorePhotos}) =>
    <Popup isActive={morePhotos} onClick={() => setMorePhotos(false)}>
        <Carousel
            containerClass="wrapper"
            sliderClass="row"
            infinite
            arrows={false}
            renderButtonGroupOutside={true}
            customButtonGroup={<ButtonGroup />}
            slidesToSlide={1}
            responsive={ResponsiveCarousel(1,1)}
        >
            {photos &&
            photos.map((photo, i) => (
                <PreviewCompatibleImage
                    key={i}
                    imageInfo={{
                        image: photo.image,
                    }}
                />
            ))}

        </Carousel>
    </Popup>

const StoreBlock = ({store, morePhotoIcon}) => {
    const [morePhotos, setMore] = useState(false);

    return(
        <div className='store column'>
            <header className="row">
                <img src={store.flag.publicURL} alt="flag"/>
                <div>
                    <h4>{store.country}
                        {store.city &&
                        <span>{store.city}</span>
                        }
                    </h4>
                    <p>{store.postIndex}</p>
                </div>
            </header>
            <HTMLContent
                content={store.address}
                className='address'
            />
            {store.phone &&
            <a href={`tel:${store.phone}`} className='phone'>{store.phone}</a>
            }
            <div className="images">
                <PreviewCompatibleImage
                    imageInfo={{
                        image: store.image,
                    }}
                />
                {store.images &&
                <Fragment>
                    <div
                        className='more-photo-icon'
                        onClick={() => setMore(true)}
                    >
                        <PreviewCompatibleImage
                            className='more-photo-icon-img'
                            imageInfo={{
                                image: morePhotoIcon,
                            }}
                        />
                    </div>
                    <MorePhoto
                        photos={store.images}
                        setMorePhotos={setMore}
                        morePhotos={morePhotos}
                    />
                </Fragment>
                }
            </div>
        </div>
    )
}

const StorageTemplate = ({ data, morePhotoIcon }) => {
    const warehouses = data.markdownRemark.frontmatter.warehouses;

    if(warehouses){
        return(
            <Fragment>
            {morePhotoIcon ?
                <SectionMorePhotoIcon className="wrapper">
                    <h3>{warehouses.title}</h3>
                    <div className="row-to-column container">
                        {warehouses.list.filter(store => store.address !== null)
                            .map((store, index) =>
                                <StoreBlock
                                    key={index}
                                    store={store}
                                    morePhotoIcon={morePhotoIcon}/>
                            )}
                    </div>
                </SectionMorePhotoIcon>
                :
                <Section>
                    <h4 className="storage-title">{warehouses.title}</h4>
                    <div className="row flags">
                        {warehouses.list.map((item, index) => (
                            <Link
                                to='/contact'
                                className="row"
                                key={index}
                            >
                                <img src={item.flag.publicURL} alt="flag"/>
                                <p>{item.country} {item.city}</p>
                            </Link>
                        ))}
                    </div>
                </Section>
            }
            </Fragment>
        )
    }
    else{
        return <div>..loading</div>
    }
};

export default StorageTemplate;