import styled from 'styled-components'

export const Container = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 527px) minmax(0, 492px);
  gap: 6.375rem;
  margin-top: 5rem;
`

export const ConfirmationCard = styled.div`
  display: flex;
  flex-direction: column;
`
export const ConfirmationTittle = styled.p`
  font-family: 'Baloo 2';
  font-size: ${(props) => props.theme.title.fontSize.l};
  font-weight: 700;
  line-height: ${(props) => props.theme.title.lineHeight.default};
  color: ${(props) => props.theme.yellowDark};
`

export const ConfirmationDescription = styled.p`
  font-family: ${(props) => props.theme.fontFamily.Text};
  font-size: ${(props) => props.theme.text.fontSize.l};
  font-weight: ${(props) => props.theme.text.weight.l};
  line-height: ${(props) => props.theme.text.lineHeight.l};
  color: ${(props) => props.theme.baseSubtitle};

  margin-bottom: 2.5rem;
`

export const StatusCard = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2.5rem;

  background:
    linear-gradient(
        ${(props) => props.theme.background},
        ${(props) => props.theme.background}
      )
      padding-box,
    linear-gradient(to right, #dbac2c, #8047f8) border-box;
  border-radius: 6px 36px 6px 36px;
  border: 2px solid transparent;
`

export const CardContent = styled.div`
  display: flex;
  gap: 0.75rem;
  margin-bottom: 2.5rem;

  &:last-child {
    margin-bottom: 0;
  }
`

export type CardIconColors = 'purple' | 'yellow' | 'yellowDark'

interface CardIconProps {
  iconColor: CardIconColors
}

const IconsVariants = {
  yellowDark: '#C47F17',
  yellow: '#DBAC2C',
  purple: '#8047F8',
}

export const CardIcon = styled.div<CardIconProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 2rem;
  width: 2rem;
  border-radius: 16px;

  background-color: ${(props) => IconsVariants[props.iconColor]};

  svg {
    width: 1rem;
    height: 1rem;
    color: ${(props) => props.theme.white};
  }
`

export const CarStatus = styled.div`
  p {
    font-family: ${(props) => props.theme.fontFamily.Text};
    font-size: ${(props) => props.theme.text.fontSize.m};
    font-weight: ${(props) => props.theme.text.weight.m};
    line-height: ${(props) => props.theme.text.lineHeight.m};
    color: ${(props) => props.theme.baseText};
  }
`

export const ConfirmationImg = styled.img`
  margin-top: 6.875rem;
`
