import styles from "../SearchModal.module.css";

type SuggestionsProps = {
  suggestions: string[];
  onViewAll: (query: string) => void;
  onClose: () => void;
};

const Suggestions = (props: SuggestionsProps) => {
  const { onClose, onViewAll, suggestions } = props;

  if (!suggestions.length) {
    return null;
  }
  return (
    <div className={styles.suggestionsContent}>
      {suggestions.map((s) => (
        <button
          key={s}
          onClick={() => {
            onViewAll(s);
            onClose();
          }}
          className={styles.suggestionsButton}
          onMouseEnter={(e) => {
            (e.target as HTMLButtonElement).style.borderColor = "var(--text)";
          }}
          onMouseLeave={(e) => {
            (e.target as HTMLButtonElement).style.borderColor = "var(--border)";
          }}
        >
          {s}
        </button>
      ))}
    </div>
  );
};

export default Suggestions;
