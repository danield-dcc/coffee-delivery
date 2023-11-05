import {
  CarStatus,
  CardContent,
  CardIcon,
  ConfirmationCard,
  ConfirmationDescription,
  ConfirmationImg,
  ConfirmationTittle,
  Container,
  StatusCard,
} from './styles'
import SuccessImg from '../../assets/Success/Illustration.svg'

import { MapPin, Clock, CurrencyDollar } from 'phosphor-react'
import { useBuyoutCoffeeContext } from '../../contexts/CoffeeContext'

const PaymentType = {
  debit: 'Débito',
  credit: 'Cartão de crédito',
  money: 'Dinheiro',
}

export function Success() {
  const { getUserPaymentData } = useBuyoutCoffeeContext()
  const userPaymentData = getUserPaymentData()
  return (
    <Container>
      <ConfirmationCard>
        <ConfirmationTittle>Uhu! Pedido confirmado</ConfirmationTittle>

        <ConfirmationDescription>
          Agora é só aguardar que logo o café chegará até você
        </ConfirmationDescription>

        <StatusCard>
          <CardContent>
            <CardIcon iconColor="purple">
              <MapPin />
            </CardIcon>
            <CarStatus>
              <p>
                Entrega em{' '}
                <strong>
                  {userPaymentData?.street}, {userPaymentData?.number}
                </strong>
              </p>
              <p>{`${userPaymentData?.district} - ${userPaymentData?.city}, ${userPaymentData?.state}`}</p>
            </CarStatus>
          </CardContent>
          <CardContent>
            <CardIcon iconColor="yellow">
              <Clock />
            </CardIcon>
            <CarStatus>
              <p>Previsão de entrega</p>
              <p>
                <strong>20 min - 30 min</strong>
              </p>
            </CarStatus>
          </CardContent>
          <CardContent>
            <CardIcon iconColor="yellowDark">
              <CurrencyDollar />
            </CardIcon>
            <CarStatus>
              <p>Pagamento na entrega</p>
              <p>
                <strong>{PaymentType[userPaymentData.type]}</strong>
              </p>
            </CarStatus>
          </CardContent>
        </StatusCard>
      </ConfirmationCard>

      <ConfirmationImg src={SuccessImg} alt="" />
    </Container>
  )
}
