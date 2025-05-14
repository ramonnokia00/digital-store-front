import { BrowserRouter, Route, Routes } from "react-router";
import Home from "../pages/Home";
import Produtos from "../pages/Produtos";

const Paths = () => {
    return ( 
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Produtos" element={<Produtos />} />
        </Routes>
        </BrowserRouter>
     );
}
 
export default Paths;