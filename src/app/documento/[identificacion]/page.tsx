import { Despachar } from "@/app/documento/[identificacion]/components/despachar";
import { Card } from "@/components/organism/Card";
import { IDocumentos } from "@/interfaces/IDocumentos";
import { getDocumentByIdentificacionUseCase } from "@/modules/Documentos/usecases/getDocumentByIdentificacionUseCase";

export default async function DocumentoPage({ params }: { params: { identificacion: string } }) {
  const result = await getDocumentByIdentificacionUseCase({ identificacion: params.identificacion });

  if (result.error) {
    throw new Error(result.error);
  }

  const data = result.documentos![0];

  return (
    <>
      <header>
        <h2 className="text-[2rem] text-gray-950 font-bold p-8">DOCUMENTO: ${params.identificacion} </h2>
      </header>

      <section className="p-8">
        <Card documento={data} />

        <div className="flex justify-end mt-4">
        <Despachar documento={data} />
        </div>
      </section>
    </>
  );
}
