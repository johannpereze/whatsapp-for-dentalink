import './App.css';
// import AppointmentsUpdateForm from './components/AppointmentsUpdateForm';
import ClinicsList from './components/ClinicsList';
import DateSelection from './components/DateSelection';
import HorizontalStepper from './components/HorizontalStepper';
import KeyInput from './components/KeyInput';
import LineSelection from './components/LineSelection';
import ResponsiveAppBar from './components/ResponsiveAppBar';
import SummaryAndSending from './components/SummaryAndSending';
import TemplateSelection from './components/TemplateSelection';

function App() {
  
  return (
    <div >
      <ResponsiveAppBar />
      <HorizontalStepper />
      <KeyInput />
      <LineSelection />
      <DateSelection />
      <ClinicsList />
      <TemplateSelection />
      <SummaryAndSending />
      {/* <AppointmentsUpdateForm /> */}
    </div>
  )
}

export default App;


/* Dudas:
  *Cambiar Background Color
  
*/