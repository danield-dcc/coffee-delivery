import { Header } from '../../components/Header'
import { LayoutContainer } from './styles'
import { Outlet } from 'react-router-dom'

export function DefaultLayout() {
  return (
    <LayoutContainer>
      <Header />
      {/* componente do react-router-dom que 'libera espaço' que será 
        preenchido pelos outros componentes */}
      <Outlet />
    </LayoutContainer>
  )
}
