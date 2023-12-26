import React, { useState } from 'react';
import { Item, Image } from './ImageGalleryItem.styled';
import { ImgModal } from 'components/Modal/Modal';

export const ImageGalleryItem = ({ image, tags, largeImage }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(prevIsModalOpen => !prevIsModalOpen);
  };

  return (
    <>
      <Item onClick={toggleModal}>
        <Image src={image} alt={tags} />
      </Item>
      {isModalOpen && (
        <ImgModal
          isOpen={isModalOpen}
          onClose={toggleModal}
          tags={tags}
          image={largeImage}
        />
      )}
    </>
  );
};
