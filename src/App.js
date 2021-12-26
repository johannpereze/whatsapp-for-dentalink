import './App.css';
import AppointmentsUpdateForm from './components/AppointmentsUpdateForm';
import ClinicsList from './components/ClinicsList';
import DateSelection from './components/DateSelection';
import KeyInput from './components/KeyInput';
import LineSelection from './components/LineSelection';

function App() {
  return (
    <div >
      <KeyInput />
      <LineSelection />
      <DateSelection />
      <ClinicsList />
      <AppointmentsUpdateForm />
    </div>
  )
}

export default App;
