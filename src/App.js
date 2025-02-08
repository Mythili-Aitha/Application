import './App.css';
import { EmployyeComponent } from './Components/EmployyeComponent';
import VerticalStepper from './Components/VerticalStepper';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/add-employee' element={<EmployyeComponent /> } />
      </Routes>
      <VerticalStepper />
    </BrowserRouter>
  
  );
}

export default App;
