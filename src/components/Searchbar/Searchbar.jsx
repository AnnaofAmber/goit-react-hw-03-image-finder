export const Searchbar = ({ onSubmit }) => {
  return (
  <header>
    <form onSubmit={onSubmit}>
        <button>
            <span>Search</span>
        </button>
        <input type="text" />
    </form>
  </header>);
};
