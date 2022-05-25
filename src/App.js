import './App.css';
import {Routes, Route} from "react-router-dom";
import Navbar from "./Components/Navbar";
import Carousel from "./Components/Carousel";
import Qualis from "./Components/Qualis";
import Textbox from "./Components/TextBox"


function App() {
  return (
    <div className="App">
      {/* <h1>Welcome</h1> */}
      <Navbar/>
      <Carousel/>
      <br />
      <Qualis/>
      {/* <Textbox/> */}


      <Routes>
          <Route path="modal" element={<Textbox />} />
          <Route path="modal" element={<Textbox />} />
      </Routes>

    </div>
  );
}

export default App;
