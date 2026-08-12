  import { BrowserRouter, Routes, Route } from "react-router-dom";
  import Signup from "./pages/Signup";
  import Home from "./pages/Home";
  import Login from "./pages/Login";

  function App() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/" element={<Signup />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/login' element={<Login />} />
        </Routes>
      </BrowserRouter>
    );
  }

  export default App;