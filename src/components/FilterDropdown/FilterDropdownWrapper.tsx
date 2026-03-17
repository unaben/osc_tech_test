import { ReactNode } from "react";
import styles from "./FilterDropdown.module.css";

type Props = {
  children: ReactNode;
};

const FilterDropdownWrapper = ({ children }: Props) => {
  return (
    <div
      className={styles.srFilterDropdownWrapper}
    >
      {children}
    </div>
  );
};

export default FilterDropdownWrapper;