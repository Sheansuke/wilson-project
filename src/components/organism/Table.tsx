import { TableLink } from "@/components/atoms/TableLink";
import { IDocumentos } from "@/interfaces/IDocumentos";

interface TableProps {
  heads: string[];
  rows?: IDocumentos[];
}

export const Table = ({ heads = [], rows = [] }: TableProps) => {
  return (
    <div className="overflow-x-auto container">
      <table className="table">
        {/* head */}
        <thead>
          <tr className="text-lg font-bold text-gray-950">
            {heads?.map((head, index) => (
              <th key={index} className="text-gray-950 font-bold p-2">
                {head}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows?.map((row, index) => (
            <tr key={index} className="text-gray-950">
              <TableLink href={`/documento/${row.identificacion}`} title={row.identificacion} />
              <td>{row.posicion}</td>
              <td>{row.prestamo}</td>
              <td>{row.solicitud}</td>
              <td>{row.despachado ? "Si" : "No"}</td>
              <td>{row.fecha1}</td>
              <td>{row.usuario}</td>
              <td>{row.caja1}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {rows?.length === 0 && <EmptyTable />}
    </div>
  );
};

const EmptyTable = () => {
  return (
    <div className="flex justify-center items-center mt-4">
      <p className="text-gray-500 text-2xl">No hay registros</p>
    </div>
  );
};
