import React from 'react'
import Panel from '../components/wireframes/Panel'
import ListaItems from '../components/organismos/ListaItems'

const Dashboard = () => {
  return (
    <>
        <Panel 
            top="Este es el banner" 
            left= <ListaItems tituloLista= "Lista"> </ListaItems>
            center="Este es el cuerpo de la pagina"/>
    </>
  )
}

export default Dashboard