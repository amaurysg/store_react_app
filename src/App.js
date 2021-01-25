import React, {useState} from 'react'
import styled from 'styled-components'
import {NavLink, Switch, Route} from 'react-router-dom'
import Inicio from './components/Inicio'
import Blog from './components/Blog'
import Store from './components/Store'
import Error404 from './components/Error4040'
import Car from './components/Car'



const App = () => {

   const products = [
      {id:1, name: 'Producto 1'},
      {id:2, name: 'Producto 2'},
      {id:3, name: 'Producto 3'},
      {id:4, name: 'Producto 4'}
  ]

  const [car, setCar] = useState([])

  const addProductCar = (idProduct, name)=>{
    /* console.log(idProduct, name) */
    if(car.length === 0){
      setCar([{id: idProduct, name: name, cantidad: 1}])
    }else {
      //Revisamos que el carrito no tenga ya el producto
      //Si ya lo tiene entonces actualizamos valor 
      //Si no tiene el producto entonces agregamos 

      //Para poder editar el arreglo tenemos que clonarlo
      const newCar = [...car]

      //comprobemos si el carrito ya tiene el ID a agregar
      const OkinCar = newCar.filter((p)=>{
        return p.id === idProduct
      }).length > 0


      //Si ya tiene el producto entonces tenemos que actualizar 
      if(OkinCar){
        //Tenemos que obtener la posicion en el arreglo
        newCar.forEach((productCar, index)=>{
            if (productCar.id === idProduct){
              const cantidad = newCar[index].cantidad
              newCar[index] = {id: idProduct, 
                              name: name, 
                              cantidad: cantidad + 1}
            }
        })
      }else{
        newCar.push(
          { 
            id: idProduct, 
            name: name, 
            cantidad: 1
          }
          )
      } 
      setCar(newCar)

    }
  } 


  return (
    <Contenedor>
      <Menu>
      <NavLink to="/"> Inicio</NavLink>
      <NavLink to="/blog"> Blog</NavLink>
      <NavLink to="/store"> Tienda</NavLink>

      </Menu>
      <main>
         <Switch>
          <Route path="/" exact={true} component={Inicio}></Route>
          <Route path="/blog" component={Blog}></Route>
          <Route path="/store" >  <Store  products={products}
                                          addProductCar={addProductCar}>
                                 </Store> </Route>
          <Route component={Error404}></Route>

         </Switch>

      </main>
      <Car car={car}></Car>
      
    </Contenedor>
  )
}

const Contenedor = styled.div`
    max-width: 1000px;
    padding: 40px;
    width: 90%;
    display: grid;
    gap: 20px;
    grid-template-columns: 2fr 1fr;
    background: #fff;
    margin: 40px 0;
    border-radius: 10px;
    box-shadow: 0px 0px 5px rgba(129, 129, 129, 0.1);
`;
 
const Menu = styled.nav`
    width: 100%;
    text-align: center;
    background: #092c4c;
    grid-column: span 2;
    border-radius: 3px;
 
    a {
        color: #fff;
        display: inline-block;
        padding: 15px 20px;
    }
 
    a:hover {
        background: #1d85e8;
        text-decoration: none;
    }
`;

export default App
