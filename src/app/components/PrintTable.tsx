"use client";

import { Table } from "@/components/organism/Table";
import { IDocumentos } from "@/interfaces/IDocumentos";
import { useRef } from "react";
import ReactToPrint, { useReactToPrint } from "react-to-print";

interface TableProps {
  heads: string[];
  rows?: IDocumentos[];
}

export const PrintTable = ({ heads = [], rows = [] }: TableProps) => {
  const componentRef = useRef();

  const handlePrint = useReactToPrint({
    content: () => componentRef.current!,
    pageStyle: `@page { size: A4 landscape; } `,
  });

  return (
    < div className="overflow-x-auto container flex flex-col">
      <Table heads={heads} rows={rows} ref={componentRef} />
      <button onClick={handlePrint} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-36 self-end mt-4" > Imprimir </button>
    </div>
  );
};
