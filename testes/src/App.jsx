import './App.css';
import { Contador } from './components/counterState/contador';
import { Reutilizaveis } from './components/reutilizaveis';


function App() {

  
  return (
   
    <>
    <Contador/>
    <Reutilizaveis tittle="Funcionou" readingTime="1">
    <p>Primeiro</p>
    <p>Segundo</p>
    <h2>AAAAAAAAAAAAAA</h2>
    </Reutilizaveis>
        
    

   </>
  );
}

export default App;
