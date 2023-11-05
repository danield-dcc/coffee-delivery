import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
`

export const IconWrapper = styled.div``

export const UserItens = styled.div`
  display: flex;
  gap: 0.5rem;
`

export const LocalMapButton = styled.button`
  display: flex;
  align-items: center;

  border: 0;
  padding: 0 0.5rem;
  height: 2.375rem;
  border-radius: 6px;
  background-color: ${(props) => props.theme.purpleLight};
  color: ${(props) => props.theme.purpleDark};

  img {
    height: 1.375rem;
    width: 1.375rem;
  }

  p {
    font-size: ${(props) => props.theme.text.fontSize.s};
    font-weight: ${(props) => props.theme.text.weight.m};
    line-height: ${(props) => props.theme.text.lineHeight.s};
  }
`

export const ShoppingCartButton = styled.button`
  display: flex;
  align-items: center;
  position: relative;

  border: 0;
  padding: 0 0.5rem;
  height: 2.375rem;
  border-radius: 6px;
  background-color: ${(props) => props.theme.yellowLight};
  color: ${(props) => props.theme.purpleDark};

  &:hover {
    background-color: ${(props) => props.theme.yellow};
  }

  img {
    height: 1.375rem;
    width: 1.375rem;
  }
`
export const ShoppingCartToggle = styled.div`
  position: absolute;

  width: 20px;
  height: 20px;
  border-radius: 10px;
  background-color: ${(props) => props.theme.yellowDark};

  right: -8px;
  top: -8px;

  display: flex;
  align-items: center;
  justify-content: center;

  p {
    padding-top: 1px;
    color: ${(props) => props.theme.white};
    font-size: ${(props) => props.theme.text.fontSize.s};
    font-weight: ${(props) => props.theme.text.weight.bold};
    line-height: ${(props) => props.theme.text.lineHeight.l};
  }
`
