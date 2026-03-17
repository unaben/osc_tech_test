import { useState } from "react";
import scrollToTop from "../../utils/scrollToTop";
import { useQueryParam } from "../../hook";
import {
  IconInstagram,
  IconTikTok,
  IconTwitterX,
  IconPinterest,
  IconGlobe,
  IconChevronDown,
  IconCheck,
} from "../Icons";
import type { StoreGender } from "../../types/interface";
import { DEFAULT_COLUMNS } from "./constant/DEFAULT_COLUMNS";
import { FooterLink, FooterProps } from "./Footer.types";
import styles from "./Footer.module.css";

const Footer = ({ columns = DEFAULT_COLUMNS, onNavigate }: FooterProps) => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [emailError, setEmailError] = useState(false);

  const currentYear = new Date().getFullYear();

  const handleSubscribe = () => {
    const valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    if (!valid) {
      setEmailError(true);
      return;
    }
    setEmailError(false);
    setSubscribed(true);
  };

  const { setParam: setActiveGender } = useQueryParam<StoreGender>("gender");

  const handleLinkClick = (link: FooterLink) => {
    if (link.onClick) {
      link.onClick();
      return;
    }
    if (link.href && onNavigate) onNavigate(link.href);

    if (link.label === "Men") {
      setActiveGender("men");
      scrollToTop();
    }
    if (link.label === "Women") {
      setActiveGender("women");
      scrollToTop();
    }
    if (link.label === "Unisex") {
      setActiveGender("unisex");
      scrollToTop();
    }
  };
  return (
    <footer className={styles["footer"]}>
      <div className={styles["footer-top"]}>
        {/* ── Brand + newsletter ── */}
        <div className={styles["footer-brand-col"]}>
          <span className={styles["footer-logo"]}>LOGN</span>
          <p className={styles["footer-tagline"]}>
            Elevated essentials crafted for how you actually live. Quality
            without compromise, style without effort.
          </p>

          <div className={styles["footer-newsletter-label"]}>
            Stay in the loop
          </div>
          {subscribed ? (
            <div className={styles["footer-newsletter-success"]}>
              <IconCheck /> You're on the list — welcome.
            </div>
          ) : (
            <form
              className={styles["footer-newsletter-form"]}
              onSubmit={(e) => {
                e.preventDefault();
                handleSubscribe();
              }}
            >
              <input
                className={styles["footer-newsletter-input"]}
                type="email"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  setEmailError(false);
                }}
                style={
                  emailError
                    ? { borderColor: "rgba(220,80,80,0.6)" }
                    : undefined
                }
                aria-label="Email address"
              />
              <button className={styles["footer-newsletter-btn"]} type="submit">
                Subscribe
              </button>
            </form>
          )}
        </div>

        {/* ── Link columns ── */}
        {columns.map((col) => (
          <div key={col.title}>
            <div className={styles["footer-col-title"]}>{col.title}</div>
            <ul className={styles["footer-col-links"]}>
              {col.links.map((link) => (
                <li key={link.label}>
                  <button onClick={() => handleLinkClick(link)}>
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className={styles["footer-bottom"]}>
        <div className={styles["footer-bottom-left"]}>
          <span className={styles["footer-copyright"]}>
            © {currentYear} LOGN. All rights reserved.
          </span>
          <nav className={styles["footer-legal"]} aria-label="Legal">
            {["Privacy policy", "Terms of service", "Cookie settings"].map(
              (label) => (
                <button
                  key={label}
                  onClick={() =>
                    onNavigate?.(`/${label.toLowerCase().replace(/ /g, "-")}`)
                  }
                >
                  {label}
                </button>
              )
            )}
          </nav>
        </div>

        <div className={styles["footer-bottom-right"]}>
          {/* Social */}
          <div className={styles["footer-social"]} aria-label="Social media">
            {[
              { icon: <IconInstagram />, label: "Instagram" },
              { icon: <IconTikTok />, label: "TikTok" },
              { icon: <IconTwitterX />, label: "X (Twitter)" },
              { icon: <IconPinterest />, label: "Pinterest" },
            ].map(({ icon, label }) => (
              <button
                key={label}
                className="footer-social-btn"
                aria-label={label}
              >
                {icon}
              </button>
            ))}
          </div>

          {/* Locale */}
          <button
            className={styles["footer-locale-btn"]}
            aria-label="Change language or region"
          >
            <IconGlobe /> EN · GBP <IconChevronDown />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
