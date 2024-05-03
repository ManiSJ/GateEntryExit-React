import logo from './logo.svg';
import './App.css';
import GateEmployees from './components/gateEmployees/GateEmployees';
import { Routes, Route, Navigate } from 'react-router-dom';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate to={'/gateEmployees'} />}></Route>
        <Route path="/gateEmployees" element={<GateEmployees/>}></Route>
      </Routes>
    </>
  );
}

export default App;
