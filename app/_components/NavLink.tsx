import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface LinkProps {
  label: string;
  path: string;
}

export default function NavLink({ link }: { link: LinkProps }) {
  const pathname = usePathname();

  return (
    <li
      key={link.label}
      className={`hover:bg-foreground hover:text-background p-2 rounded-4xl ${
        pathname === link.path && "bg-foreground text-background "
      }`}
    >
      <Link href={link.path}>{link.label}</Link>
    </li>
  );
}
