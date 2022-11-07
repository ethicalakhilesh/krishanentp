//import logo from './logo.svg'
import './App.css'
//import ColorSchemesExample from './components/navbar'
import Loginframe from './components/loginFrame';
import Dashboard from './components/dashboard';
import 'bootstrap/dist/css/bootstrap.min.css'
import Attendance from './components/attendance';

function App() {
  return (
    <div>
      <Loginframe />
      <Dashboard />
      <Attendance />
    </div>
  );
}

export default App;
