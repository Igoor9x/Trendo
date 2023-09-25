
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <div className="App" id='Inicio'>
      {/* Deixar apenas os componentes que aparecerão em todas as paginas */}
      <Outlet />
      <Header />
      <Footer />
    </div>
  );
}

export default App;
