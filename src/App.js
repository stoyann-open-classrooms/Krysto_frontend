import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import './index.css'
// === Layout components
import Header from './components/layout/header/Header'
import Footer from './components/layout/footer/Footer.jsx'
// === Pages
import Home from './pages/Home'
import Register from './pages/Register'
import Login from './pages/Login'
import RegisterPlan from './pages/RegisterPlan'
import Money from './pages/Money'
import Search from './pages/Search'
import Charte from './pages/Charte'
import Thanks from './pages/Thanks'
import Team from './pages/Team'
import CompagnySolutions from './pages/CompagnySolutions'
import LegalMentions from './pages/LegalMentions'
import Cgu from './pages/Cgu'
import Cgv from './pages/Cgv'
import Testimonials from './pages/Testimonials'
import PressKit from './pages/PressKit'
import Files from './pages/Files'

import AddOffer from './pages/AddOffer'
import Offer from './pages/Offer'
import Private from './pages/private/Private'
import Dashboard from './pages/private/dashboard/Dashboard'
import Wallets from './pages/private/wallets/Wallets'
import Deposit from './pages/private/wallets/deposit/Deposit'
import Main from './pages/private/wallets/main/Main'

function App() {
  return (
    <>
      <Router>
        <Header />

        <main className="container">
          <Routes>
            {/* === public */}
            <Route path="/" element={<Home />} />
            <Route path="/register-plan" element={<RegisterPlan />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/money" element={<Money />} />
            <Route path="/search" element={<Search />} />
            <Route path="/charte" element={<Charte />} />
            <Route path="/thanks" element={<Thanks />} />
            <Route path="/team" element={<Team />} />
            <Route path="/compagny-solutions" element={<CompagnySolutions />} />
            <Route path="/legal-mention" element={<LegalMentions />} />
            <Route path="/cgu" element={<Cgu />} />
            <Route path="/cgv" element={<Cgv />} />
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="/press-kit" element={<PressKit />} />
            <Route path="/files" element={<Files />} />
            <Route path="/add-offer" element={<AddOffer />} />
            <Route path="/offer/:id" element={<Offer />} />

            {/* ===== private ==== */}
            <Route path="/private" element={<Private />}>
              <Route path="/private/dashboard" element={<Dashboard />} />

              <Route path="/private/wallets" element={<Wallets />}>
                <Route path="/private/wallets/deposit" element={<Deposit />} />
                <Route path="/private/wallets/main" element={<Main />} />
              </Route>
            </Route>
          </Routes>
        </main>
        <Footer />
      </Router>
      <ToastContainer />
    </>
  )
}

export default App
