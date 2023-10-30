import styled from 'styled-components'

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 19.375rem;
  max-width: 16rem;
  border-radius: 6px 36px 6px 36px;
  background-color: ${(props) => props.theme.baseCard};
`

export const CardImg = styled.img`
  width: 7.5rem;
  width: 7.5rem;
  margin: 0 auto;
  margin-top: -1rem;
`
export const TagWrapper = styled.div`
  display: flex;
  margin: 0 auto;
  gap: 0.25rem;
`
export const CardTag = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.yellowLight};
  border-radius: 16px;
  margin: 0 auto;
  padding: 0.25rem 0.5rem;
  margin-top: 12px;

  p {
    text-transform: uppercase;
    color: ${(props) => props.theme.yellowDark};
    font-size: ${(props) => props.theme.roboto.fontSize.tag};
    line-height: ${(props) => props.theme.roboto.lineHeight.tag};
    font-weight: ${(props) => props.theme.roboto.weight.tag};
  }
`

export const CardTittle = styled.p`
  display: flex;
  align-self: center;
  margin-top: 1rem;

  font-family: 'Baloo 2';
  color: ${(props) => props.theme.baseSubtitle};
  font-size: ${(props) => props.theme.ballo.fontSize.s};
  line-height: ${(props) => props.theme.ballo.lineHeight.default};
  font-weight: ${(props) => props.theme.ballo.weight.s};
`

export const CardSubTittle = styled.p`
  display: flex;
  text-align: center;
  margin: 0.5rem 1.25rem 0;
  color: ${(props) => props.theme.baseLabel};
  font-size: ${(props) => props.theme.roboto.fontSize.s};
  line-height: ${(props) => props.theme.roboto.lineHeight.s};
  font-weight: ${(props) => props.theme.roboto.weight.m};
`

export const CardBuyOutContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  margin: 2.062rem 22px 20px 22px;

  span {
    font-family: 'Baloo 2';
    color: ${(props) => props.theme.baseText};
    font-size: 1.5rem;
  }
`

export const AddCoffeeButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  background-color: ${(props) => props.theme.baseButton};
  border-radius: 0 6px 6px 0;

  height: 2.375rem;
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

export const SubtractCoffeeButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  background-color: ${(props) => props.theme.baseButton};
  border-radius: 6px 0 0 6px;
  margin-left: 20px;

  height: 2.375rem;
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

export const ShowTotalCoffees = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.baseButton};

  height: 2.375rem;
  width: 1.25rem;
`

export const CartButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.purpleDark};
  margin-left: 2px;
  border: none;

  width: 38px;
  height: 38px;
  border-radius: 6px;

  svg {
    color: #fff;
  }
`
