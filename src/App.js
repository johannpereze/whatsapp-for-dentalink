import { useState } from 'react';
import './App.css';
import AppointmentsUpdateForm from './components/AppointmentsUpdateForm';
import DateSelection from './components/DateSelection';
import HorizontalStepper from './components/HorizontalStepper';
import KeyInput from './components/KeyInput';
import LineSelection from './components/LineSelection';
import ResponsiveAppBar from './components/ResponsiveAppBar';
import SummaryAndSending from './components/SummaryAndSending';
import TemplateSelection from './components/TemplateSelection';

function App() {

  const [componentVisibility, setComponentVisibility] = useState({
    responsiveAppBar: true,
    horizontalStepper: true,
    keyInput: true,
    lineSelection: false,
    dateSelection: false,
    clinicsList: false,
    templateSelection: false,
    summaryAndSending: false,
    appointmentsUpdateForm: false,
  })

  const { responsiveAppBar,
    horizontalStepper,
    keyInput,
    lineSelection,
    dateSelection,
    templateSelection,
    summaryAndSending,
    appointmentsUpdateForm } = componentVisibility

  return (
    <div >
      {responsiveAppBar
        && <ResponsiveAppBar
          componentVisibility={componentVisibility}
          setComponentVisibility={setComponentVisibility}
        />}
      {horizontalStepper
        && <HorizontalStepper
          componentVisibility={componentVisibility}
          setComponentVisibility={setComponentVisibility}
        />}
      {keyInput
        && <KeyInput
          componentVisibility={componentVisibility}
          setComponentVisibility={setComponentVisibility}
        />}
      {lineSelection
        && <LineSelection
          componentVisibility={componentVisibility}
          setComponentVisibility={setComponentVisibility}
        />}
      {dateSelection
        && <DateSelection
          componentVisibility={componentVisibility}
          setComponentVisibility={setComponentVisibility}
        />}
      {templateSelection
        && <TemplateSelection
          componentVisibility={componentVisibility}
          setComponentVisibility={setComponentVisibility}
        />}
      {summaryAndSending
        && <SummaryAndSending
          componentVisibility={componentVisibility}
          setComponentVisibility={setComponentVisibility}
        />}
      {appointmentsUpdateForm
        && <AppointmentsUpdateForm
          componentVisibility={componentVisibility}
          setComponentVisibility={setComponentVisibility}
        />}
    </div>
  )
}

export default App;
