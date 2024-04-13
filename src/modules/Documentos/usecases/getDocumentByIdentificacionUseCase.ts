"use server";

import { createClient } from "@/infrastructure/config/supabaseServer";
import { IDocumentos } from "@/interfaces/IDocumentos";

interface IGetDocumentByIdentificacionUseCase {
  error?: string | null;
  documentos?: IDocumentos[];
}

export const getDocumentByIdentificacionUseCase = async ({ identificacion }: { identificacion: string }): Promise<IGetDocumentByIdentificacionUseCase> => {
  const supabase = createClient();
  supabase.auth.getUser();

  let { data, error } = await supabase.from("documento").select("*").eq("identificacion", identificacion);

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
