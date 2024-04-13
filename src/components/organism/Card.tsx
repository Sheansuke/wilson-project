import { ImageUpload } from "@/app/documento/[identificacion]/components/imageUpload";
import { CardInfo } from "@/components/atoms/CardInfo";
import { IDocumentos } from "@/interfaces/IDocumentos";


export const Card = ({ documento }: { documento: IDocumentos }) => {
  return (
    <div className=" bg-gray-100 shadow-md rounded-lg p-6 flex gap-8">
      {/* IMAGEN */}
      <ImageUpload documento={documento} />

      {/* INFO */}
      <div>
        <CardInfo title="Prestamo" value={documento.prestamo} />
        <CardInfo title="Posicion" value={documento.posicion} />
        <CardInfo title="Solicitud" value={documento.solicitud} />
        <CardInfo title="Identificacion" value={documento.identificacion} />
        <CardInfo title="Garantia 1" value={documento.garantia1} />
        <CardInfo title="Garantia 2" value={documento.garantia2} />
        <CardInfo title="Garantia 3" value={documento.garantia3} />
        <CardInfo title="Caja 1" value={documento.caja1} />
        <CardInfo title="Fecha 1" value={documento.fecha1} />
        <CardInfo title="Caja 2" value={documento.caja2} />
        <CardInfo title="Usuario" value={documento.usuario} />
        <CardInfo title="Fecha 2" value={documento.fecha2} />
        <CardInfo title="Despachado" value={documento.despachado ? "Si" : "No"} />
      </div>
    </div>
  );
};
