"use server";

import { createClient } from "@/infrastructure/config/supabaseServer";
import { IDocumentos } from "@/interfaces/IDocumentos";

interface IFilterDocumentUseCase {
  error?: string | null;
  documentos?: IDocumentos[];
}

export const filterDocumentUseCase = async ({
  searchParams,
}: {
  searchParams?: {
    prestamo?: string;
    solicitud?: string;
    identificacion?: string;
    fecha1?: string;
  };
}): Promise<IFilterDocumentUseCase> => {
  const supabase = createClient();
  supabase.auth.getUser();

  let query = supabase.from("documento").select("*");

  if (isEmpty(searchParams)) {
    query = query.or(
      `prestamo.eq.${searchParams?.prestamo},solicitud.eq.${searchParams?.solicitud},identificacion.eq.${searchParams?.identificacion}${searchParams?.fecha1 && `,fecha1.eq.${searchParams?.fecha1}`}`
    );
  }

  const { data, error } = await query;

  switch (error) {
    case null: {
      return {
        documentos: data as IDocumentos[],
        error: null,
      };
    }

    default: {
      return {
        documentos: [],
        error: error.message,
      };
    }
  }
};

function isEmpty(params: any) {
  const isValid = params?.prestamo || params?.solicitud || params?.identificacion || params?.fecha1;
  return isValid
}
