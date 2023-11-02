import {
  BuyoutAddCoffeeButton,
  BuyoutCoffeeContent,
  BuyoutCoffeeImage,
  BuyoutCoffeeValue,
  BuyoutShowTotalCoffees,
  BuyoutSubtractCoffeeButton,
  Container,
  RemoveCoffee,
  WrapperBuyoutCardButtons,
} from './styles'
import coffeeImage from '../../assets/CoffeeIcons/Americano.png'
import { Trash } from 'phosphor-react'
import { moneyFormatter } from '../../utils/moneyFormater'

export function BuyoutCoffeeCard() {
  return (
    <Container>
      <BuyoutCoffeeImage src={coffeeImage} alt="" />

      <BuyoutCoffeeContent>
        <p>Expresso Tradicional</p>
        <WrapperBuyoutCardButtons>
          <div>
            <BuyoutSubtractCoffeeButton>
              <p>-</p>
            </BuyoutSubtractCoffeeButton>
            <BuyoutShowTotalCoffees>
              <p>1</p>
            </BuyoutShowTotalCoffees>
            <BuyoutAddCoffeeButton>
              <p>+</p>
            </BuyoutAddCoffeeButton>
          </div>
          <RemoveCoffee>
            <Trash />
            <p>Remover</p>
          </RemoveCoffee>
        </WrapperBuyoutCardButtons>
      </BuyoutCoffeeContent>

      <BuyoutCoffeeValue>
        <p>{moneyFormatter.format(9.99)}</p>
      </BuyoutCoffeeValue>
    </Container>
  )
}
