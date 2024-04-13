import { Table } from "@/components/organism/Table";
import { filterDocumentUseCase } from "@/modules/Documentos/usecases/filterDocumentUseCase";


const heads = ["Identificacion", "Posicion", "Prestamo", "Solicitud", "Despachado", "Fecha1", "Usuario", "Caja1"];

export const DocumentosTable = async ({
  searchParams,
}: {
  searchParams?: {
    prestamo?: string;
    solicitud?: string;
    identificacion?: string;
    fecha1?: string;
  };
}) => {
  const data = await filterDocumentUseCase({ searchParams: searchParams });

  if (data.error) {
    console.error(data.error);
    return null;
  }

  return <Table heads={heads} rows={data.documentos} />;
};
