import sapatassso from "../assets/sapatao_foda.png"
const HomeProdutos = () => {
    return ( 
        <>
        <div className="bg-white w-[300px] h-[720px] ml-[20px] " id="Marka">
            <h4 className="text-gray-600 underline">Filtrar Por</h4>
      <label htmlFor="">  
     <input type="checkbox" placeholder="Adidas" className=""/>
     </label>
      <label htmlFor="">  
     <input type="checkbox" placeholder="Adidas" className=""/>
     </label>
      <label htmlFor="">  
     <input type="checkbox" placeholder="Adidas" className=""/>
     </label>
      <label htmlFor="">  
     <input type="checkbox" placeholder="Adidas" className=""/>
     </label>
      <label htmlFor="">  
     <input type="checkbox" placeholder="Adidas" className=""/>
     </label>
     
        </div>
         <section id="produtos" className="">
                    <div className="titulo">
                        <h3>Produtos Em alta</h3>
                        <a href=""> Ver Todos</a>
                    </div>
                    <div className="cards">
                        <div className="card">
                            <a href="">
                                <div className="imagem">
                                    <h6>30% Off</h6>
                                    <img src={sapatassso} alt="" />
                                </div>
                                <span>Tenis</span>
                                <h4>K-Swiss V8 - Masculino</h4>
                                <h5><del>$200</del>$100</h5>
                            </a>
                        </div>
                        <div className="card">
                            <a href="">
                                <div className="imagem">
                                    <h6>30% Off</h6>
                                    <img src={sapatassso} alt="" />
                                </div>
                                <span>Tenis</span>
                                <h4>K-Swiss V8 - Masculino</h4>
                                <h5><del>$200</del>$100</h5>
                            </a>
                        </div>
                        <div className="card">
                            <a href="">
                                <div className="imagem">
                                    <h6>30% Off</h6>
                                    <img src={sapatassso} alt="" />
                                </div>
                                <span>Tenis</span>
                                <h4>K-Swiss V8 - Masculino</h4>
                                <h5><del>$200</del>$100</h5>
                            </a>
                        </div>
                        <div className="card">
                            <a href="">
                                <div className="imagem">
                                    <h6>30% Off</h6>
                                    <img src={sapatassso} alt="" />
                                </div>
                                <span>Tenis</span>
                                <h4>K-Swiss V8 - Masculino</h4>
                                <h5><del>$200</del>$100</h5>
                            </a>
                        </div>
                        <div className="card">
                            <a href="">
                                <div className="imagem">
                                    <h6>30% Off</h6>
                                    <img src={sapatassso} alt="" />
                                </div>
                                <span>Tenis</span>
                                <h4>K-Swiss V8 - Masculino</h4>
                                <h5><del>$200</del>$100</h5>
                            </a>
                        </div>
                        <div className="card">
                            <a href="">
                                <div className="imagem">
                                    <h6>30% Off</h6>
                                    <img src={sapatassso} alt="" />
                                </div>
                                <span>Tenis</span>
                                <h4>K-Swiss V8 - Masculino</h4>
                                <h5><del>$200</del>$100</h5>
                            </a>
                        </div>
                        <div className="card">
                            <a href="">
                                <div className="imagem">
                                    <h6>30% Off</h6>
                                    <img src={sapatassso} alt="" />
                                </div>
                                <span>Tenis</span>
                                <h4>K-Swiss V8 - Masculino</h4>
                                <h5><del>$200</del>$100</h5>
                            </a>
                        </div>
                        <div className="card">
                            <a href="">
                                <div className="imagem">
                                    <h6>30% Off</h6>
                                    <img src={sapatassso} alt="" />
                                </div>
                                <span>Tenis</span>
                                <h4>K-Swiss V8 - Masculino</h4>
                                <h5> <del>$200</del>$100</h5>
                            </a>
                        </div>
                    </div>
                </section>
        </>
     );
}
 
export default HomeProdutos;