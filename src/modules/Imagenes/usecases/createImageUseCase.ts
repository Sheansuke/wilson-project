"use client";

import { supabaseClient } from "@/infrastructure/config/supabaseClient";
import { IDocumentos } from "@/interfaces/IDocumentos";
import { SupabaseClient } from "@supabase/supabase-js";

export const createImageUseCase = async ({
  documento,
  imageFile,
}: {
  documento: IDocumentos;
  imageFile?: any;
}): Promise<{
  error?: boolean;
}> => {
  supabaseClient.auth.getUser();

  const imageUrl = await subirImagen(supabaseClient, imageFile);

  const { error } = await supabaseClient.from("documento").update({ imageUrl: imageUrl }).eq("identificacion", documento.identificacion).select();
  await supabaseClient.from("imagen").insert([
    {
      prestamo: documento.prestamo,
      solicitud: documento.solicitud,
      identificacion: documento.identificacion,
      imagen: imageUrl,
    },
  ]);

  switch (error) {
    case null: {
      return {
        error: false,
      };
    }

    default: {
      return {
        error: true,
      };
    }
  }
};

async function subirImagen(supabase: SupabaseClient<any, "public", any>, file: any): Promise<string> {
  const fileExt = file.name.split(".").pop();
  const fileName = `${Date.now()}.${fileExt}`;
  const filePath = `imagenes/${fileName}`;

  await supabase.storage.from("documentos").upload(filePath, file);

  return await obtenerURLImagen(supabase, filePath);
}

async function obtenerURLImagen(supabase: SupabaseClient<any, "public", any>, path: string): Promise<string> {
  const { data } = await supabase.storage.from("documentos").getPublicUrl(path);
  console.log("🚀 ~ obtenerURLImagen ~ data:", data);
  return data.publicUrl;
}
