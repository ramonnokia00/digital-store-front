import { useState } from "react";
import sapatao from "../assets/sapatao_foda.png"
const Produto = () => {
   

  return (

    <div className=" mt-[40px] shadow-2xl relative">
      <a href="" className="text-black">
        <div className=" bg-white w-[275px] h-[320px] rounded">
          <div>
            <p className="text-1xl leading-8 uppercase bg-lima inline-block mb-2 ml-[30px]  mt-[20px] rounded-[20px] px-[12px]">30% OFF</p>
          </div>
          <img src={sapatao} alt="" className="w-full pr-5"/>
        </div><div className="pl-2">
        <p className="text-grafite font-bold mt-1">Tênis</p>
        <h4 className="text-grafite text-[24px] hover:text-pink-600 duration-500 line-clamp-1">K-Swiss V8 - Masculino</h4>
        <b className="font-bold"><del className="text-grafite font-light">$200</del>$100</b></div>
      </a>

    </div>

  );
}

export default Produto;