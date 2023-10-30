import { useState } from 'react'
import { moneyFormatter } from '../../utils/moneyFormater'
import {
  CardBuyOutContent,
  CardContainer,
  CardSubTittle,
  CardTag,
  CardTittle,
  CardImg,
  TagWrapper,
  AddCoffeeButton,
  ShowTotalCoffees,
  SubtractCoffeeButton,
  CartButton,
} from './styles'
import { ShoppingCartSimple } from 'phosphor-react'

interface CoffeeCardProps {
  image: string
  tittle: string
  subTittle: string
  value: number
  tag: string[]
}

export function CoffeeCard({
  image,
  subTittle,
  tittle,
  value,
  tag,
}: CoffeeCardProps) {
  const [totalSelectedCoffees, setTotalSelectedCoffees] = useState(0)
  return (
    <CardContainer>
      <CardImg src={image} alt="" />

      <TagWrapper>
        {tag.map((item) => (
          <CardTag key={item}>
            <p>{item}</p>
          </CardTag>
        ))}
      </TagWrapper>

      <CardTittle>{tittle}</CardTittle>
      <CardSubTittle>{subTittle}</CardSubTittle>
      <CardBuyOutContent>
        <span>{moneyFormatter.format(value / 100)}</span>

        <SubtractCoffeeButton
          onClick={
            totalSelectedCoffees > 0
              ? () => setTotalSelectedCoffees((oldV) => oldV - 1)
              : undefined
          }
        >
          <p>-</p>
        </SubtractCoffeeButton>
        <ShowTotalCoffees>
          <p>{totalSelectedCoffees}</p>
        </ShowTotalCoffees>

        <AddCoffeeButton
          onClick={() => setTotalSelectedCoffees((oldV) => oldV + 1)}
        >
          <p>+</p>
        </AddCoffeeButton>

        <CartButton>
          <ShoppingCartSimple />
        </CartButton>
      </CardBuyOutContent>
    </CardContainer>
  )
}
