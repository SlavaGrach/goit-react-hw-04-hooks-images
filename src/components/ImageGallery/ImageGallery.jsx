import React from "react";
import PropTypes from "prop-types";
import ImageGalleryItem from "../ImageGalleryItem/ImageGalleryItem";
import { List } from "./ImageGallery.styled";

const ImageGallery = ({ images, onSelect }) => {
  return (
    <div>
      <List>
        {images.map((img) => {
          const { id, webformatURL, tags, largeImageURL } = img;

          return (
            <ImageGalleryItem
              onSelect={onSelect}
              key={id}
              src={webformatURL}
              alt={tags}
              largeImageURL={largeImageURL}
            />
          );
        })}
      </List>
    </div>
  );
};

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      webformatURL: PropTypes.string.isRequired,
      largeImageURL: PropTypes.string.isRequired,
    })
  ).isRequired,
  onSelect: PropTypes.func.isRequired,
};

export default ImageGallery;
