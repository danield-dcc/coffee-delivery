import { Route, Routes } from 'react-router-dom'
import { DefaultLayout } from '../Layout/DefautlLayout'
import { Home } from '../pages/home'
import { Checkout } from '../pages/checkout'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/checkout" element={<Checkout />} />
      </Route>
    </Routes>
  )
}
