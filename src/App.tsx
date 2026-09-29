import { Route, Routes } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './GlobalStyle'
import { theme } from './theme'
import { Layout } from './components/Layout'
import { HomePage, ServicesPage, CheckInPage, BusinessLocatorPage } from './pages'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/online-check-in" element={<CheckInPage />} />
          <Route path="/find-a-business" element={<BusinessLocatorPage />} />
        </Route>
      </Routes>
    </ThemeProvider>
  )
}

export default App
