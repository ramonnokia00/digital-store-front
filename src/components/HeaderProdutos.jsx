import logo from '../assets/logodigital.png';
import lupa from '../assets/lupa.png';
import carrinho from '../assets/carrinho.png';

const HeaderProdutos = () => {
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
        <a href="/">Home</a>
        <a href="/produtos" className="active">Produtos</a>
        <a href="/categorias">Categorias</a>
        <a href="/meus-pedidos">Meus Pedidos</a>
      </nav>
    </header>
  );
};

export default HeaderProdutos;