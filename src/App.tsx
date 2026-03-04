
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Layout from './components/layout/Layout'
import HomePage from './pages/Home'
import RestaurantOrderingSystemPage from './pages/RestaurantOrderingSystem.tsx'

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/restaurant-ordering-system" element={<RestaurantOrderingSystemPage />} />
      </Routes>
    </Layout>
  )
}


export default App

