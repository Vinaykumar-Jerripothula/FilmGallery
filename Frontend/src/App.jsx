import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navigate } from "react-router-dom";

import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Home from "./pages/Home";

import ContentPage from "./components/template/ContentPage";

import { fetchProgress } from "./store/progressSlice";
import { fetchMovieProgress } from "./store/movieProgressSlice";
import CategoryPage from "./pages/CategoryPage";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const userId = localStorage.getItem("userId");

    if (!userId) {
      return;
    }

    dispatch(fetchProgress(userId));
    dispatch(fetchMovieProgress(userId));
  }, [dispatch]);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            localStorage.getItem("accessToken") ? (
              <Navigate to="/hollywood" replace />
            ) : (
              <Signup />
            )
          }
        />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/:industry" element={<Home />} />{" "}
        {/* Dynamic Content Route */}
        <Route path="/:industry/:type" element={<CategoryPage />} />
        <Route path="/content/:category/:slug" element={<ContentPage />} />{" "}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
