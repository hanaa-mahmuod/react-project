import { useState } from 'react'
import './App.css'
import Home from './components/home/Home'
import Contacts from './components/contacts/Contacts'
import Portfolio from './components/portfolio/Portfolio'
import About from './components/about/About'
import Start from './components/Start/Start'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


const router = createBrowserRouter([
 
  {
    path:"",element:<Home></Home>,children:[
      {path:'contact',element:<Contacts></Contacts>},
      {path:'about',element:<About></About>},
      {path:'portfolio',element:<Portfolio></Portfolio>},
      {path:'',element:<Start></Start>},
    ]
  }
  
]);
function App() {
 
  return (
    <RouterProvider router={router} />
  )
}

export default App
