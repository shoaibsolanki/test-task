// import logo from './logo.svg';
import './App.css';
import DataTeble from './component/DataTeble';
// import DataTeble from './component/DataTeble';
import Form from './component/Form';
import Navbar from './component/Navbar';
import {
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <>
    <Navbar/>
 <Routes>
  <Route path='/'  >
 <Route path='/' element={<Form />  }/>
  </Route >
  <Route path='/data-tabele'  >
 <Route path='/data-tabele' element={<DataTeble />  }/>
  </Route >
 </Routes>
 </>
  );
}

export default App;
