import React, { useState, useEffect } from 'react';
import { Button } from './Button/Button';
import { GlobalStyle } from './GlobalStyle';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Searchbar } from './Searchbar/Searchbar';
import { fetchImages } from './services/api';
import { Container } from './App.styled';
import { Loader } from './Loader/Loader';
import toast, { Toaster } from 'react-hot-toast';

export const App = () => {
  const [images, setImages] = useState([]);
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      if (!query) return;

      try {
        setIsLoading(true);
        setError(false);

        const searchQuery = query.split('/').pop();
        const findImages = await fetchImages(searchQuery, page);

        if (findImages.totalHits === 0) {
          toast.error(
            'Sorry, there are no images matching your search query. Please try again.'
          );
          return;
        }

        if (findImages.hits.length) {
          setImages(prevImages => [...prevImages, ...findImages.hits]);
          setTotalPages(Math.ceil(findImages.totalHits / 12));
        }

        if (page >= Math.ceil(findImages.totalHits / 12)) {
          toast('No more images to load.');
        }
      } catch (error) {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [query, page]);

  const handleLoadMore = () => {
    setPage(prevPage => prevPage + 1);
  };

  const handleSubmit = newQuery => {
    const timeId = Date.now();
    setQuery(`${timeId}/${newQuery}`);
    setPage(1);
    setImages([]);
    setTotalPages(null);
  };

  return (
    <Container>
      <Searchbar onSubmit={handleSubmit}></Searchbar>
      {error && <p>{error}</p>}
      {isLoading && <Loader />}
      {images.length > 0 && <ImageGallery images={images}></ImageGallery>}

      {page < totalPages && <Button onClick={handleLoadMore}></Button>}
      <GlobalStyle />
      <Toaster position="top-right" reverseOrder={false} />
    </Container>
  );
};
