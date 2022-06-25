import React from 'react'
import { H1, ContainerInitialStep as Container } from '../InitialStep/styled'
import { BtnCancel } from '../styleComponentsRecurrents'
import { BtnConfirmTotal, Li, TitleSecondary, TotalToPay, Ul } from './styled'


export const FinalTraject = () => {
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
                <BtnConfirmTotal>
                    Pagar
                </BtnConfirmTotal>
            </div>
        </Container>
    )
}
