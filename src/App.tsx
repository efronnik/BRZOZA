import { useCallback, useEffect, useState } from 'react'
import { Navigate, Route, Routes, useLocation } from 'react-router-dom'
import { CookieBar } from './components/CookieBar'
import { Cursor } from './components/Cursor'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Loader } from './components/Loader'
import { About } from './pages/About'
import { Contact } from './pages/Contact'
import { Home } from './pages/Home'
import { Menu } from './pages/Menu'
import { Reservation } from './pages/Reservation'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [pathname])
  return null
}

export default function App() {
  const [ready, setReady] = useState(() => sessionStorage.getItem('brzoza-loaded') === '1')
  const onLoaderDone = useCallback(() => {
    sessionStorage.setItem('brzoza-loaded', '1')
    setReady(true)
  }, [])

  return (
    <>
      <Cursor />
      {!ready && <Loader onDone={onLoaderDone} />}
      <div className={`app-shell ${ready ? 'is-ready' : ''}`}>
        <Header />
        <main>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/about" element={<About />} />
            <Route path="/reservation" element={<Reservation />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
        <Footer />
        <CookieBar />
      </div>
    </>
  )
}
