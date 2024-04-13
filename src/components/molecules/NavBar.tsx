import { NextLink } from "@/components/atoms/Link";

export const NavBar = () => {
  return (
    <nav className="bg-gray-900 p-4">
      <ul className="flex justify-between items-center">
        <li>
          <NextLink href="/" className="text-gray-300 text-2xl" title="Gestion Documental" />
        </li>
        <li>
        <NextLink href="/" className="text-gray-300 text-lg" title="Inicio" />
        </li>
      </ul>
    </nav>
  );
};
