import './App.css'
import Main_content from './Componentes/Main_content';
import Side_menu from './Componentes/Side_menu';
import Inspector from './Componentes/Inspector';



function App() {

  return <div className="App"> 
  
    {/* inicio Sider*/ }
    <Side_menu> </Side_menu>

    {/* inicio Main Content */}
    <Main_content> </Main_content>

    {/* inicio Inspector */}
    <Inspector></Inspector>

  </div>
      
}

export default App
