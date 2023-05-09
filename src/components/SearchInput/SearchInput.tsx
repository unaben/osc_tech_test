import { FC } from "react";
import "./SearchInput.css";

type ISearchProductProps = {
  searchTerm: string;
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
};

const SearchProduct: FC<ISearchProductProps> = ({
  searchTerm,
  setSearchTerm,
}) => {
  return (
    <form className="search-container">
      <input
        className="search-input"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        type="text"
        name="searchTerm"
        id="search-term"
        placeholder="Search products...."
      />
    </form>
  );
};

export default SearchProduct;
