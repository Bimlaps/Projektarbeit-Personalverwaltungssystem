import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import Login from "../pages/Login";
import AdminDashoard from './pages/AdminDashoard';



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/admin-dashboard" />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/admin-dashboard" element={<AdminDashoard />}></Route>
    </Routes>
    </BrowserRouter>
   

  )
}

export default App
