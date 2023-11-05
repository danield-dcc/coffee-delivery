import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react'

type SelectedCoffeeProps = {
  id: number
  tags: string[]
  name: string
  description: string
  coffeeImageUrl: string
  value: number
  total: number | undefined
}

interface IHandleSelectCoffeesToBuyType {
  id: number
  tags: string[]
  name: string
  description: string
  coffeeImageUrl: string
  value: number
}

interface BuyoutCoffeeType {
  selectedCoffees: SelectedCoffeeProps[]
  setSelectedCoffees: Dispatch<SetStateAction<SelectedCoffeeProps[]>>
  setNumberOfCoffeesSelected: Dispatch<SetStateAction<number>>
  handleSelectCoffeesToBuy: (data: IHandleSelectCoffeesToBuyType) => void
  handleRemoveCoffee: (data: number) => void
  updateListOfCoffees: (
    data: IHandleSelectCoffeesToBuyType,
    value?: number,
  ) => SelectedCoffeeProps[]
}

export const BuyoutCoffeeContext = createContext({} as BuyoutCoffeeType)

interface BuyoutCoffeeProviderProps {
  children: ReactNode
}

export function BuyoutCoffeeProvider({ children }: BuyoutCoffeeProviderProps) {
  const [selectedCoffees, setSelectedCoffees] = useState<SelectedCoffeeProps[]>(
    getFromLocalStage(),
  )
  const [numberOfCoffeesSelected, setNumberOfCoffeesSelected] = useState(0)

  function handleSelectCoffeesToBuy(data: IHandleSelectCoffeesToBuyType) {
    const userCoffee = {
      ...data,
      total: numberOfCoffeesSelected,
    }

    if (numberOfCoffeesSelected === 0) {
      alert('Selecione uma quantidade mínima')
      return
    }

    const index = selectedCoffees.findIndex((item) => item.id === data.id)

    if (index === -1) {
      // nova Entrada
      setSelectedCoffees([...selectedCoffees, userCoffee])
      alert(`${data.name} adicionado ao carrinho!`)
      return
    }

    const updatedList = updateListOfCoffees(data)

    alert(`${data.name} adicionado ao carrinho!`)
    setSelectedCoffees(updatedList)
  }

  function updateListOfCoffees(
    data: IHandleSelectCoffeesToBuyType,
    total?: number,
  ) {
    const updatedTotalNumberOfCoffees = selectedCoffees.map((item) => {
      if (item.id === data.id && !!total) {
        return { ...item, total }
      } else if (item.id === data.id) {
        return { ...item, total: numberOfCoffeesSelected }
      }
      return item
    })

    setSelectedCoffees(updatedTotalNumberOfCoffees)
    return updatedTotalNumberOfCoffees
  }

  function setToLocalStorage(data: SelectedCoffeeProps[]) {
    const stateJSON = JSON.stringify(data)

    localStorage.setItem('@coffee-delivery:user-selection', stateJSON)
  }

  function getFromLocalStage(): SelectedCoffeeProps[] {
    const storedStateAsJSON = localStorage.getItem(
      '@coffee-delivery:user-selection',
    )

    if (storedStateAsJSON) {
      return JSON.parse(storedStateAsJSON)
    }

    return []
  }

  function handleRemoveCoffee(id: number) {
    const newCoffeeList = selectedCoffees.filter((item) => item.id !== id)

    setSelectedCoffees(newCoffeeList)
    setToLocalStorage(newCoffeeList)
  }

  useEffect(() => {
    setToLocalStorage(selectedCoffees)
  }, [selectedCoffees])

  return (
    <BuyoutCoffeeContext.Provider
      value={{
        selectedCoffees,
        setSelectedCoffees,
        handleSelectCoffeesToBuy,
        setNumberOfCoffeesSelected,
        handleRemoveCoffee,
        updateListOfCoffees,
      }}
    >
      {children}
    </BuyoutCoffeeContext.Provider>
  )
}

export const useBuyoutCoffeeContext = () => useContext(BuyoutCoffeeContext)
