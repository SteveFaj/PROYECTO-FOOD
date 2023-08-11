import './App.css';
import { Home, Landing , Form, Detail , Buscado} from './views';
import {Route, useLocation} from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';

function App() {

  const location = useLocation();
  return (
    <div className="App">
     {location.pathname !=="/" && <NavBar />}
      <h1>Henry Food</h1>
      <Route exact path="/home" render={()=> <Home />} />
      <Route exact path = "/detail/:id" render={()=><Detail/>} />
      <Route exact path ="/create" render={()=><Form/>} />
      <Route exact path="/" component={Landing} />
      {/* <Route exact path="/buscado" render={()=><Buscado/>}/> */}

      
    </div>
  );
}

export default App;
