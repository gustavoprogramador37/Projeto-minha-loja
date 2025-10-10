import { createBrowserRouter } from "react-router-dom"

//importação das páginas principais
import App from "./App.jsx"
import PaginaErro from "./Pages/PaginaErro.jsx"
import Login from "./Pages/Login.jsx"
import RotasProtegidas from "./Pages/RotasProtegidas.jsx"
import Home from "./pages/Home.jsx"

const router = createBrowserRouter([ 
    {
       path:"/",
       element: <App/>,
       errorElement: <PaginaErro/>,
       children:[
        {
          index: true,
          element: <Login/> 
        },
        {
          path:"login",
          element:<Login />
        }
       ]
    },
    {
       path:"/",
       element: <RotasProtegidas/>,  
       errorElement:<PaginaErro/>, 
       children:[
        {
           path: "home",
           element:<Home/>
        }
       ]    
    }
])

export default router