import Formulario from './components/Formulario/index'
import Login from './components/Login/index'


function App(props) {
  return <div className="bg-gray-400 w-full h-screen ">
    <div>
    <Login  />
    </div>
    <div className="hidden">

    <Formulario  />
    </div>
  <div></div>
  </div>;
}

export default App;
