
import './App.css';
import Home from './commponets/Home';
import { ToDoProvider } from './Context/ToDoContext';


function App() {




  return (
    <ToDoProvider>
        <Home />
    </ToDoProvider>
   
    
  )
}

export default App;
