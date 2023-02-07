import { Route, Routes } from "react-router-dom";
import { Home, Public, Sidebar } from "./components";
import './App.css'

import path from "./untils/path";

function App() {
  return (
    <div className="App">
      {/* <Routes>
        <Route path={path.HOME} element={<Public />} />
      </Routes> */}
      <Sidebar/>
      <Home/>
    </div>
  );
}

export default App;
