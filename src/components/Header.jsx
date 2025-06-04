import logo from '../assets/logodigital.png';
import lupa from '../assets/lupa.png';
import carrinho from '../assets/carrinho.png';
import { NavLink } from 'react-router';
import { useContext, } from 'react';
import { LoginContext } from '../contexts/Logincontext';

const Header = () => {

  const { logado, usuario } = useContext(LoginContext);

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
          {
            usuario.usuario_nome ? (
              <h3 className='mr-2 text-[#c92071]'>{usuario.usuario_nome}</h3>
            ) : (
              <>
                <a href="/auth">Cadastre-se</a>
                <a href="/auth" className="btn">Entrar</a>
              </>
            )
          }

          <div className="carrinho">
            <img src={carrinho} alt="Carrinho" />
            <span>2</span>
          </div>
        </div>
      </div>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/produtos">Produtos</NavLink>
        <NavLink to="/categorias">Categoria</NavLink>
        {
          logado && (
            <NavLink to="/meus-pedidos">Meus pedidos</NavLink>
          )
        }

      </nav>
    </header>
  );
};

export default Header;
