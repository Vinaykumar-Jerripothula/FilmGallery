import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Home from "./pages/Home";

import ContentPage from "./components/template/ContentPage";

import { fetchProgress } from "./store/progressSlice";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const userId = localStorage.getItem("userId");

    if (!userId) {
      return;
    }

    dispatch(fetchProgress(userId));
  }, [dispatch]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Signup />} />

        <Route path="/signup" element={<Signup />} />

        <Route path="/login" element={<Login />} />

        <Route path="/home" element={<Home />} />

        {/* Dynamic Content Route */}
        <Route path="/:slug" element={<ContentPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;