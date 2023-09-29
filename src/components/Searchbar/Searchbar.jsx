import css from './Searchbar.module.css';

export const Searchbar = ({ onSubmit }) => {
  return (
    <header className={css.searchbar}>
      <form className={css.searchForm} onSubmit={onSubmit}>
        <button className={css.searchButton}>
          <span className={css.searchButtonLabel}>Search</span>
        </button>
        <input
          className={css.searchInput}
          name="query"
          type="text"
          placeholder="Search images and photos"
          autoFocus
          autoComplete="off"
        />
      </form>
    </header>
  );
};
