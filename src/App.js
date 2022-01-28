import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './Components/Login';
import Main from './Components/Main';
import Invoice from './Components/Invoice';
import Register from "./Components/Register";
import ViewProduct from './Components/ViewProduct';
import AddProduct from './Components/AddProduct';
import Dashboard from './Components/Dashboard/Dashboard';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route exact path="/main" element={<Main />} />
          <Route exact path="/viewProduct" element={<ViewProduct />} />
          <Route exact path="/AddProduct" element={<AddProduct />} />
          <Route exact path="/Register" element={<Register />} />
          <Route exact path="/invoice" element={<Invoice />} />
          <Route exact path="/Dashboard" element={<Dashboard/>} />

        </Routes>
      </Router>
    </>
  );
}

export default App;
