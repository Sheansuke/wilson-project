import Link from "next/link";
import { StyleHTMLAttributes } from "react";

interface LinkProps {
  href: string;
  title: string;
  className?: string;
}

export const NextLink = ({ href, title, className}: LinkProps) => {
  return <Link href={href} className={`${className} transition-all hover:text-gray-50`}>{title}</Link>;
};
