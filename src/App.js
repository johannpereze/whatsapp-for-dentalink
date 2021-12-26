import './App.css';
// import AppointmentsUpdateForm from './components/AppointmentsUpdateForm';
import ClinicsList from './components/ClinicsList';
import DateSelection from './components/DateSelection';
import HorizontalStepper from './components/HorizontalStepper';
import KeyInput from './components/KeyInput';
import LineSelection from './components/LineSelection';
import ResponsiveAppBar from './components/ResponsiveAppBar';

function App() {
  return (
    <div >
      <ResponsiveAppBar />
      <HorizontalStepper />
      <KeyInput />
      <LineSelection />
      <DateSelection />
      <ClinicsList />
      {/* <AppointmentsUpdateForm /> */}
    </div>
  )
}

export default App;
