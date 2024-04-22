import './App.css';
import Home from './Pages/Home/Home';
import Loginform from './Pages/LoginForm/Loginform';
import { BrowserRouter, Routes, Route  } from "react-router-dom";

function App() {
  
  return (
    <>
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Home />}/>
    <Route path="/loginform" element={<Loginform />}>
    </Route>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
