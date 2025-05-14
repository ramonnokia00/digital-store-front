import Air_jordan from "../components/Air_jordan";
import Banner from "../components/Banner";
import Departamento from "../components/Departamento";
import Destaques from "../components/Destaques";
import Footer from "../components/Footer";
import Header from "../components/header";
import Produtos from "../components/Produtos";

const Home = () => {
    return (
        <>
            <Header/>
            <Banner/>
            <Destaques/>
            <Departamento/>
            <Produtos/>
            <Air_jordan/>
            <Footer/>
        </>
    );
}

export default Home;
