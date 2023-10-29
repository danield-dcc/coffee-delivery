import {
  Content,
  ContentSubTitle,
  ContentTittle,
  HeroSectionContainer,
  HomeContainer,
  IconWrapper,
  ItemWrapper,
  MainImage,
  Wrapper,
} from './styles'

import shoppingCart from '../../assets/HeroSection/ShopingCart.svg'
import packageItem from '../../assets/HeroSection/Package.svg'
import clock from '../../assets/HeroSection/Clock.svg'
import mugCoffee from '../../assets/HeroSection/MugCoffee.svg'
import coffeDelivery from '../../assets/HeroSection/CoffeDelivery.png'

import data from '../../../db/db.json'

export function Home() {
  // console.log(coffes)
  return (
    <>
      <HeroSectionContainer>
        <HomeContainer>
          <Content>
            <ContentTittle>
              Encontre o café perfeito para qualquer hora do dia
            </ContentTittle>
            <ContentSubTitle>
              Com o Coffee Delivery você recebe seu café onde estiver, a
              qualquer hora
            </ContentSubTitle>
            <Wrapper>
              <ItemWrapper>
                <IconWrapper variant="yellowDark">
                  <img src={shoppingCart} alt="" />
                </IconWrapper>
                <span>Compra simples e segura</span>
              </ItemWrapper>
              <ItemWrapper>
                <IconWrapper variant="base">
                  <img src={packageItem} alt="" />
                </IconWrapper>
                <span>Embalagem mantém o café intacto</span>
              </ItemWrapper>
              <ItemWrapper>
                <IconWrapper variant="yellow">
                  <img src={clock} alt="" />
                </IconWrapper>
                <span>Entrega rápida e rastreada</span>
              </ItemWrapper>
              <ItemWrapper>
                <IconWrapper variant="purple">
                  <img src={mugCoffee} alt="" />
                </IconWrapper>
                <span>O café chega fresquinho até você</span>
              </ItemWrapper>
            </Wrapper>
          </Content>
          <MainImage>
            <img src={coffeDelivery} alt="" />
          </MainImage>
        </HomeContainer>
      </HeroSectionContainer>

      <ul>
        {data.map((items) => (
          <>
            <li key={items.id}>{items.name}</li>
            <img src={items.coffeeImageUrl} alt="" />
          </>
        ))}
      </ul>
    </>
  )
}
