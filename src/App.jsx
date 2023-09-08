import './App.css';
import TaskListComponent from './components/container/task_list';
import Ejemplo1 from './hooks/Ejemplo1';
import Ejemplo2 from './hooks/Ejemplo2';
import MiComponenteConContexto from './hooks/Ejemplo3';
import Ejemplo4 from './hooks/Ejemplo4';

function App() {
  return (
    <div>
      {/* <TaskListComponent></TaskListComponent> */}
      {/* <Ejemplo1></Ejemplo1> */}
      {/* <Ejemplo2></Ejemplo2> */}
      {/* <MiComponenteConContexto></MiComponenteConContexto> */}
      <Ejemplo4 nombre='Emanuel'>
        {/* Todo lo que hay aquí, es tratado como props.children */}
        <h3>Contenido del props.children</h3>
      </Ejemplo4>
    </div>
  );
}

export default App;
