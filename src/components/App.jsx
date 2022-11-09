import { useState, useEffect } from 'react';
import css from '../components/App.module.css';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import { url } from 'components/Constant/Url';
import { key } from 'components/Constant/Key';
import axios from 'axios';

const APIfetchImages = ({ query = '', page = 1, perPage = 12 } = {}) => {
  return axios.get(
    `${url}?q=${query}&page=${page}&key=${key}&image_type=photo&orientation=horizontal&per_page=${perPage}`
  );
};

export default function App() {
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [image, setImage] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!query) {
      return;
    }

    const fetchImages = () => {
      setLoading(true);
      APIfetchImages({ query: query, page })
        .then(responseImages => {
          setImage(prevImage => [...prevImage, ...responseImages.data.hits]);
        })
        .catch(error => setError(error.message))
        .finally(() => setLoading(false));
    };

    fetchImages();
  }, [page, query]);

  const handleFormSubmit = query => {
    setQuery(query);
    setPage(1);
    setImage([]);
    setError(null);
  };

  const loadMore = () => {
    setPage(prevPage => prevPage + 1);
    console.log(page);
  };

  return (
    <div className={css.app}>
      <Searchbar submit={handleFormSubmit} />
      <ImageGallery
        query={query}
        loadMore={loadMore}
        page={page}
        image={image}
        loading={loading}
        error={error}
      />
    </div>
  );
}
