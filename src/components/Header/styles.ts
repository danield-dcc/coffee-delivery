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

  border: 0;
  padding: 0 0.5rem;
  height: 2.375rem;
  border-radius: 6px;
  background-color: ${(props) => props.theme.yellowLight};
  color: ${(props) => props.theme.purpleDark};

  img {
    height: 1.375rem;
    width: 1.375rem;
  }
`
