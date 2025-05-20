
import { useState } from "react";
import Produto from "../components/Produto";
import { AXIOS } from "../services";


const Produtos = () => {
  const [filtroMarca, setFiltroMarca] = useState([]);
  const [filtroCategoria, setFiltroCategoria] = useState([]);
  const [filtroGenero, setFiltroGenero] = useState([]);
  const [filtroEstado, setFiltroEstado] = useState("Novo");
  const [produtos, setProduto] = useState([]);
  
  console.log(filtroMarca , filtroCategoria , filtroGenero ,  filtroEstado);

  function verificarMarca(marca){
    if(filtroMarca.includes(marca)){
      setFiltroMarca([...filtroMarca.filter(cadaMarca => cadaMarca != 
        marca)]);
    }else{
      setFiltroMarca([...filtroMarca, marca])
    }
  }
  
  function verificarCategoria(categoria) {
    if(filtroCategoria.includes(categoria)){
      setFiltroCategoria([...filtroCategoria.filter(cadaCategoria => cadaCategoria !=
         categoria)]);
    }else{
      setFiltroCategoria([...filtroCategoria, categoria])
    }
    
    
  }
  
  function verificarGenero(genero) {
    if(filtroGenero.includes(genero)){
      setFiltroGenero([...filtroGenero.filter(cadaGenero => cadaGenero != genero)]);
    }else{
      setFiltroGenero([...filtroGenero, genero])
    }
  }
  
  function verificarEstado(estado) {
      setFiltroEstado(estado)
  }
  function buscarProdutos() {
    const response =  AXIOS.get("/produtos");
    console.log(response.data);
        
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
            <label className="mt-3 flex gap-[10px] items-center">
              <input type="checkbox" className="w-[22px] h-[22px] accent-pink-600" onChange={() => verificarMarca("Adidas")}/>
              Adidas
            </label>
            <label className="mt-3 flex gap-[10px] items-center">
              <input type="checkbox" className="w-[22px] h-[22px] accent-pink-600" onChange={() => verificarMarca("Balanciaga")}/>
              Balanciaga
            </label>
            <label className="mt-3 flex gap-[10px] items-center">
              <input type="checkbox" className="w-[22px] h-[22px] accent-pink-600" onChange={() => verificarMarca("K-Swiss")}/>
              K-Swiss
            </label>
            <label  className="mt-3 flex gap-[10px] items-center">
              <input type="checkbox" className="w-[22px] h-[22px] accent-pink-600" onChange={() => verificarMarca("Nike")}/>
              Nike
            </label>
            <label  className="mt-3 flex gap-[10px] items-center">
              <input type="checkbox" className="w-[22px] h-[22px] accent-pink-600"onChange={() => verificarMarca("Puma")} />
              Puma
            </label>
            <h6 className="mt-2 font-bold text-grafite">Categoria</h6>
            <label  className="mt-3 flex gap-[10px] items-center">
              <input type="checkbox" className="w-[22px] h-[22px] accent-pink-600" onChange={() => verificarCategoria("Esporte e Lazer")}/>
              Esporte e lazer
            </label>
            <label  className="mt-3 flex gap-[10px] items-center">
              <input type="checkbox" className="w-[22px] h-[22px] accent-pink-600" onChange={() => verificarCategoria("Casual")}/>
              Casual
            </label>
            <label  className="mt-3 flex gap-[10px] items-center">
              <input type="checkbox" className="w-[22px] h-[22px] accent-pink-600" onChange={() => verificarCategoria("Utilitario")}/>
              Utilitario
            </label>
            <label  className="mt-3 flex gap-[10px] items-center">
              <input type="checkbox" className="w-[22px] h-[22px] accent-pink-600" onChange={() => verificarCategoria("Corridas")}/>
              Corrida
            </label>
            <h6 className="text-grafite mt-2 font-bold">Gênero</h6>
            <label  className="mt-3 flex gap-[10px] items-center">
              <input type="checkbox" className="w-[22px] h-[22px] accent-pink-600" onChange={() => verificarGenero("masculino")}/>
              Masculino
            </label>
            <label  className="mt-3 flex gap-[10px] items-center">
              <input type="checkbox" className="w-[22px] h-[22px] accent-pink-600" onChange={() => verificarGenero("feminino")}/>
              Feminino
            </label>
            <label className="mt-3 flex gap-[10px] items-center">
              <input type="checkbox" className="w-[22px] h-[22px] accent-pink-600" onChange={() => verificarGenero("Unisex")}/>
              Unisex
            </label>
            <h6 className="mt-2 font-bold text-grafite">Estado</h6>
            <label className="flex gap-2 mt-2">
              <input type="radio" className="w-[20px] accent-pink-600" onChange={() => verificarEstado("Novo")}
              checked={filtroEstado == "Novo"}/>
              Novo
            </label>
            <label className="flex gap-2 mt-2">
              <input type="radio" className="w-[20px] accent-pink-600" onChange={() => verificarEstado("Usado")}
              checked={filtroEstado == "Usado"}/>
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