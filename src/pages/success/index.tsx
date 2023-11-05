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

export function Success() {
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
                Entrega em <strong>Rua João Daniel Martinelli, 102</strong>
              </p>
              <p>Farrapos - Porto Alegre, RS</p>
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
                <strong>Cartão de Crédito</strong>
              </p>
            </CarStatus>
          </CardContent>
        </StatusCard>
      </ConfirmationCard>

      <ConfirmationImg src={SuccessImg} alt="" />
    </Container>
  )
}
