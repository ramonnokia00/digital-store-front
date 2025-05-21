const Login = () => {
    return (<>
        <div className="bg-white p-[30px] rounded xl:w-[580px]">
            <form>
                <h4 className="text-center text-[22px] leading-[34px] xl:text-left xl:mb-5">Acesse Sua Conta</h4>
                <p className="text-center text-grafite xl:text-left mb-[30px]">Novo Cliente? Então resgistre-se <a href="" className="underline hover:text-rosa">aqui.</a></p>
                <label >Login *</label>
                <input
                    type="text"
                    placeholder="insira seu Login ou Email"
                    className="bg-grafite/5 rounded w-full mb-5"
                />
            </form>
        </div>
    </>);
}

export default Login; <></>