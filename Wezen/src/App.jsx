import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/Header";
import Naplo from "./sites/Naplo";
import Recipe from "./sites/Recipe";
import CustomRecipe from "./sites/CustomRecipe";
import Social from "./sites/Social";
import Profile from "./sites/Profile";
import LandingPage from "./sites/LandingPage";
import LoginPage from "./sites/LoginPage"

function App() {
  const { pathname } = useLocation();

  return (
    <div className="flex min-h-screen">
      {pathname !== "/login" && <Header />}
      <main className="min-w-0 flex-1">
        <Routes>
          <Route path="/login" element={<LoginPage />} />

          <Route path="/" element={<LandingPage to="/LandingPage" />} />
          <Route path="/naplo" element={<Naplo />} />
          <Route path="/recept" element={<Recipe />} />
          <Route path="/recept/sajat" element={<CustomRecipe />} />
          <Route path="/social" element={<Social />} />
          <Route path="/profil" element={<Profile />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
