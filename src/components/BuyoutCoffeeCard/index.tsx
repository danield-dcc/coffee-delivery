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
import { Trash } from 'phosphor-react'
import { moneyFormatter } from '../../utils/moneyFormatter'
import { useEffect, useState } from 'react'
import { useBuyoutCoffeeContext } from '../../contexts/CoffeeContext'

interface IBuyoutCoffeeCardProps {
  name: string
  total: number | undefined
  imageUrl: string
  value: number
  coffeeId: number
  description: string
  tags: string[]
}

export function BuyoutCoffeeCard({
  coffeeId,
  name,
  total,
  imageUrl,
  value,
  description,
  tags,
}: IBuyoutCoffeeCardProps) {
  const {
    handleRemoveCoffee,
    setNumberOfCoffeesSelected,
    updateListOfCoffees,
  } = useBuyoutCoffeeContext()
  const [totalCoffees, setTotalCoffees] = useState<number>(total || 0)

  function handleUpdate(value: number) {
    const newList = {
      id: coffeeId,
      name,
      description,
      tags,
      value,
      coffeeImageUrl: imageUrl,
      total: totalCoffees,
    }
    updateListOfCoffees(newList, value)
  }

  function handleRemoveCoffeeFromList() {
    handleRemoveCoffee(coffeeId)
  }

  function handleSubtractCoffee() {
    if (totalCoffees > 0) setTotalCoffees((oldV) => oldV - 1)
    handleUpdate(totalCoffees - 1)
  }

  function handleAddCoffee() {
    setTotalCoffees((oldV) => oldV + 1)
    handleUpdate(totalCoffees + 1)
  }

  useEffect(() => {
    setNumberOfCoffeesSelected(totalCoffees)
  }, [setNumberOfCoffeesSelected, totalCoffees])

  return (
    <Container>
      <BuyoutCoffeeImage src={imageUrl} alt="" />

      <BuyoutCoffeeContent>
        <p>{name}</p>
        <WrapperBuyoutCardButtons>
          <div>
            <BuyoutSubtractCoffeeButton
              type="button"
              onClick={handleSubtractCoffee}
            >
              <p>-</p>
            </BuyoutSubtractCoffeeButton>
            <BuyoutShowTotalCoffees>
              <p>{totalCoffees}</p>
            </BuyoutShowTotalCoffees>
            <BuyoutAddCoffeeButton type="button" onClick={handleAddCoffee}>
              <p>+</p>
            </BuyoutAddCoffeeButton>
          </div>
          <RemoveCoffee onClick={handleRemoveCoffeeFromList}>
            <Trash />
            <p>Remover</p>
          </RemoveCoffee>
        </WrapperBuyoutCardButtons>
      </BuyoutCoffeeContent>

      <BuyoutCoffeeValue>
        <p>{moneyFormatter.format(value / 100)}</p>
      </BuyoutCoffeeValue>
    </Container>
  )
}
