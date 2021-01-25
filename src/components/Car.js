import React, {useState} from 'react'
import styled from 'styled-components'

const Car = ({car}) => {



  return (
    <div>
        <h3>Car</h3>
        {
          car.length > 0 ? 
            car.map((c, index)=>{
                return (
                  <Producto key={index}>
                    <NombreProducto>{c.name} </NombreProducto>
                    Cantidad : {c.cantidad}
                  </Producto>
                )
            })
          :
          <div><h3>Aún no agregaste al carrito</h3></div>

        }
    </div>
  )
}

const Producto = styled.div`
      padding:10px; 
      border-bottom: 1px solid gray; 
      font-size: 14px;


`
const NombreProducto = styled.p`
      font-weight: bold;
      font-size: 16px;
      color: black;

`




export default Car
