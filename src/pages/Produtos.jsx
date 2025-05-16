import sapatao from "../assets/sapatao_foda.png"

const Produtos = () => {
  return (
    <>
      <div className="xl:px-[100px] xl:pt-[40px] xl:pb-[140px]">
        {/* oderdnação */}
        <div className="flex justify-between items-center">
          <h6><strong>Resultados para “Tênis” </strong> - 389 Produtos</h6>
          <div className="text-gray-600 border-spacing-2 border-2 p-4">
            <strong>Ordernar Por:</strong>
            <select className="">
              <option>mais relevantes</option>
            </select>
          </div>
        </div>
        {/* Filtros é produtos */}
        <div className="items-start flex ">
          {/* filtos */}
          <div className="bg-white rounded p-[30px] w-[300px] mt-[40px]">
            <h5 className="border-b-1 pb-2">Filtrar Por </h5>
            <h6 className="mt-2 font-bold text-grafite">Marca</h6>
            <label htmlFor="" className="mt-3 flex gap-[10px] items-center">
              <input type="checkbox" className="w-[22px] h-[22px] accent-pink-600" />
              Adidas
            </label>
            <label htmlFor="" className="mt-3 flex gap-[10px] items-center">
              <input type="checkbox" className="w-[22px] h-[22px] accent-pink-600" />
              Balanciaga
            </label>
            <label htmlFor="" className="mt-3 flex gap-[10px] items-center">
              <input type="checkbox" className="w-[22px] h-[22px] accent-pink-600" />
              K-Swiss
            </label>
            <label htmlFor="" className="mt-3 flex gap-[10px] items-center">
              <input type="checkbox" className="w-[22px] h-[22px] accent-pink-600" />
              Nike
            </label>
            <label htmlFor="" className="mt-3 flex gap-[10px] items-center">
              <input type="checkbox" className="w-[22px] h-[22px] accent-pink-600" />
              Puma
            </label>
            <h6 className="mt-2 font-bold text-grafite">Categoria</h6>
            <label htmlFor="" className="mt-3 flex gap-[10px] items-center">
              <input type="checkbox" className="w-[22px] h-[22px] accent-pink-600" />
              Esporte e lazer
            </label>
            <label htmlFor="" className="mt-3 flex gap-[10px] items-center">
              <input type="checkbox" className="w-[22px] h-[22px] accent-pink-600" />
              Casual
            </label>
            <label htmlFor="" className="mt-3 flex gap-[10px] items-center">
              <input type="checkbox" className="w-[22px] h-[22px] accent-pink-600" />
              Utilitario
            </label>
            <label htmlFor="" className="mt-3 flex gap-[10px] items-center">
              <input type="checkbox" className="w-[22px] h-[22px] accent-pink-600" />
              Carrinho
            </label>
            <h6 className="text-grafite mt-2 font-bold">Gênero</h6>
            <label htmlFor="" className="mt-3 flex gap-[10px] items-center">
              <input type="checkbox" className="w-[22px] h-[22px] accent-pink-600" />
              Masculino
            </label>
            <label htmlFor="" className="mt-3 flex gap-[10px] items-center">
              <input type="checkbox" className="w-[22px] h-[22px] accent-pink-600" />
              Feminino
            </label>
            <label htmlFor="" className="mt-3 flex gap-[10px] items-center">
              <input type="checkbox" className="w-[22px] h-[22px] accent-pink-600" />
              Unisex
            </label>
            <h6 className="mt-2 font-bold text-grafite">Estado</h6>
            <label htmlFor="" className="flex gap-2 mt-2">
              <input type="radio" className="w-[20px]" />
              Novo
            </label>
            <label htmlFor="" className="flex gap-2 mt-2">
              <input type="radio" className="w-[20px]" />
              Usado
            </label>
          </div>
          <div className="grid-cols-3 mt-[40px] ml-[100px]">
            <a href="">
              <div className=" bg-white w-[270px] h-[320px] rounded">
                <div>
                  <p className="text-sm leading-8 uppercase bg-lima inline-block mb-2 ml-[30px]  mt-[20px] rounded px-[12px]">30% OFF</p>
                </div>
                <img src={sapatao} alt="" className="w-full items-center" />
              </div>
                <p className="text-grafite font-bold mt-1">Tênis</p>
                <h4 className="text-grafite text-2xl">K-Swiss V8 - Masculino</h4>
                <h5><del>$200</del>$100</h5>
            </a>
          </div>
          <div className="grid-cols-3 mt-[40px] ml-[100px]">
            <a href="">
              <div className=" bg-white w-[270px] h-[320px] rounded">
                <div>
                  <p className="text-sm leading-8 uppercase bg-lima inline-block mb-2 ml-[30px]  mt-[20px] rounded px-[12px]">30% OFF</p>
                </div>
                <img src={sapatao} alt="" className="w-full items-center" />
              </div>
                <p className="text-grafite font-bold mt-1">Tênis</p>
                <h4 className="text-grafite text-2xl">K-Swiss V8 - Masculino</h4>
                <h5><del>$200</del>$100</h5>
            </a>
          </div>
          <div className="grid-cols-3 mt-[40px] ml-[100px]">
            <a href="">
              <div className=" bg-white w-[270px] h-[320px] rounded">
                <div>
                  <p className="text-sm leading-8 uppercase bg-yellow-500 inline-block mb-2 ml-[30px]  mt-[20px] rounded px-[12px]">30% OFF</p>
                </div>
                <img src={sapatao} alt="" className="w-full items-center" />
              </div>
                <p className="text-grafite font-bold mt-1">Tênis</p>
                <h4 className="text-grafite text-2xl">K-Swiss V8 - Masculino</h4>
                <h5><del>$200</del>$100</h5>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
export default Produtos;