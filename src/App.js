import Formulario from './components/Formulario/index'

function App(props) {
  return <div className="flex bg-gray-400 w-full h-screen">
    <div className="w-72 p-8">
      <span className="font-bold text-xl">Add Member</span>
    
    </div>
    <Formulario />
  
  </div>;
}

export default App;
