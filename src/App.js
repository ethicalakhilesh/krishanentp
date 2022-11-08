//import logo from './logo.svg'
import './App.css'
//import ColorSchemesExample from './components/navbar'
import Loginframe from './components/loginFrame';
import Dashboard from './components/dashboard';
import Attendance from './components/attendance';
import Billing from './components/billing';

import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <div>
      <Loginframe />
      <Dashboard />
      <Attendance />
      <Billing/>
    </div>
  );
}

export default App;
