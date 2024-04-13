"use client"

import { useRouter } from "next/navigation";

export const TableLink = ({ href, title }: { href: string; title: string }) => {
  const { push } = useRouter();
  return <td onClick={() => push(href)} className="link">{title}</td>;
};
