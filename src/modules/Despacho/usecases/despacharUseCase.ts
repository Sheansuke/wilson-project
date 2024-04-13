"use server";

import { createClient } from "@/infrastructure/config/supabaseServer";
import { IDespacho } from "@/interfaces/IDespacho";
import { IDocumentos } from "@/interfaces/IDocumentos";
import { redirect } from "next/navigation";

export const despacharUseCase = async ({ documento }: { documento: IDocumentos }): Promise<void> => {
  const supabase = createClient();
  supabase.auth.getUser();



  let { error } = await supabase
    .from("despacho")
    .insert([
      {
        despachado: true,
        identificacion: documento.identificacion,
        solicitud: documento.solicitud,
        prestamo: documento.prestamo,
        fecha_desp: new Date().toISOString(),
      },
    ] as IDespacho[])
    .select();

  await supabase.from("documento").update({ despachado: true }).eq("identificacion", documento.identificacion).select();

  switch (error) {
    case null: {
      redirect("/");
    }

    default: {
      redirect("/");
    }
  }
};
