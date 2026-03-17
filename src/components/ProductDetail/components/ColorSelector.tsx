import cn from "classnames";
import { COLOR_MAP } from "../../../utils/resolveProductImage";
import styles from "../ProductDetail.module.css";
import scrollToTop from "../../../utils/scrollToTop";

type ColorSelectorProps = {
  colors: string[];
  selectedColor?: string;
  setSelectedColor: (value: React.SetStateAction<string | undefined>) => void;
  setSelectedSize: (value: React.SetStateAction<string | undefined>) => void;
};

const ColorSelector = (props: ColorSelectorProps) => {
  const { colors, selectedColor, setSelectedColor, setSelectedSize } = props;
  
  if (!colors.length) return null;

  return (
    <>
      <div className={styles["option-label"]}>
        Color <span>{selectedColor}</span>
      </div>

      <div className={styles["option-group"]}>
        {colors.map((c: string) => (
          <button
            key={c}
            className={cn(styles["color-btn"], {
              [styles.selected]: selectedColor === c,
            })}
            style={{ background: COLOR_MAP[c] ?? "#ccc" }}
            onClick={() => {
              setSelectedColor(c);
              setSelectedSize(undefined);
              scrollToTop()
            }}
          />
        ))}
      </div>
    </>
  );
};

export default ColorSelector;
