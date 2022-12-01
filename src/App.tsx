import './App.css';
import {Router} from "./Router/Router"
import { ChakraProvider } from '@chakra-ui/react'
import { Provider } from 'jotai'

function App() {
  return (
    <ChakraProvider>
      <Provider>
        <Router />
      </Provider>
    </ChakraProvider>
  );
}

export default App;
