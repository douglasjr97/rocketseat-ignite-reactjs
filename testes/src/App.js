import './App.css';
import { Fragment } from 'react';
import { Reutilizaveis } from './components/reutilizaveis';
import { Counter } from './components/counter';



function App() {
  return (
   <Fragment>
     <h1>Hello</h1>
     <Reutilizaveis
        name="Douglas Falcão, você é o cara!"
        descricao="Ele é foda!"
     />
        <Counter/>
   </Fragment>
  );
}

export default App;
