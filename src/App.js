import logo from './logo.svg';
import './App.css';
import GateEmployees from './components/gateEmployees/GateEmployees';
import { Routes, Route, Navigate } from 'react-router-dom';
import GateEmployeeDetail from './components/gateEmployees/GateEmployeeDetail'; 

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate to={'/gateEmployees'} />}></Route>
        <Route path="/gateEmployees" element={<GateEmployees />}></Route>
        <Route path="/gateEmployees/:id" element={<GateEmployeeDetail />}></Route>
      </Routes>
    </>
  );
}

export default App;
