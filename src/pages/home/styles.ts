import { styled } from 'styled-components'

export type WrapperIconsVariant = 'yellowDark' | 'base' | 'yellow' | 'purple'

interface WrapperIconsProps {
  variant: WrapperIconsVariant
}

const WrapperIconsVariants = {
  yellowDark: '#C47F17',
  yellow: '#DBAC2C',
  base: '#574F4D',
  purple: '#8047F8',
}

export const HeroSectionContainer = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;

  background-image: url('src/assets/HeroSection/Background.png');
  background-repeat: no-repeat;
`

export const HomeContainer = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 588px) minmax(0, 360px);

  max-width: 74rem;
  margin-top: 5.875rem;
  gap: 3.5rem;
`
export const Content = styled.div`
  max-width: 588px;
`
export const ContentTittle = styled.p`
  font-family: 'Baloo 2';
  font-weight: 700;
  font-size: ${(props) => props.theme.title.fontSize.xl};
  line-height: ${(props) => props.theme.title.lineHeight.default};
  color: ${(props) => props.theme.baseTitle};
`

export const ContentSubTitle = styled.p`
  font-family: 'Roboto';
  font-weight: ${(props) => props.theme.text.weight.l};
  font-size: ${(props) => props.theme.text.fontSize.l};
  line-height: ${(props) => props.theme.text.lineHeight.l};
  color: ${(props) => props.theme.baseText};
`

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 588px) minmax(0, 360px);
  grid-template-rows: 1fr 1fr;

  margin-top: 4.125rem;
`

export const IconWrapper = styled.div<WrapperIconsProps>`
  display: flex;
  align-items: center;

  border: 0;
  padding: 0 0.5rem;
  height: 2rem;
  width: 2rem;
  border-radius: 16px;

  background-color: ${(props) => WrapperIconsVariants[props.variant]};

  img {
    height: 1rem;
    width: 1rem;
  }

  span {
    font-size: ${(props) => props.theme.text.fontSize.m};
    font-weight: ${(props) => props.theme.text.weight.m};
    line-height: ${(props) => props.theme.text.fontSize.m};
  }
`

export const ItemWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: 1.125rem;
  gap: 0.75rem;
`

export const MainImage = styled.div`
  img {
    height: 22.5rem;
    width: 29.75rem;
  }
`

export const ListAllCoffees = styled.p`
  font-family: ${(props) => props.theme.fontFamily.Title};
  font-size: ${(props) => props.theme.title.fontSize.l};
  font-weight: ${(props) => props.theme.title.weight.l};
  line-height: ${(props) => props.theme.title.lineHeight.default};
  color: ${(props) => props.theme.baseSubtitle};
  margin-top: 6.75rem;
  margin-left: 1rem;
`

export const DisplayCofferCards = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.5rem;
  padding-top: 3.375rem;

  padding-bottom: 157px;
`
