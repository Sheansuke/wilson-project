import { DocumentosTable } from "@/app/components/DocumentosTable";
import { FilterForm } from "@/app/components/FilterForm";
import { Suspense } from "react";

export default async function Home({
  searchParams,
}: {
  searchParams?: {
    prestamo?: string;
    solicitud?: string;
    identificacion?: string;
    fecha1?: string;
  };
}) {
  
  return (
    <>
      <header>
        <h1 className="text-[2rem] text-gray-950 font-bold p-8">BUSQUEDA DOCUMENTAL</h1>
      </header>

      <section>
        <Suspense>
          <FilterForm />
        </Suspense>
      </section>

      <section className="flex justify-center">
        <DocumentosTable searchParams={searchParams} />
      </section>
    </>
  );
}
