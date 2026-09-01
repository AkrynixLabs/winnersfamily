import { Navigate, Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Team from './pages/Team'
import History from './pages/History'
import MissionVision from './pages/MissionVision'
import Academics from './pages/Academics'
import EarlyYears from './pages/EarlyYears'
import Primary from './pages/Primary'
import JuniorHigh from './pages/JuniorHigh'
import Admissions from './pages/Admissions'
import Apply from './pages/Apply'
import Gallery from './pages/Gallery'
import News from './pages/News'
import Contact from './pages/Contact'

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<Navigate to="/about/team" replace />} />
        <Route path="about/team" element={<Team />} />
        <Route path="about/history" element={<History />} />
        <Route path="about/mission-vision" element={<MissionVision />} />
        <Route path="academics" element={<Academics />} />
        <Route path="academics/early-years" element={<EarlyYears />} />
        <Route path="academics/primary" element={<Primary />} />
        <Route path="academics/jhs" element={<JuniorHigh />} />
        <Route path="admissions" element={<Admissions />} />
        <Route path="admissions/apply" element={<Apply />} />
        <Route path="gallery" element={<Gallery />} />
        <Route path="news" element={<News />} />
        <Route path="contact" element={<Contact />} />
      </Route>
    </Routes>
  )
}

export default App
