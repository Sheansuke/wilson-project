export const LimpiarFiltro = () => {
  return (
    <form className="flex flex-col space-y-4 p-2 mt-8">
        <div className="gap-8 items-end  md:flex ">
      <button
        type="submit"
        className=" text-blue-400 font-bold p-2 rounded-md  w-36 h-12 btn btn-ghost hover:bg-blue-500 btn-outline transition-all hover:scale-105 "
      >
        Limpiar Filtros
      </button>
      </div>
    </form>
  );
};
