"use client";

import { InputLabel } from "@/components/molecules/InputLabel";

export const FilterForm = () => {
  return (
    <form className="flex flex-col space-y-4 p-8 items-center">
      <div className="gap-8 items-end  md:flex ">
        <InputLabel label="# Prestamo" name="prestamo" placeholder="Escribe la categoría" type="text" />
        <InputLabel label="Solicitud" name="solicitud" placeholder="Escribe la categoría" type="text" />
        <InputLabel label="Identificacion" name="identificacion" placeholder="Escribe la categoría" type="text" />
        <InputLabel label="Fecha registro" name="fecha1" placeholder="Escribe la categoría" type="date" />

        <button type="submit" className="bg-blue-600 text-blue-300 font-bold p-2 rounded-md  w-36 h-12 btn hover:bg-blue-500 btn-outline transition-all hover:scale-105 mt-4 md:mt-0">
          Filtrar
        </button>
        
      </div>
    </form>
  );
};
