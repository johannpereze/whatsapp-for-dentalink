import './App.css';
import AppointmentsUpdateForm from './components/AppointmentsUpdateForm';
import KeyInput from './components/KeyInput';
import LineSelection from './components/LineSelection';

function App() {
  return (
    <div >
      <KeyInput />
      <LineSelection />
      <AppointmentsUpdateForm />
    </div>
  );
}

export default App;
