
export const Search = ({handleSubmit}) => {
  return (
  
      <form onSubmit={handleSubmit} className="w-full">
        <input id="nameProduct" className="border h-10 w-[70%]" type="text" />
        <button className=" w-[30%] px-4 py-2 bg-red-700 text-white">Buscar</button>
      </form>

  )
}
