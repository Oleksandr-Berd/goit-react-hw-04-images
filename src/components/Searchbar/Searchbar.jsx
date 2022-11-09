import { useState } from 'react';
import { ImSearch } from 'react-icons/im';
import css from '../Searchbar/Searchbar.module.css';

export default function Searchbar({ submit }) {
  const [query, setQuery] = useState('');

  const handleNameChange = evt => {
    setQuery(evt.currentTarget.value.toLowerCase());
  };

  const handleSubmit = evt => {
    evt.preventDefault();

    if (query.trim() === '') {
      alert('Enter some data!');
      return;
    }
    submit(query);
    setQuery('');
  };
  return (
    <header className={css.searchbar}>
      <form onSubmit={handleSubmit} className={css.form}>
        <button type="submit" className={css.button}>
          <ImSearch style={{ marginRight: 8 }} />
          <span className={css.button__label}>Search</span>
        </button>

        <input
          className={css.input}
          type="text"
          autoComplete="off"
          autoFocus
          value={query}
          onChange={handleNameChange}
          placeholder="Search images and photos"
        />
      </form>
    </header>
  );
}
