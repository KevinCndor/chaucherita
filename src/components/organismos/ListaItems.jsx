import React from 'react'
import Carta from '../moleculas/Carta'

const ListaItems = ({tituloLista}) => {
    const data = [
        {id: 1, title: "Banco del Pichincha", valor: "$1000"},
        {id: 2, title: "Banco de Machala", valor: "$5000"},
        {id: 3, title: "Banco de Guayaquil", valor: "$0"}]
  return (
    <>
        <h3>{tituloLista}</h3>
        <div>
            {data.map(item=>(<Carta titulo= {item.title} valor={item.valor} key={item.id} />))}
        </div>
    </>
  )
}

export default ListaItems