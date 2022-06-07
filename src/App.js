import {Route, Routes, BrowserRouter} from "react-router-dom"
import Template1 from "./templates/template1/template1";
import './App.scss';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/template1" element={<Template1 />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
