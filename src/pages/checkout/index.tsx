import { BuyoutCoffeeCard } from '../../components/BuyoutCoffeeCard'
import { moneyFormatter } from '../../utils/moneyFormater'
import {
  AddressContent,
  AddressContainer,
  Container,
  TittleContent,
  AddressHeaderContent,
  AddressDescription,
  InputAddress,
  InputContainer,
  PaymentContainer,
  CheckoutSvg,
  PaymentButtonWrapper,
  PaymentTypeButton,
  BuyoutContainer,
  TotalBuyoutCoffees,
  BuyoutValues,
  BuyoutTotalValues,
  ConfirmOrderButton,
} from './styles'
import {
  MapPinLine,
  CurrencyDollarSimple,
  CreditCard,
  Money,
  Bank,
} from 'phosphor-react'

export function Checkout() {
  return (
    <Container>
      <TittleContent>Complete seu pedido</TittleContent>
      <TittleContent>Cafés selecionados</TittleContent>
      <AddressContainer>
        <AddressContent>
          <AddressHeaderContent>
            <CheckoutSvg variant="yellowDark">
              <MapPinLine />
            </CheckoutSvg>
            <AddressDescription>
              <p>Endereço de Entrega</p>
              <p>Informe o endereço onde deseja receber seu pedido</p>
            </AddressDescription>
          </AddressHeaderContent>
          <InputContainer>
            <InputAddress
              size="200px"
              type="text"
              name="cpf"
              placeholder="CEP"
            />
            <InputAddress type="text" name="street" placeholder="Rua" />
            <div>
              <InputAddress
                size="200px"
                type="text"
                name="number"
                placeholder="Número"
              />

              <InputAddress
                size="330px"
                type="text"
                name="complement"
                placeholder="Complemento"
              />
            </div>

            <div>
              <InputAddress
                size="200px"
                type="text"
                name="District"
                placeholder="Bairro"
              />
              <InputAddress
                size="256px"
                type="text"
                name="City"
                placeholder="Cidade"
              />
              <InputAddress
                size="60px"
                type="text"
                name="state"
                placeholder="UF"
              />
            </div>
          </InputContainer>
        </AddressContent>

        <PaymentContainer>
          <AddressHeaderContent>
            <CheckoutSvg variant="purple">
              <CurrencyDollarSimple />
            </CheckoutSvg>
            <AddressDescription>
              <p>Pagamento</p>
              <p>
                O pagamento é feito na entrega. Escolha a forma que deseja pagar
              </p>
            </AddressDescription>
          </AddressHeaderContent>

          <PaymentButtonWrapper>
            <PaymentTypeButton>
              <div>
                <CreditCard />
                <p>Cartão de crédito</p>
              </div>
            </PaymentTypeButton>
            <PaymentTypeButton>
              <div>
                <Bank />
                <p>Cartão de débito</p>
              </div>
            </PaymentTypeButton>
            <PaymentTypeButton>
              <div>
                <Money />
                <p>Dinheiro</p>
              </div>
            </PaymentTypeButton>
          </PaymentButtonWrapper>
        </PaymentContainer>
      </AddressContainer>

      <BuyoutContainer>
        <BuyoutCoffeeCard />
        <BuyoutCoffeeCard />

        <TotalBuyoutCoffees>
          <div>
            <BuyoutValues>Total de itens</BuyoutValues>
            <BuyoutValues>{moneyFormatter.format(29.7)}</BuyoutValues>
          </div>
          <div>
            <BuyoutValues>Entrega</BuyoutValues>
            <BuyoutValues>{moneyFormatter.format(3.5)}</BuyoutValues>
          </div>
          <div>
            <BuyoutTotalValues>Total</BuyoutTotalValues>
            <BuyoutTotalValues>{moneyFormatter.format(33.2)}</BuyoutTotalValues>
          </div>
        </TotalBuyoutCoffees>

        <ConfirmOrderButton>
          <p>Confirmar pedido</p>
        </ConfirmOrderButton>
      </BuyoutContainer>
    </Container>
  )
}
