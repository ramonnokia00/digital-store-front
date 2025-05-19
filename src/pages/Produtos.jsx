
import { useState } from "react";
import Produto from "../components/Produto";


const Produtos = () => {
  const [filtroMarca, setFiltroMarca] = useState([]);
  // const [filtroCategoria, setFiltroCategoria] = useState([]);
  // const [filtroGenero, setFiltroGenerp] = useState([]);
  // const [filtroEstado, setFiltroEstado] = useState("novo");
  
  console.log(filtroMarca);
  

  function verificarMarca(marca){
    if(filtroMarca.includes(marca)){
      setFiltroMarca([...filtroMarca.filter(cadaMarca => cadaMarca != 
        marca)]);
    }else{
      setFiltroMarca([...filtroMarca, marca])
    }
  }
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
              <input type="checkbox" className="w-[22px] h-[22px] accent-pink-600" onChange={() => verificarMarca("Adidas")}/>
              Adidas
            </label>
            <label htmlFor="" className="mt-3 flex gap-[10px] items-center">
              <input type="checkbox" className="w-[22px] h-[22px] accent-pink-600" onChange={() => verificarMarca("Balanciaga")}/>
              Balanciaga
            </label>
            <label htmlFor="" className="mt-3 flex gap-[10px] items-center">
              <input type="checkbox" className="w-[22px] h-[22px] accent-pink-600" onChange={() => verificarMarca("K-Swiss")}/>
              K-Swiss
            </label>
            <label htmlFor="" className="mt-3 flex gap-[10px] items-center">
              <input type="checkbox" className="w-[22px] h-[22px] accent-pink-600" onChange={() => verificarMarca("Nike")}/>
              Nike
            </label>
            <label htmlFor="" className="mt-3 flex gap-[10px] items-center">
              <input type="checkbox" className="w-[22px] h-[22px] accent-pink-600"onChange={() => verificarMarca("Puma")} />
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
              Corrida
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
              <input type="radio" className="w-[20px] accent-pink-600" />
              Novo
            </label>
            <label htmlFor="" className="flex gap-2 mt-2">
              <input type="radio" className="w-[20px] accent-pink-600" />
              Usado
            </label>
          </div>
          <div className="grid-cols-3 grid gap-6 ml-[200px] rounded-[20px]">
            <Produto />
            <Produto />
            <Produto />
            <Produto />
            <Produto />
            <Produto />
          </div>



        </div>
      </div>
    </>
  );
}
export default Produtos;