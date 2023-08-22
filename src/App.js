import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import LayoutPage from "./pages/LayoutPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LayoutPage/>}>
          <Route index element={<LandingPage/>}/>
          
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
