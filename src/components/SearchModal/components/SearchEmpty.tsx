import styles from "../SearchModal.module.css";

const SearchEmpty = ({ query }: { query: string }) => {
  return (
    <div className={styles.searchNoResults}>
      <strong>No results for "{query}"</strong>
      <span>Try searching by product name, category, or style.</span>
    </div>
  );
};

export default SearchEmpty;
