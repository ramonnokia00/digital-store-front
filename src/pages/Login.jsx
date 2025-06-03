import { useContext } from "react";
import { LoginContext } from "../context/Logincontext";
import { useNavigate } from "react-router";
import axios from "axios";

const Login = () => {
    const { setLogado } = useContext(LoginContext);
    const navigate = useNavigate()
    function onLogin(event) {
        event.preventDefault();
        setLogado(true);
        navigate("/");
        
    
    }
    return (<>
        <div className="bg-white p-[30px] rounded xl:w-[580px]">
            <form onSubmit={onLogin}>
                <h4 className="text-center text-[22px] leading-[34px] xl:text-left xl:mb-5">Acesse Sua Conta</h4>
                <p className="text-center text-grafite xl:text-left mb-[30px]">Novo Cliente? Então resgistre-se <a href="" className="underline hover:text-rosa">aqui.</a></p>
                <label >Login *</label>
                <input
                    type="text"
                    placeholder="insira seu Login ou Email"
                    className="bg-grafite/5 rounded w-full mb-5 h-[50px] duration-150 outline-transparent pl-4 focus:outline-rosa"
                />
                <label >Senha *</label>
                <input
                    type="password"
                    placeholder="insira sua Senha"
                    className="bg-grafite/5 rounded w-full mb-5 h-[50px] duration-150 outline-transparent pl-4 focus:outline-rosa"
                />
                <a href="" className="hover:underline text-grafite hover:text-rosa mb-[30px] block">Esqueci Minha Senha </a>
                <button className=" w-full h-[48px] bg-rosa text-white rounded cursor-pointer font-bold duration-150 hover:bg-rosa-hover">Acessar Conta</button>
            </form>
        </div>
    </>);
}

export default Login; <></>