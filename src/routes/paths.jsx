import { BrowserRouter, Route, Routes } from "react-router";
import Home from "../pages/Home";
import Produtos from "../pages/Produtos";
import NotFound from "../pages/Notfound";
import PageLayout from "../Layouts/PageLayout";
import AuthLayout from "../Layouts/AuthLayout";
import Login from "../pages/Login";


const Paths = () => {
    return ( 
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<PageLayout/>}>
            <Route index element={<Home />} />
            <Route path="/Produtos" element={<Produtos />} />    
            </Route>
            <Route path="/auth" element={<AuthLayout/>}>
               <Route index element={<Login/>} />
            </Route>
            <Route path="*" element={<NotFound/>}/>
        </Routes>
        </BrowserRouter>
     );
}
 
export default Paths;