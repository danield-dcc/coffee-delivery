import { useMemo } from 'react'
import { useBuyoutCoffeeContext } from '../contexts/CoffeeContext'

export function useSummary() {
  const { selectedCoffees } = useBuyoutCoffeeContext()

  const summary = useMemo(() => {
    return selectedCoffees.reduce(
      (acc, price) => {
        acc.value += price.value * price.total!
        return acc
      },
      {
        value: 0,
      },
    )
  }, [selectedCoffees])

  return summary.value / 100
}
