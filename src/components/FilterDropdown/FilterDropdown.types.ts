export type FilterDropdownProps = {
    label: string;
    isOpen: boolean;
    onToggle: () => void;
    children: React.ReactNode;
    hasActive?: boolean;
  };