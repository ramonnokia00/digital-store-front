import sapatinho from "../assets/sapatinho.png"
import pontinho from "../assets/pontinho.png"
const Banner = () => {
  return (
    <main>
    <section id="banner">
      <div className="conteudo">
        <h6>Melhores ofertas personalizadas</h6>
        <h2>Queima de<br />estoque Nike 🔥</h2>
        <p>
          A falha consequente suaviza o exercício,<br />
          a menos que seja dada a exceção. <br />
          Dou tempo ao trabalho e por isso vou persegui-lo.
        </p>
        <a href="" className="btn">Ver Ofertas</a>
      </div>
      <img src={sapatinho} alt="" className="tenis" />
      <img src={pontinho} alt="" className="detalhe" />
      
    </section>
    </main>
  );
}

export default Banner;
