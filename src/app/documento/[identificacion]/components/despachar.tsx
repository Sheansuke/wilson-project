'use client'

import { IDocumentos } from "@/interfaces/IDocumentos";
import { despacharUseCase } from "@/modules/Despacho/usecases/despacharUseCase";

export const Despachar = async ({ documento }: { documento: IDocumentos }) => {
  return (
    <button
      onClick={() => despacharUseCase({ documento })}
      type="submit"
      className="bg-blue-600 text-blue-300 font-bold p-2 rounded-md  w-36 h-12 btn hover:bg-blue-500 btn-outline transition-all hover:scale-105"
    >
      Despachar
    </button>
  );
};
