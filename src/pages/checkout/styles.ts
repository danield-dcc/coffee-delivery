import styled from 'styled-components'

export const Container = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 640px) minmax(0, 448px);
  column-gap: 2rem;
  margin-top: 2.5rem;
  padding-bottom: 15rem;
`
export const TittleContent = styled.p`
  font-family: ${(props) => props.theme.fontFamily.Title};
  font-size: ${(props) => props.theme.title.fontSize.xs};
  font-weight: ${(props) => props.theme.title.weight.xs};
  line-height: ${(props) => props.theme.title.weight.xs};
  color: ${(props) => props.theme.baseSubtitle};
  margin-bottom: 1rem;
`

export const AddressContainer = styled.div``

export const AddressContent = styled.div`
  width: 100%;
  height: 23.25rem;
  background-color: ${(props) => props.theme.baseCard};
  border-radius: 6px;
`

export const AddressHeaderContent = styled.div`
  display: grid;
  grid-template-columns: 24px 1fr;
  padding: 2.5rem 2.5rem;
  column-gap: 0.5rem;
`

export type CheckoutSvgVariant = 'yellowDark' | 'purple'

interface CheckoutSvgProps {
  variant: CheckoutSvgVariant
}

const WrapperSvgVariants = {
  yellowDark: '#C47F17',
  purple: '#8047F8',
}

export const CheckoutSvg = styled.div<CheckoutSvgProps>`
  svg {
    width: 1.375rem;
    height: 1.375rem;
    color: ${(props) => WrapperSvgVariants[props.variant]};
  }
`

export const AddressDescription = styled.div`
  p:first-child {
    font-family: ${(props) => props.theme.fontFamily.Text};
    font-size: ${(props) => props.theme.text.fontSize.m};
    font-weight: ${(props) => props.theme.text.weight.m};
    line-height: ${(props) => props.theme.text.lineHeight.m};
    color: ${(props) => props.theme.baseSubtitle};
  }

  p:last-child {
    font-family: ${(props) => props.theme.fontFamily.Text};
    font-size: ${(props) => props.theme.text.fontSize.s};
    font-weight: ${(props) => props.theme.text.weight.s};
    line-height: ${(props) => props.theme.text.lineHeight.s};
    color: ${(props) => props.theme.baseText};
  }
`

export const InputContainer = styled.form`
  display: flex;
  flex-direction: column;
  margin: 0 2.5rem 2.5rem 2.5rem;
`

interface InputAddressProps {
  size?: string
}

export const InputAddress = styled.input<InputAddressProps>`
  height: 2.625rem;
  max-width: ${(props) => props.size};
  width: 100%;
  padding: 0.75rem;
  box-sizing: border-box;
  background-color: ${(props) => props.theme.baseButton};
  border: 2px solid ${(props) => props.theme.baseButton};
  outline: none;
  border-radius: 6px;
  margin-bottom: 1rem;
  color: ${(props) => props.theme.baseText};

  margin-right: 0.75rem;
  &:focus {
    border: 2px solid ${(props) => props.theme.yellowDark};
  }
  &:last-child {
    margin-right: 0;
  }
`

export const PaymentContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 0.75rem;
  width: 100%;
  height: 12.937rem;

  background-color: ${(props) => props.theme.baseCard};
  border-radius: 6px;
`

export const PaymentButtonWrapper = styled.div`
  display: flex;
  margin: 0 2.5rem 2.5rem 2.5rem;
  gap: 0.75rem;
`

export const PaymentTypeButton = styled.button`
  max-width: 11.125rem;
  width: 100%;
  height: 3.187rem;
  background-color: ${(props) => props.theme.baseButton};
  border: 1px solid ${(props) => props.theme.baseButton};
  border-radius: 6px;

  &:hover {
    background-color: ${(props) => props.theme.baseHover};
  }

  &:focus {
    background-color: ${(props) => props.theme.purpleLight};
    border: 1px solid ${(props) => props.theme.purple};
  }

  div {
    display: flex;
    align-items: center;
    padding-left: 1rem;
    gap: 0.75rem;

    svg {
      color: ${(props) => props.theme.purple};
      width: 1rem;
      height: 1rem;
    }

    p {
      text-transform: uppercase;
      font-family: ${(props) => props.theme.fontFamily.Text};
      font-size: ${(props) => props.theme.text.fontSize.xs};
      font-weight: ${(props) => props.theme.text.weight.s};
      line-height: ${(props) => props.theme.text.lineHeight.s};
      color: ${(props) => props.theme.baseText};
    }
  }
`

export const BuyoutContainer = styled.div`
  max-width: 28rem;
  width: 100%;
  min-height: 31.125rem;
  height: 100%;
  background-color: ${(props) => props.theme.baseCard};
  border-radius: 6px;
`

export const TotalBuyoutCoffees = styled.div`
  display: flex;
  flex-direction: column;

  margin: 1.5rem 2.5rem 2.5rem 2.5rem;
  gap: 0.75rem;
  div {
    display: flex;
    justify-content: space-between;
  }
`

export const BuyoutValues = styled.p`
  font-family: ${(props) => props.theme.fontFamily.Text};
  font-size: ${(props) => props.theme.text.fontSize.s};
  font-weight: ${(props) => props.theme.text.weight.s};
  line-height: ${(props) => props.theme.text.lineHeight.s};
  color: ${(props) => props.theme.baseText};
`

export const BuyoutTotalValues = styled.p`
  font-family: ${(props) => props.theme.fontFamily.Text};
  font-size: ${(props) => props.theme.text.fontSize.l};
  font-weight: ${(props) => props.theme.text.weight.bold};
  line-height: ${(props) => props.theme.text.lineHeight.l};
  color: ${(props) => props.theme.baseSubtitle};
`

export const ConfirmOrderButton = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  margin: 0 auto;
  max-width: 23rem;
  width: 100%;
  height: 2.875rem;

  background-color: ${(props) => props.theme.yellow};
  border: none;
  border-radius: 6px;

  &:hover {
    background-color: ${(props) => props.theme.yellowDark};
  }

  p {
    font-family: ${(props) => props.theme.fontFamily.Text};
    font-size: ${(props) => props.theme.text.fontSize.buttonG};
    font-weight: ${(props) => props.theme.text.weight.buttonG};
    line-height: ${(props) => props.theme.text.lineHeight.buttonG};
    color: ${(props) => props.theme.white};
    text-transform: uppercase;
  }
`
