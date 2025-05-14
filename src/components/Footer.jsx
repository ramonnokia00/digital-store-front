import logo from "../assets/logo_digital_college_branca.png";


const Footer = () => {
  return (
    <>
      <footer>
        <div className="primario">
          <img src={logo} alt="Logo Digital College" />
          DIGITAL STORE
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. <br />
            Culpa impedit unde nemo officiis, illum rerum voluptates iste? <br />
            Quibusdam laboriosam animi minus sit beatae facere non, nisi nam magnam sequi ratione?
          </p>
          <div className="cones">
            <a href=""><box-icon type="logo" name="facebook"></box-icon></a>
            <a href=""><box-icon type="logo" name="instagram"></box-icon></a>
            <a href=""><box-icon type="logo" name="twitter"></box-icon></a>
          </div>
        </div>

        <div className="lista_fora">
          <ul className="lista_dentro">
            <li><h5>Informações</h5></li>
            <li><a href="">Sobre Drip Store</a></li>
            <li><a href="">Segurança</a></li>
            <li><a href="">Blog</a></li>
            <li><a href="">Trabalhe conosco</a></li>
            <li><a href="">Meus pedidos</a></li>
          </ul>
        </div>

        <div className="lista_fora">
          <ul className="lista_dentro">
            <li><h5>Categorias</h5></li>
            <li><a href="">Camisetas</a></li>
            <li><a href="">Calças</a></li>
            <li><a href="">Bonés</a></li>
            <li><a href="">Headphones</a></li>
            <li><a href="">Tênis</a></li>
          </ul>
        </div>

        <div className="lista_fora">
          <ul className="lista_dentro">
            <li><h5>Contatos</h5></li>
            <li>
              <address>Av. Santos Dumont, 1510 - 1º andar - Aldeota, Fortaleza - CE, 60150-161</address>
            </li>
            <li><a href="tel:8530513051">(85) 3051-3051</a></li>
          </ul>
        </div>
      </footer>

      <div className="data">
        <p>&copy; {new Date().getFullYear()} Digital College - Ramon Soares</p>
      </div>
      <script src="https://unpkg.com/boxicons@2.1.4/dist/boxicons.js"></script>
    </>
  );
};

export default Footer;
