import {
  Container,
  IconWrapper,
  LocalMapButton,
  ShoppingCartButton,
  ShoppingCartToggle,
  UserItens,
} from './styles'
import coffeeLogo from '../../assets/Logo.svg'
import shoppingCart from '../../assets/shopping_cart.svg'
import mapIndicator from '../../assets/map_indicator.svg'
import { useBuyoutCoffeeContext } from '../../contexts/CoffeeContext'
import { Link } from 'react-router-dom'

export function Header() {
  const { selectedCoffees } = useBuyoutCoffeeContext()
  const hasSelectedCoffees = !!selectedCoffees.length

  return (
    <Container>
      <Link to="/">
        <IconWrapper>
          <img src={coffeeLogo} alt="" />
        </IconWrapper>
      </Link>
      <UserItens>
        <LocalMapButton>
          <img src={mapIndicator} alt="" />
          <p>Porto Alegre, RS</p>
        </LocalMapButton>

        <Link to="/checkout">
          <ShoppingCartButton>
            {hasSelectedCoffees && (
              <ShoppingCartToggle>
                <p>{selectedCoffees.length}</p>
              </ShoppingCartToggle>
            )}
            <img src={shoppingCart} alt="" />
          </ShoppingCartButton>
        </Link>
      </UserItens>
    </Container>
  )
}
