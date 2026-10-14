import './App.css'
import { Routes, Route, Navigate } from 'react-router-dom'
import Header from './components/Header'
import Naplo from './sites/Naplo'
import Recipe from './sites/Recipe'
import CustomRecipe from './sites/CustomRecipe'
import Social from './sites/Social'
import Profile from './sites/Profile'

function App() {
  return (
    <div className="flex min-h-screen">
      <Header />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Navigate to="/naplo" />} />
          <Route path="/naplo" element={<Naplo />} />
          <Route path="/recept" element={<Recipe />} />
          <Route path="/recept/sajat" element={<CustomRecipe />} />
          <Route path="/social" element={<Social />} />
          <Route path="/profil" element={<Profile />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
