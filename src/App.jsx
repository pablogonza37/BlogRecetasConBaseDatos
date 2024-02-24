import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap-icons/font/bootstrap-icons.min.css';
import Menu from "./components/common/Menu";
import Footer from './components/common/Footer';
import Inicio from './components/pages/Inicio';
import Administrador from './components/pages/Administrador';
import FormularioReceta from './components/pages/receta/FormularioReceta';

function App() {
  

  return (
    <>
    <Menu></Menu>
    {/*<Inicio></Inicio>*/}
    {/*<Administrador></Administrador>*/}
    <FormularioReceta></FormularioReceta>
    <Footer></Footer>
    </>
  )
}

export default App
