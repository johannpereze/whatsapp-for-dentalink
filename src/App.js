import './App.css';
import AppointmentsUpdateForm from './components/AppointmentsUpdateForm';
import DateSelection from './components/DateSelection';
import KeyInput from './components/KeyInput';
import LineSelection from './components/LineSelection';

function App() {
  return (
    <div >
      <KeyInput />
      <LineSelection />
      <DateSelection />
      <AppointmentsUpdateForm />
    </div>
  )
}

export default App;
