import logo from './logo.svg';
import './App.css';
import {Route , BrowserRouter , Router , Routes} from 'react-router-dom'
import Home from './pages/Home'
import Projects from './pages/Projects'
import Services from './pages/Services'
import Contact from './pages/Contact'
import './stylesheet/home.css'
import './stylesheet/header-footer.css'
import './stylesheet/carousel.css'
import './stylesheet/projects-services.css'

function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
      <Routes>
      <Route path='/' exact Component={Home} />
      <Route path='/projects' exact Component={Projects} />
      <Route path='/services' exact Component={Services} />
      <Route path='/contact' exact Component={Contact} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
