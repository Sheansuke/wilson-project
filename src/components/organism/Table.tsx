import { TableLink } from "@/components/atoms/TableLink";
import { forwardRef, useRef } from "react";


export const Table = forwardRef(function TableComponent(props: any,ref: any) {
  return (
    <>
      <div ref={ref} className="mt-4">
        <table className="table ">
          {/* head */}
          <thead>
            <tr className="text-lg font-bold text-gray-950">
              {props.heads?.map((head: any, index: any) => (
                <th key={index} className="text-gray-950 font-bold p-2">
                  {head}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {props.rows?.map((row:any, index:any) => (
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
        {props.rows?.length === 0 && <EmptyTable />}
      </div>
    </>
  );
});

const EmptyTable = () => {
  return (
    <div className="flex justify-center items-center mt-4">
      <p className="text-gray-500 text-2xl">No hay registros</p>
    </div>
  );
};
