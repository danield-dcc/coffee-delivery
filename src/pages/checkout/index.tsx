import { Controller, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { BuyoutCoffeeCard } from '../../components/BuyoutCoffeeCard'
import { useBuyoutCoffeeContext } from '../../contexts/CoffeeContext'
import { useSummary } from '../../hooks/useSummary'
import { moneyFormatter } from '../../utils/moneyFormatter'
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
  BuyoutTotalValues,
  ConfirmOrderButton,
  BuyoutValues,
  FormErrorMessage,
  InputWrapperWithErrorMessages,
  Wrapper,
} from './styles'
import {
  MapPinLine,
  CurrencyDollarSimple,
  CreditCard,
  Money,
  Bank,
} from 'phosphor-react'
import { z } from 'zod'

const CheckoutUserAddressSchema = z.object({
  cep: z.string().min(8, { message: 'Digite um CEP inválido' }),
  street: z.string().min(3, { message: 'Entre com um endereço válido' }),
  number: z.string().min(1, { message: 'Entre com um número válido' }),
  complement: z.string().optional(),
  district: z.string().min(3, { message: 'Entre com um nome válido' }),
  city: z.string().min(3, { message: 'Entre com um nome válido' }),
  state: z.string().min(2, { message: 'UF inválido' }),
  type: z.enum(['credit', 'debit', 'money']),
})

type CheckoutUserAddressData = z.infer<typeof CheckoutUserAddressSchema>

export function Checkout() {
  const { selectedCoffees } = useBuyoutCoffeeContext()
  const totalItems = useSummary()
  const transportationPrice = 3.14
  const totalValues = totalItems + transportationPrice

  const {
    handleSubmit,
    register,
    formState: { errors },
    control,
  } = useForm<CheckoutUserAddressData>({
    mode: 'onSubmit',
    resolver: zodResolver(CheckoutUserAddressSchema),
  })

  function handleSubmitUserAddress(data: CheckoutUserAddressData) {
    console.log(data)
  }

  return (
    <Container onSubmit={handleSubmit(handleSubmitUserAddress)}>
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
              maxLength={8}
              placeholder="CEP"
              {...register('cep')}
            />

            <FormErrorMessage>
              {errors.cep && errors.cep.message}
            </FormErrorMessage>

            <InputAddress
              type="text"
              {...register('street')}
              placeholder="Rua"
            />
            <FormErrorMessage>
              {errors.street && errors.street.message}
            </FormErrorMessage>

            <div>
              <InputAddress
                size="200px"
                type="text"
                placeholder="Número"
                {...register('number')}
              />

              <InputAddress
                size="330px"
                type="text"
                {...register('complement')}
                placeholder="Complemento"
              />
            </div>
            <Wrapper>
              <FormErrorMessage>
                {errors.number && errors.number.message}
              </FormErrorMessage>
              <FormErrorMessage>
                {errors.complement && errors.complement.message}
              </FormErrorMessage>
            </Wrapper>

            <InputWrapperWithErrorMessages>
              <div>
                <InputAddress
                  size="200px"
                  type="text"
                  {...register('district')}
                  placeholder="Bairro"
                />
                <FormErrorMessage>
                  {errors.district && errors.district.message}
                </FormErrorMessage>
              </div>
              <div>
                <InputAddress
                  size="256px"
                  type="text"
                  {...register('city')}
                  placeholder="Cidade"
                />
                <FormErrorMessage>
                  {errors.city && errors.city.message}
                </FormErrorMessage>
              </div>
              <div>
                <InputAddress
                  size="60px"
                  type="text"
                  {...register('state')}
                  placeholder="UF"
                  maxLength={2}
                />
                <FormErrorMessage>
                  {errors.state && errors.state.message}
                </FormErrorMessage>
              </div>
            </InputWrapperWithErrorMessages>
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

          <Controller
            control={control}
            name="type"
            render={({ field }) => {
              return (
                <PaymentButtonWrapper
                  onValueChange={field.onChange}
                  value={field.value}
                >
                  <PaymentTypeButton
                    type="button"
                    variant="credit"
                    value="credit"
                  >
                    <div>
                      <CreditCard />
                      <p>Cartão de crédito</p>
                    </div>
                  </PaymentTypeButton>
                  <PaymentTypeButton
                    type="button"
                    variant="debit"
                    value="debit"
                  >
                    <div>
                      <Bank />
                      <p>Cartão de débito</p>
                    </div>
                  </PaymentTypeButton>
                  <PaymentTypeButton
                    type="button"
                    variant="money"
                    value="money"
                  >
                    <div>
                      <Money />
                      <p>Dinheiro</p>
                    </div>
                  </PaymentTypeButton>
                </PaymentButtonWrapper>
              )
            }}
          />
        </PaymentContainer>
      </AddressContainer>

      <BuyoutContainer>
        {selectedCoffees.length > 0 &&
          selectedCoffees.map((item) => (
            <BuyoutCoffeeCard
              key={item.id}
              imageUrl={item.coffeeImageUrl}
              name={item.name}
              total={item.total}
              value={item.value}
              coffeeId={item.id}
              description={item.description}
              tags={item.tags}
            />
          ))}

        <TotalBuyoutCoffees>
          <div>
            <BuyoutValues>Total de itens</BuyoutValues>
            <BuyoutValues>{moneyFormatter.format(totalItems)}</BuyoutValues>
          </div>
          <div>
            <BuyoutValues>Entrega</BuyoutValues>
            <BuyoutValues>
              {moneyFormatter.format(transportationPrice)}
            </BuyoutValues>
          </div>
          <div>
            <BuyoutTotalValues>Total</BuyoutTotalValues>
            <BuyoutTotalValues>
              {moneyFormatter.format(totalValues)}
            </BuyoutTotalValues>
          </div>
        </TotalBuyoutCoffees>

        <ConfirmOrderButton type="submit">
          <p>Confirmar pedido</p>
        </ConfirmOrderButton>
      </BuyoutContainer>
    </Container>
  )
}
