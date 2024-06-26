import logo from './logo.svg';
import './App.css';
import { Home } from './components/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Pagenotfound } from './components/Pagenotfound';
import { Login } from './components/Login';
import { Team } from './components/Team';

function App() {
  return (
    <div className="App">
      {/* <Home/> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/login" element={ <Login /> }/>
          <Route path="/members" element={ <Team/> } />
          <Route path="/*" element={<Pagenotfound/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
