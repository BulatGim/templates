import {Route, Routes, BrowserRouter} from "react-router-dom"
import './App.scss';
import Template1 from "./templates/template1/template1";
import Template2 from "./templates/template2/template2";
import Template3 from "./templates/template3/template3";
import Template4 from "./templates/template4/template4";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/template1" element={<Template1 />} />
          <Route path="/template2" element={<Template2 />} />
          <Route path="/template3" element={<Template3 />} />
          <Route path="/template4" element={<Template4 />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
