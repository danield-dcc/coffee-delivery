import styled from 'styled-components'

export const Container = styled.div`
  display: grid;
  grid-template-columns: 65px 175px 80px;
  gap: 20px;

  margin: 40px;
  padding-bottom: 24px;
  border-bottom: 1px solid ${(props) => props.theme.baseButton};
`

export const BuyoutCoffeeImage = styled.img`
  width: 64px;
  height: 64px;
`

export const BuyoutCoffeeContent = styled.div`
  display: flex;
  flex-direction: column;

  p {
    font-family: ${(props) => props.theme.fontFamily.Text};
    font-size: ${(props) => props.theme.text.fontSize.m};
    font-weight: ${(props) => props.theme.text.weight.m};
    line-height: ${(props) => props.theme.text.lineHeight.m};
    color: ${(props) => props.theme.baseSubtitle};
  }
`

export const WrapperBuyoutCardButtons = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  justify-content: center;
  margin-top: 0.5rem;

  div:first-child {
    display: inherit;
  }
`

export const BuyoutAddCoffeeButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  cursor: pointer;
  background-color: ${(props) => props.theme.baseButton};
  border-radius: 0 6px 6px 0;

  height: 2rem;
  width: 2rem;

  &:focus {
    border: 1.5px solid ${(props) => props.theme.purpleDark};
  }

  &:hover {
    p {
      color: ${(props) => props.theme.purpleDark};
    }
  }

  p {
    color: ${(props) => props.theme.purple};
  }
`

export const BuyoutSubtractCoffeeButton = styled(BuyoutAddCoffeeButton)`
  border-radius: 6px 0 0 6px;
  margin-left: 1.25rem;
`

export const BuyoutShowTotalCoffees = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.baseButton};

  height: 2rem;
  width: 1.25rem;
`

export const RemoveCoffee = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
  background-color: ${(props) => props.theme.baseButton};
  max-width: 5.687rem;
  width: 100%;
  height: 2rem;
  border-radius: 6px;
  border: none;

  &:hover {
    background-color: ${(props) => props.theme.baseHover};
  }

  svg {
    color: ${(props) => props.theme.purple};
    width: 1rem;
    height: 1rem;
    margin-right: 1.5px;
  }

  p {
    font-family: ${(props) => props.theme.fontFamily.Text};
    font-size: ${(props) => props.theme.text.fontSize.xs};
    font-weight: ${(props) => props.theme.text.weight.s};
    line-height: ${(props) => props.theme.text.lineHeight.xs};
    color: ${(props) => props.theme.baseText};
    text-transform: uppercase;
  }
`

export const BuyoutCoffeeValue = styled.div`
  display: flex;
  justify-content: flex-end;
`
