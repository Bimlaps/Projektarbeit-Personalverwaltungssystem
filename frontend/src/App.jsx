import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import Login from "./pages/Login";
import AdminDashboard from './pages/AdminDashboard';
import EmployeeDashboard from './pages/EmployeeDashboard';
import PrivateRoutes from './utilities/PrivateRoutes';
import RoleBaseRoutes from './utilities/RoleBaseRoutes';
import AdminSum from './components/dashboard/AdminSum';
import DepartList from './components/department/DepartList';



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/admin-dashboard" />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/admin-dashboard" element={
          <PrivateRoutes>
            <RoleBaseRoutes requiredRole={["admin"]}>
            <AdminDashboard />
            </RoleBaseRoutes>
          </PrivateRoutes> 
        }>
          <Route index element={<AdminSum/>}></Route>

          <Route path="/admin-dashboard/departments" element={<DepartList/>}></Route>

        </Route>
        <Route path="/employee-dashboard" element={<EmployeeDashboard />}></Route>
    </Routes>
    </BrowserRouter>
   

  );
}

export default App;
