import NavBar from './componentes/NavBar/NavBar';
import ItemLIstConteiner from './componentes/ItemListConteiner/ItemLIstConteiner';
import PracticaBs from './componentes/PracticaBs/PracticaBs';
import './style.scss';

const App = () => {
  return (
    <div>
      <NavBar/>
      <ItemLIstConteiner greeting = "Mis Productos"/>

      <PracticaBs/>

    </div>
  )
}

export default App