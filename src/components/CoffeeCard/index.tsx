import { useEffect, useState } from 'react'
import { useBuyoutCoffeeContext } from '../../contexts/CoffeeContext'
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
import { moneyFormatter } from '../../utils/moneyFormatter'

interface ICoffeeCardProps {
  image: string
  tittle: string
  subTittle: string
  value: number
  tag: string[]
  total?: number
  buyCoffee: () => void
}

export function CoffeeCard({
  image,
  subTittle,
  tittle,
  value,
  tag,
  buyCoffee,
  total,
}: ICoffeeCardProps) {
  const { setNumberOfCoffeesSelected } = useBuyoutCoffeeContext()
  const [totalSelectedCoffees, setTotalSelectedCoffees] = useState(total || 0)

  useEffect(() => {
    setNumberOfCoffeesSelected(totalSelectedCoffees)
  }, [setNumberOfCoffeesSelected, totalSelectedCoffees])

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

        <CartButton onClick={buyCoffee}>
          <ShoppingCartSimple />
        </CartButton>
      </CardBuyOutContent>
    </CardContainer>
  )
}
