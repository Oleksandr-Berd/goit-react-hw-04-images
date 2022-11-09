import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import { Dna } from 'react-loader-spinner';
import Button from 'components/Button/Button';
import css from './ImageGallery.module.css';

export default function ImageGallery({
  query,
  image,
  loading,
  error,
  loadMore,
}) {
  const shoudlLoadingButton = image.length > 0 && !loading;

  return (
    <ul className={css.gallery}>
      {error && <p>There is no such data:{query}, or just shit happens</p>}
      {loading && (
        <Dna
          visible={true}
          height="80"
          width="80"
          ariaLabel="dna-loading"
          wrapperStyle={{}}
          wrapperClass="dna-wrapper"
        />
      )}
      {!query && <div>Enter some data</div>}
      {image.length > 0
        ? image.map(({ id, webformatURL, tags, largeImageURL }) => (
            <ImageGalleryItem
              key={id}
              webformatURL={webformatURL}
              tags={tags}
              largeImageURL={largeImageURL}
            />
          ))
        : null}
      {shoudlLoadingButton && <Button loadMore={loadMore} />}
    </ul>
  );
}
