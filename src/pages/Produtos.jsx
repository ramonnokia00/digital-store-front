

const Produtos = () => {
  return (
    <>
      <div className="xl:px-[100px] xl:pt-[40px] xl:pb-[140px]">
        {/* oderdnação */}
        <div className="flex justify-between items-center">
          <h6><strong>Resultados para “Tênis” </strong> - 389 Produtos</h6>
          <div className="text-gray-600 border-spacing-2 border-2 p-4">
            <strong>Ordernar Por:</strong>
            <select>
              <option>mais relevantes</option>
            </select>
          </div>
        </div>
        {/* Filtros é produtos */}
        <div className="items-start">
          {/* filtos */}
          <div className="bg-white rounded p-[30px] w-[300px] mt-[40px]">
            <h5 className="border-b-1 pb-2">Filtrar Por </h5>
            <h6 className="mt-2 font-bold text-grafite">Marca</h6>
            <label htmlFor="" className="mt-3 flex gap-[10px] items-center">
              <input type="checkbox" className="w-[22px] h-[22px] accent-pink-600"/>
              Adidas
            </label>
            <label htmlFor="" className="mt-3 flex gap-[10px] items-center">
              <input type="checkbox" className="w-[22px] h-[22px] accent-pink-600"/>
              Balanciaga
            </label>
            <label htmlFor="" className="mt-3 flex gap-[10px] items-center">
              <input type="checkbox" className="w-[22px] h-[22px] accent-pink-600"/>
              K-Swiss
            </label>
            <label htmlFor="" className="mt-3 flex gap-[10px] items-center">
              <input type="checkbox" className="w-[22px] h-[22px] accent-pink-600"/>
              Nike
            </label>
            <label htmlFor="" className="mt-3 flex gap-[10px] items-center">
              <input type="checkbox" className="w-[22px] h-[22px] accent-pink-600"/>
              Puma
            </label>
          </div>
        </div>
      </div>
    </>
  );
}
export default Produtos;