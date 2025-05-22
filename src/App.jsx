
import LoginProvider from "./context/Logincontext";
import Paths from "./routes/paths";



const App = () => {
  return ( 
    <><LoginProvider>
    <Paths />  
    </LoginProvider>
    
    </>
   );
}
 
export default App;