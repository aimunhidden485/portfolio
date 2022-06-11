import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home';
import Blogs from './Components/Blogs';
import Resume from './Components/Resume';
import BrushDetails from './Components/BrushDetails';
import BunchDetails from './Components/BunchDetails';
import MargeretDetails from './Components/MargeretDetails';

function App() {
  return (
    <div>
      
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/blogs' element={<Blogs/>}></Route>
        <Route path='/resume' element={<Resume/>}></Route>
        <Route path='/brush' element={<BrushDetails/>}></Route>
        <Route path='/bunch' element={<BunchDetails/>}></Route>
        <Route path='/margeret' element={<MargeretDetails/>}></Route>
        <Route path='/' element={<Home></Home>}></Route>
      </Routes>
    </div>
  );
}

export default App;
