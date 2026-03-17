import type { FooterColumn } from "../Footer.types";

export const DEFAULT_COLUMNS: FooterColumn[] = [
    {
      title: "Shop",
      links: [
        { label: "Men",    href: "/men" },
        { label: "Women",  href: "/women" },
        { label: "Unisex", href: "/unisex" },
        { label: "Collections", href: "/collections" },
        { label: "New Arrivals", href: "/new" },
        { label: "Sale",   href: "/sale" },
      ],
    },
    {
      title: "Help",
      links: [
        { label: "Sizing guide",      href: "/sizing" },
        { label: "Shipping & returns", href: "/shipping" },
        { label: "Track your order",   href: "/track" },
        { label: "FAQ",                href: "/faq" },
        { label: "Contact us",         href: "/contact" },
      ],
    },
    {
      title: "Company",
      links: [
        { label: "About LOGN",   href: "/about" },
        { label: "Sustainability", href: "/sustainability" },
        { label: "Careers",      href: "/careers" },
        { label: "Press",        href: "/press" },
        { label: "Affiliates",   href: "/affiliates" },
      ],
    },
  ];