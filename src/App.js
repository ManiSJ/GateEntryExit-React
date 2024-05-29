import logo from './logo.svg';
import './App.css';
import GateEmployees from './components/gateEmployees/GateEmployees';
import { Routes, Route, Navigate } from 'react-router-dom';
import GateEmployeeDetail from './components/gateEmployees/GateEmployeeDetail'; 
import { Provider } from 'react-redux';
import { store } from './redux/store';

function App() {
  return (
    <Provider store={store}>
      <Routes>
        <Route path="/" element={<Navigate to={'/gateEmployees'} />}></Route>
        <Route path="/gateEmployees" element={<GateEmployees />}></Route>
        <Route path="/gateEmployees/:id" element={<GateEmployeeDetail />}></Route>
      </Routes>
    </Provider>
  );
}

export default App;
