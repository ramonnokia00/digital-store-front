import logo from '../assets/logodigital.png';
import lupa from '../assets/lupa.png';
import carrinho from '../assets/carrinho.png';

const Header = () => {
  return (
    <header>
      <div className="topo">
        <div className="logo">
          <img src={logo} alt="Logo" />
          DIGITAL STORE
        </div>
        <div className="buscador">
          <input type="text" placeholder="Procurar produtos..." />
          <img src={lupa} alt="Lupa" />
        </div>
        <div className="acoes">
          <a href="">Cadastre-se</a>
          <a href="" className="btn">Entrar</a>
          <div className="carrinho">
            <img src={carrinho} alt="Carrinho" />
            <span>2</span>
          </div>
        </div>
      </div>
      <nav>
        <a href="" className="active">Home</a>
        <a href="">Produtos</a>
        <a href="">Categorias</a>
        <a href="">Meus Pedidos</a>
      </nav>
    </header>
  );
};

export default Header;
