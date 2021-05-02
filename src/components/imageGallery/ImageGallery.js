import React from "react";
import ImageGalleryItem from "./imageGalleryItem/ImageGalleryItem";
import style from "./ImageGallery.module.css";

const ImageGallery = ({ imageData, showModalWindow }) => {
    return (
        <ul className={style.ImageGallery}>
            {imageData.map((data) => (
                <ImageGalleryItem
                    urlWeb={data.webformatURL}
                    urlLarge={data.largeImageURL}
                    showModalWindow={showModalWindow}
                    key={data.id}
                />
            ))}
        </ul>
    );
};

export default ImageGallery;


