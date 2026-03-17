import classNames from "classnames";
import { IconChevronDown } from "../Icons";
import FilterDropdownWrapper from "./FilterDropdownWrapper";
import type { FilterDropdownProps } from "./FilterDropdown.types";
import { stopPropagation } from "./FilterDropdown.utils";
import styles from "./FilterDropdown.module.css";

const FilterDropdown = (props: FilterDropdownProps) => {
  const { label, isOpen, onToggle, children, hasActive } = props;

  return (
    <FilterDropdownWrapper>
      <button
        className={classNames(styles.srFilterBtn, {
          [styles.open]: isOpen,
          [styles.active]: hasActive,
        })}
        onClick={onToggle}
      >
        {label} <IconChevronDown />
      </button>

      {isOpen && (
        <div className={styles.srDropdown} onClick={stopPropagation}>
          {children}
        </div>
      )}
    </FilterDropdownWrapper>
  );
};

export default FilterDropdown;
