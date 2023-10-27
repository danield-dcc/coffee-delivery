import {
  Container,
  IconWrapper,
  LocalMapButton,
  ShoppingCartButton,
  UserItens,
} from './styles'
import coffeeLogo from '../../assets/Logo.svg'
import shoppingCart from '../../assets/shopping_cart.svg'
import mapIndicator from '../../assets/map_indicator.svg'

export function Header() {
  return (
    <Container>
      <IconWrapper>
        <img src={coffeeLogo} alt="" />
      </IconWrapper>
      <UserItens>
        <LocalMapButton>
          <img src={mapIndicator} alt="" />
          <p>Porto Alegre, RS</p>
        </LocalMapButton>
        <ShoppingCartButton>
          <img src={shoppingCart} alt="" />
        </ShoppingCartButton>
      </UserItens>
    </Container>
  )
}
