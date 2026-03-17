import cn from "classnames";
import { IconChevronDown, IconGrid3, IconGrid4 } from "../../Icons";
import {
  SORT_LABELS,
  type SortOption,
  type SearchFilterBarProps,
} from "../SearchResults.types";
import FilterDropdown from "../../FilterDropdown/FilterDropdown";
import styles from "../SearchResults.module.css";

const SearchFilterBar = (props: SearchFilterBarProps) => {
  const {
    filters,
    setFilters,
    categories,
    maxPrice,
    openDrop,
    setOpenDrop,
    sort,
    setSort,
    viewCols,
    setViewCols,
    resultsCount,
  } = props;

  const toggleDrop = (name: string) =>
    setOpenDrop(openDrop === name ? null : name);

  const inventoryStatus = ["in_stock", "out_of_stock", "low_stock"] as const;

  const toggleAvail = (v: "in_stock" | "out_of_stock" | "low_stock") =>
    setFilters((f) => ({
      ...f,
      availability: f.availability.includes(v)
        ? f.availability.filter((x) => x !== v)
        : [...f.availability, v],
    }));

  const toggleCategory = (c: string) =>
    setFilters((f) => ({
      ...f,
      categories: f.categories.includes(c)
        ? f.categories.filter((x) => x !== c)
        : [...f.categories, c],
    }));

  return (
    <div className={styles.srFilterBar} onClick={(e) => e.stopPropagation()}>
      <div className={styles.srFilterGroup}>
        <FilterDropdown
          label="Availability"
          isOpen={openDrop === "avail"}
          onToggle={() => toggleDrop("avail")}
          hasActive={filters.availability.length > 0}
        >
          {inventoryStatus.map((v) => (
            <div
              key={v}
              className={styles.srDropdownItem}
              onClick={() => toggleAvail(v)}
            >
              <span
                className={cn(styles.srCheckbox, {
                  [styles.checked]: filters.availability.includes(v),
                })}
              />
              {v === "in_stock"
                ? "In stock"
                : v === "low_stock"
                ? "Low stock"
                : "Out of stock"}
            </div>
          ))}
        </FilterDropdown>

        <FilterDropdown
          label="Price"
          isOpen={openDrop === "price"}
          onToggle={() => toggleDrop("price")}
          hasActive={!!(filters.priceMin || filters.priceMax)}
        >
          <div className={styles.srPriceDrop}>
            <div className={styles.srPriceInputs}>
              <div className={styles.srPriceField}>
                <span>$</span>

                <input
                  type="number"
                  placeholder="0"
                  value={filters.priceMin}
                  onChange={(e) =>
                    setFilters((f) => ({
                      ...f,
                      priceMin: e.target.value,
                    }))
                  }
                />
              </div>

              <span className={styles.to}>to</span>

              <div className={styles.srPriceField}>
                <span>$</span>

                <input
                  type="number"
                  placeholder={maxPrice.toFixed(2)}
                  value={filters.priceMax}
                  onChange={(e) =>
                    setFilters((f) => ({
                      ...f,
                      priceMax: e.target.value,
                    }))
                  }
                />
              </div>
            </div>

            <div className={styles.srPriceHint}>
              The highest price is ${maxPrice.toFixed(2)}
            </div>
          </div>
        </FilterDropdown>

        <FilterDropdown
          label="More filters"
          isOpen={openDrop === "more"}
          onToggle={() => toggleDrop("more")}
          hasActive={filters.categories.length > 0}
        >
          {categories.map((c) => (
            <div
              key={c}
              className={styles.srDropdownItem}
              onClick={() => toggleCategory(c)}
            >
              <span
                className={cn(styles.srCheckbox, {
                  [styles.checked]: filters.categories.includes(c),
                })}
              />
              {c}
            </div>
          ))}
        </FilterDropdown>
      </div>

      <div className={styles.srFilterRight}>
        <span className={styles.srCount}>
          {resultsCount} item
          {resultsCount !== 1 ? "s" : ""}
        </span>

        <div
          className={styles.srSortBtnContent}
          onClick={(e) => e.stopPropagation()}
        >
          <button
            className={styles.srSortBtn}
            onClick={() => toggleDrop("sort")}
          >
            Sort <IconChevronDown />
          </button>

          {openDrop === "sort" && (
            <div className={cn(styles.srDropdown, styles.srSortDrop)}>
              {(Object.keys(SORT_LABELS) as SortOption[]).map((s) => (
                <div
                  key={s}
                  className={cn(
                    styles.srDropdownItem,
                    { [styles.srDropdownItemLargeFont]: sort === s },
                    { [styles.srDropdownItemSmallFont]: sort !== s }
                  )}
                  onClick={() => {
                    setSort(s);
                    setOpenDrop(null);
                  }}
                >
                  {SORT_LABELS[s]}
                </div>
              ))}
            </div>
          )}
        </div>

        <div className={styles.srViewToggle}>
          <button
            className={cn(styles.srViewBtn, {
              [styles.active]: viewCols === 3,
            })}
            onClick={() => setViewCols(3)}
            title="3 columns"
          >
            <IconGrid3 />
          </button>

          <button
            className={cn(styles.srViewBtn, {
              [styles.active]: viewCols === 4,
            })}
            onClick={() => setViewCols(4)}
            title="4 columns"
          >
            <IconGrid4 />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchFilterBar;
