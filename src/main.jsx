import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

//importação do bootstrap
import Button from 'react-bootstrap/Button';

//Provedor de rotas, do react.
import { RouterProvider } from "react-router-dom";

//Meu gerenciador de rotas 
import MyRouter from "./MyRouter.jsx"



createRoot(document.getElementById("root")).render(
  <StrictMode>
     {/* faz o Provedor utilizar as rotas que você definiu no MyRouter*/}
     <RouterProvider router={MyRouter}/>


  </StrictMode>
);
