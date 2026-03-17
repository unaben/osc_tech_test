export interface FooterLink {
    label: string;
    href?: string;
    onClick?: () => void;
  }
  
  export interface FooterColumn {
    title: string;
    links: FooterLink[];
  }
  
  export interface FooterProps {
    columns?: FooterColumn[];
    onNavigate?: (href: string) => void;
  }