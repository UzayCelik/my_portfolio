import './App.css';
import Home from './comps/Home';
import {Route, Routes} from "react-router-dom";
import Header from './comps/Header';

function App() {
  return (
    <div className="App">
      <Header/>
      
        <Routes>
            <Route path="/" element={<Home/>}/>
        </Routes>  
      
    </div>
  );
}

export default App;
