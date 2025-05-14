import camisa from "../assets/camisa rose.svg"
import bone from "../assets/bone.svg"
import calças from "../assets/calças.svg"
import tenis from "../assets/Tenis.svg"
import headfone from "../assets/headfone_2.svg"
const  Departamento = () => {
    return ( <section id="categorias">
            <div className="departamento">
                <div className="icon">
                    <img src={camisa} alt="" />
                </div>
                camiseta
            </div>
            <div className="departamento">
                <div className="icon">
                    <img src={bone} alt="" />
                </div>
                boné
            </div>
            <div className="departamento">
                <div className="icon">
                    <img src={calças} alt="" />
                </div>
                calças

            </div>

            <div className="departamento">
                <div className="icon">
                    <img src={tenis} alt="" />
                </div>
                Tenis

            </div>

            <div className="departamento">
                <div className="icon">
                    <img src={headfone} alt="" />
                </div>
                HeadFones

            </div>
        </section> );
}
 
export default Departamento;