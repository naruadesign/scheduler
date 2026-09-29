import { Outlet } from 'react-router-dom'
import { Header } from '../Header'
import { Footer } from '../Footer'

/** App shell: header and footer render once around every routed page. */
export function Layout() {
  return (
    <>
      <a href="#main-content" className="sr-only">Skip to content</a>
      <Header />
      <main id="main-content">
        <Outlet />
      </main>
      <Footer />
    </>
  )
}
