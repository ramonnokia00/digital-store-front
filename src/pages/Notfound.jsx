import { Link } from "react-router";


const NotFound = () => {
    return ( 
        <>
        <h1>ERROR 404</h1>
        <h1>Pagina Não Encontrada</h1>
        {/* <a href="/">Voltar</a> */}
        <Link to={-1}>Voltar</Link>
        </>
     );
}
 
export default NotFound;