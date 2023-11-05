import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/theme/default'
import { GlobalStyle } from './styles/global'
import { BrowserRouter } from 'react-router-dom'
import { Router } from './routes/router'
import { BuyoutCoffeeProvider } from './contexts/CoffeeContext'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BuyoutCoffeeProvider>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </BuyoutCoffeeProvider>
      <GlobalStyle />
    </ThemeProvider>
  )
}
