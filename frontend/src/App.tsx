import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Listing from 'pages/Listing';
import Form from 'pages/Form';
import Navbar from "components/Navbar";
import RegistrationMovie from "components/RegistrationMovie";
import AddButton from "components/AddButton";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Listing />} />
        <Route path="/form">
          <Route path=":movieId" element={<Form />} />
        </Route>
        <Route path="/movieregistration" element={<RegistrationMovie />}/>
      </Routes>
      <AddButton />
    </BrowserRouter>
  );
}

export default App;