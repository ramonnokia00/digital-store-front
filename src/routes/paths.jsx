import { BrowserRouter, Route, Routes } from "react-router";
import Home from "../pages/Home";
import Produtos from "../pages/Produtos";
import NotFound from "../pages/Notfound";
import PageLayout from "../Layouts/PageLayout";

const Paths = () => {
    return ( 
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<PageLayout/>}>
            <Route index element={<Home />} />
            <Route path="/Produtos" element={<Produtos />} />    
            </Route>
            <Route path="*" element={<NotFound/>} />
        </Routes>
        </BrowserRouter>
     );
}
 
export default Paths;