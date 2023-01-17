import {Home, Header, Footer, Appointment, Contact, FAQ, MeetDr, Practice, Location, Services} from './Components'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';



function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/Appointment" element={<Appointment/>}></Route>
      <Route path="/Contact" element={<Contact/>}></Route>
      <Route path="/FAQ" element={<FAQ/>}></Route>
      <Route path="/Location" element={<Location/>}></Route>
      <Route path="/MeetDr" element={<MeetDr/>}></Route>
      <Route path="/Practice" element={<Practice/>}></Route>
      <Route path="/Services" element={<Services/>}></Route>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/" element={<Home/>}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
