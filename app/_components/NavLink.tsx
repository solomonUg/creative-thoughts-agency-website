import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface LinkProps {
  label: string;
  path: string;
}

export default function NavLink({ link }: { link: LinkProps }) {
  const pathname = usePathname();
  console.log(link)

  return (
    <Link href={link.path} 
      key={link.label}
      className={`hover:bg-foreground hover:text-background p-2 rounded-4xl ${
        pathname === link.path && "bg-foreground text-background "
      }`}
    >
    {link.label}
    </Link >
  );
}
