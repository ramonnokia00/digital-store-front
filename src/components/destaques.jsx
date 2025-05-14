import camisa from "../assets/camisa.png"
import sapatao from "../assets/sapatao.png"
import headfone from "../assets/headfone.png"

const Destaques = () => {
    return (
    <><section id="destaques">
            <h3>Coleções Em Destaques</h3>
            <div className="colecoes">
                <div>
                    <div className="conteudo">
                        <h6>30% Off</h6>
                        <h2> Novo Drop<br />Supreme</h2>
                        <a href="" className="btn inverso">comprar</a>
                    </div>
                    <img src={camisa} alt="" />
                </div>

                <div>
                    <div className="conteudo">
                        <h6>30% Off</h6>
                        <h2> Coleção<br />Adidas</h2>
                        <a href="" className="btn inverso">comprar</a>
                    </div>
                    <img src={sapatao} alt="" />
                </div>

                <div>
                    <div className="conteudo">
                        <h6>30% Off</h6>
                        <h2>Novo<br />Beat Bass</h2>
                        <a href="" className="btn inverso">comprar</a>
                    </div>
                    <img src={headfone} alt="" />
                </div>

            </div>
            <h3>Departamento</h3>
        </section>
      </> );
}
 
export default Destaques;