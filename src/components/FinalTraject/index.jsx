import React from 'react'
import { useDispatch } from 'react-redux'
import { toggleCongratulationPay } from '../../storeRedux/slices/TourReducer'
import { H1, ContainerInitialStep as Container } from '../InitialStep/styled'
import { BtnCancel } from '../styleComponentsRecurrents'
import { BtnConfirmTotal, Li, TitleSecondary, TotalToPay, Ul } from './styled'


export const FinalTraject = () => {
    const dispatch = useDispatch()
    const NextStep = () => {
        dispatch(toggleCongratulationPay())
    }


    return (
        <Container>
            <H1>Confirme compra😀!</H1>
            <TotalToPay>
                <TitleSecondary>
                    Lista a pagar:
                </TitleSecondary>
                <Ul>
                    <Li>
                        Primero:1000
                    </Li>
                </Ul>
                <TitleSecondary>
                    Confirme cuenta 💲💲
                </TitleSecondary>
                <TitleSecondary>
                    💲3000
                </TitleSecondary>
            </TotalToPay>
            <div>
                <BtnCancel>
                    Cancelar
                </BtnCancel>
                <BtnConfirmTotal
                    onClick={NextStep}
                >
                    Pagar
                </BtnConfirmTotal>
            </div>
        </Container>
    )
}
