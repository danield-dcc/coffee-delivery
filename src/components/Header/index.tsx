import {
  Container,
  IconWrapper,
  LocalMapButton,
  ShoppingCartButton,
  UserItens,
} from './styles'
import coffeeLogo from '../../assets/Logo.svg'
import { MapPin, ShoppingCart } from 'phosphor-react'

export function Header() {
  return (
    <Container>
      <IconWrapper>
        <img src={coffeeLogo} alt="" />
      </IconWrapper>
      <UserItens>
        <LocalMapButton>
          <MapPin height={22} />
          Porto Alegre, RS
        </LocalMapButton>
        <ShoppingCartButton>
          <ShoppingCart />
        </ShoppingCartButton>
      </UserItens>
    </Container>
  )
}
