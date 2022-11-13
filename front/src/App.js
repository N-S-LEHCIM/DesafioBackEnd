import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Users from "./pages/Users";
import NewUser from "./pages/NewUser";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/users" element={<Users/>} />
          <Route path="/newusers" element={<NewUser/>} />
        </Routes>
      </BrowserRouter>

      <h1>HELLO</h1>
    </>
  );
}

export default App;
