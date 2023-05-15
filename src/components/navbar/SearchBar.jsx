import styles from "src/assets/styles/components/navbar.module.css";
import { Icon } from "@iconify/react";

const SearchBar = () => {
  return (
    <div className={styles.searchBar}>
      <input type="text" placeholder="Search entiere store here..." />
      <Icon icon="ic:baseline-search" width={28} />
    </div>
  );
};

export default SearchBar;
