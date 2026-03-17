import { useState } from "react";
import cn from "classnames";
import { useLocation, useNavigate } from "react-router-dom";
import { IconSearch, IconUser, IconCart } from "../Icons";
import CheckoutNav from "./components/CheckoutNav";
import type { StoreGender } from "../../types/interface";
import type { HeaderProps } from "./Header.types";
import { useQueryParam } from "../../hook";
import styles from "./Header.module.css";

const Header = (props: HeaderProps) => {
  const { setCartOpen, totalCartQty, setSearchOpen } = props;

  const navigate = useNavigate();
  const { pathname } = useLocation();

  const { setParam: setActiveGender, value: activeGender } =
    useQueryParam<StoreGender>("gender");

  const [menuOpen, setMenuOpen] = useState(false);

  const genders: StoreGender[] = ["men", "women", "unisex"];

  const path = pathname.split("/")[1];

  const isCheckoutPage = path === "checkout";
  const isConfirmPage = path === "confirm";
  const isHomePage = path === "";

  const showDesktopNav = isHomePage;
  const showHamburger = isHomePage
  const showLogo = !isCheckoutPage;
  const showActions = !isCheckoutPage;

  return (
    <nav className={styles.nav}>
      {showHamburger && (
        <button
          className={styles.hamburger}
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          <span />
          <span />
          <span />
        </button>
      )}

      {showLogo && (
        <button onClick={() => navigate("/")} className={styles["nav-logo"]}>
          LOGN
        </button>
      )}

      {showDesktopNav && (
        <div className={styles["nav-links"]}>
          {genders.map((g) => (
            <button
              key={g}
              className={cn(styles["nav-link"], {
                [styles.active]: activeGender === g,
              })}
              onClick={() => setActiveGender(g)}
            >
              {g.charAt(0).toUpperCase() + g.slice(1)}
            </button>
          ))}

          <button className={styles["nav-link"]}>Collections</button>

          <button className={styles["nav-link"]}>News</button>
        </div>
      )}

      {showActions && (
        <div className={styles["nav-actions"]}>
          {!isConfirmPage && (
            <button
              className={styles["nav-btn"]}
              onClick={() => setSearchOpen(true)}
            >
              <IconSearch />
            </button>
          )}

          <button className={styles["nav-btn"]}>
            <IconUser />
          </button>

          <button
            className={styles["nav-btn"]}
            onClick={() => setCartOpen(true)}
          >
            <IconCart />

            {totalCartQty > 0 && (
              <span className={styles["cart-badge"]}>{totalCartQty}</span>
            )}
          </button>
        </div>
      )}

      {menuOpen && (
        <div className={styles.mobileMenu}>
          {genders.map((g) => (
            <button
              key={g}
              className={styles.mobileLink}
              onClick={() => {
                setActiveGender(g);
                setMenuOpen(false);
              }}
            >
              {g.charAt(0).toUpperCase() + g.slice(1)}
            </button>
          ))}

          <button className={styles.mobileLink}>Collections</button>

          <button className={styles.mobileLink}>News</button>
        </div>
      )}

      {isCheckoutPage && <CheckoutNav />}
    </nav>
  );
};

export default Header;
