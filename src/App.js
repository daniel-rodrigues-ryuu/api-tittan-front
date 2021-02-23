//import logo from './logo.svg';
import './App.css';

import Header from './components/header';
import Footer from './components/footer';

import Routes from './routes';
import { BrowserRouter, Link } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Header />
          <nav id="main-nav">
            <ul>
              <li><Link className="menu" to={`/`}>Home</Link></li>
              <li><Link className="menu" to={`/list-titan`}>Consulta</Link></li>
              <li><Link className="menu" to={`/register-titan`}>Cadastro</Link></li>
              <li><Link className="menu" to={`/about`}>Sobre</Link></li>
            </ul>
          </nav>
          <Routes />
          <Footer />
        </BrowserRouter>
    </div>
  );
}

export default App;
