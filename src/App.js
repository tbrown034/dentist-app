import {Home, Header, Footer, Appointment, Contact, FAQ, MeetDr, Practice, Location, Services} from './Components'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';



function App() {
  return (
    <div className="App">
      <Header />
      {/* <Appointment />
      <Contact />
      <FAQ />
      <Location />
      <MeetDr /> */}
      <Home />
      {/* <Practice />
      <Services /> */}
      <Footer />
    </div>
  );
}

export default App;
