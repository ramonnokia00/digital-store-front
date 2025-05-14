import jordan from "../assets/air_jordan.png"
const Air_jordan = () => {
    return ( 
        <section id="Air_jordan">
            <div className="jordan">
                <div className="circle"></div>
                <img src={jordan} alt="" />
            </div>
            <div className="textos">
                <h6>Oferta Especial</h6>
                <h1>Air Jordan Edição De <br/>Colecionador</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, eius inventore, doloribus fugit quis
                    praesentium totam blanditiis velit dolorum reiciendis vel quibusdam tempora est consequuntur
                    recusandae ratione nihil sit officia!</p>
                <a href="" className="btn">Ver oferta</a>
            </div>

        </section>
     );
}
 
export default Air_jordan;