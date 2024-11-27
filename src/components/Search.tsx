import { IoSearchSharp } from "react-icons/io5";
import styles from "./Search.module.css";
import { BookDataType } from "../types/BookDataType";

type Props = {
  search: BookDataType[];
  setSearch: (e: string) => void;
  searchHandler: () => void;
};

function Search({ search, setSearch, searchHandler }: Props) {
  return (
    <div className={styles.search}>
      <input
        type="text"
        placeholder="search books"
        value={search}
        onChange={(e) => setSearch(e.target.value.toLowerCase())}
      />
      <button onClick={searchHandler}>
        <IoSearchSharp />
      </button>
    </div>
  );
}

export default Search;
