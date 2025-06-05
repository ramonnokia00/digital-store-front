import { useContext, useRef } from "react";
import { LoginContext } from "../contexts/Logincontext";
import { useNavigate } from "react-router";

import { AXIOS } from "../services";

const Login = () => {
    const { setLogado } = useContext(LoginContext);
    const navigate = useNavigate();

    const emailRef = useRef();
    const senhaRef = useRef();


    async function onLogin(event) {
        event.preventDefault();
        let dados = {
            usuario_email: emailRef.current.value,
            usuario_senha: senhaRef.current.value
        }
        const request = await AXIOS.post("/login", dados)
        
        if(request.data.token) {
            sessionStorage.setItem("token", request.data.token);
            sessionStorage.setItem("usuario", JSON.stringify(request.data.usuario));
            setLogado(true);
            navigate("/");
            return;
        }
        alert(request.data.token)
        

        // setLogado;(true);
        // navigate("/");


    }
    return (<>
        <div className="bg-white p-[30px] rounded xl:w-[580px]">
            <form onSubmit={onLogin}>
                <h4 className="text-center text-[22px] leading-[34px] xl:text-left xl:mb-5">Acesse Sua Conta</h4>
                <p className="text-center text-grafite xl:text-left mb-[30px]">Novo Cliente? Então resgistre-se <a href="" className="underline hover:text-rosa">aqui.</a></p>
                <label >Login *</label>
                <input
                    ref={emailRef}
                    type="text"
                    placeholder="insira seu Login ou Email"
                    className="bg-grafite/5 rounded w-full mb-5 h-[50px] duration-150 outline-transparent pl-4 focus:outline-rosa"
                    required
                />
                <label >Senha *</label>
                <input
                    ref={senhaRef}
                    type="password"
                    placeholder="insira sua Senha"
                    className="bg-grafite/5 rounded w-full mb-5 h-[50px] duration-150 outline-transparent pl-4 focus:outline-rosa"
                    required
                />
                <a href="" className="hover:underline text-grafite hover:text-rosa mb-[30px] block">Esqueci Minha Senha </a>
                <button className=" w-full h-[48px] bg-rosa text-white rounded cursor-pointer font-bold duration-150 hover:bg-rosa-hover">Acessar Conta</button>
            </form>
        </div>
    </>);
}

export default Login; <></>