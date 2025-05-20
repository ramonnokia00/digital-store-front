
import { useState } from "react";
import Produto from "../components/Produto";


const Produtos = () => {
  const [filtroMarca, setFiltroMarca] = useState([]);
  const [filtroCategoria, setFiltroCategoria] = useState([]);
  const [filtroGenero, setFiltroGenero] = useState([]);
  const [filtroEstado, setFiltroEstado] = useState([]);
  
  
  

  function verificarMarca(marca){
    if(filtroMarca.includes(marca)){
      setFiltroMarca([...filtroMarca.filter(cadaMarca => cadaMarca != 
        marca)]);
    }else{
      setFiltroMarca([...filtroMarca, marca])
    }
  }
  console.log(filtroMarca);
  function verificarCategoria(categoria) {
    if(filtroCategoria.includes(categoria)){
      setFiltroCategoria([...filtroCategoria.filter(cadaCategoria => cadaCategoria !=
         categoria)]);
    }else{
      setFiltroCategoria([...filtroCategoria, categoria])
    }
    
    
  }
  console.log(filtroCategoria);
  function verificarGenero(genero) {
    if(filtroGenero.includes(genero)){
      setFiltroGenero([...filtroGenero.filter(cadaGenero => cadaGenero != genero)]);
    }else{
      setFiltroGenero([...filtroGenero, genero])
    }
  }
  console.log(filtroGenero);
  function verificarEstado(estado) {
    if(filtroEstado.includes(estado)){
      setFiltroEstado([...filtroEstado.filter(cadaEstado => cadaEstado != estado)])
    }else{
      setFiltroEstado([...filtroEstado, estado])
    }
  }
  console.log(filtroEstado);
  
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
              <input type="checkbox" className="w-[22px] h-[22px] accent-pink-600" onChange={() => verificarCategoria("Esporte e Lazer")}/>
              Esporte e lazer
            </label>
            <label htmlFor="" className="mt-3 flex gap-[10px] items-center">
              <input type="checkbox" className="w-[22px] h-[22px] accent-pink-600" onChange={() => verificarCategoria("Casual")}/>
              Casual
            </label>
            <label htmlFor="" className="mt-3 flex gap-[10px] items-center">
              <input type="checkbox" className="w-[22px] h-[22px] accent-pink-600" onChange={() => verificarCategoria("Utilitario")}/>
              Utilitario
            </label>
            <label htmlFor="" className="mt-3 flex gap-[10px] items-center">
              <input type="checkbox" className="w-[22px] h-[22px] accent-pink-600" onChange={() => verificarCategoria("Corridas")}/>
              Corrida
            </label>
            <h6 className="text-grafite mt-2 font-bold">Gênero</h6>
            <label htmlFor="" className="mt-3 flex gap-[10px] items-center">
              <input type="checkbox" className="w-[22px] h-[22px] accent-pink-600" onChange={() => verificarGenero("masculino")}/>
              Masculino
            </label>
            <label htmlFor="" className="mt-3 flex gap-[10px] items-center">
              <input type="checkbox" className="w-[22px] h-[22px] accent-pink-600" onChange={() => verificarGenero("feminino")}/>
              Feminino
            </label>
            <label htmlFor="" className="mt-3 flex gap-[10px] items-center">
              <input type="checkbox" className="w-[22px] h-[22px] accent-pink-600" onChange={() => verificarGenero("Unisex")}/>
              Unisex
            </label>
            <h6 className="mt-2 font-bold text-grafite">Estado</h6>
            <label htmlFor="" className="flex gap-2 mt-2">
              <input type="radio" className="w-[20px] accent-pink-600" onChange={() => verificarEstado("Novo")}/>
              Novo
            </label>
            <label htmlFor="" className="flex gap-2 mt-2">
              <input type="radio" className="w-[20px] accent-pink-600" onChange={() => verificarEstado("Usado")}/>
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