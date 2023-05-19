import styles from "src/assets/styles/components/navbar.module.css";
import { Icon } from "@iconify/react";
import { useState } from "react";
import NavItems from "./navItems";
import SearchBar from "./SearchBar";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpenSearch, setIsOpenSearch] = useState(false);

  return (
    <>
      <div className="container">
        <div className={styles.navbar}>
          <Link to="/">
            <Icon icon="ph:codesandbox-logo-fill" width="60" color="#0156FF" />
          </Link>
          {isOpenSearch ? <SearchBar /> : <NavItems />}
          <div className={styles.navbar_right}>
            <button onClick={() => setIsOpenSearch(!isOpenSearch)}>
              {!isOpenSearch ? (
                <Icon icon="ic:baseline-search" width={28} />
              ) : (
                <Icon icon="tabler:x" width={28} />
              )}
            </button>
            <div className={styles.cart}>
              <Icon icon="ci:shopping-cart-01" width={28} />
              <span>2</span>
            </div>
            <Icon icon="mdi:user-circle" width={28} />
          </div>
        </div>
      </div>
      <div style={{ border: "1px solid #CACDD8" }}></div>
    </>
  );
};

export default Navbar;
