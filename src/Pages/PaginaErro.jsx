import React from 'react'
import Button from "react-bootstrap/Button"
import {useNavigate} from "react-router-dom"

const PaginaErro = () => {
  //variável navigate pra guardar o retorno do hook
  const navigate = useNavigate()
  return (
    <div className="text-center d-flex min-vh-100 flex-column
    justify-content-center align-items-center">
    <h2>Essa pagina no existe</h2> 
     <Button variant="warning" onClick={() => { navigate("/home") }}>
      Voltar para home
      </Button>      
    </div>
  )
}

export default PaginaErro