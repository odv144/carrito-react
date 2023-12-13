import React from 'react'
import ReactDOM from 'react-dom/client'
import { CarritoApp } from './carritoApp'
import {ChakraProvider} from '@chakra-ui/react'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <ChakraProvider>
    <CarritoApp w='100vw'/>
   </ChakraProvider>
  </React.StrictMode>,
)
