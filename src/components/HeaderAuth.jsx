import logo from '../assets/logodigital.png';

const HeaderAuth = () => {
    return (<>
        <header>
            <div className="topo">
                <div className="logo">
                    <img src={logo} alt="Logo" />
                    DIGITAL STORE
                </div>
            </div>
        </header></>
    );
};

export default HeaderAuth;
