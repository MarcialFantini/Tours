import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeAll, toggleCongratulationPay } from '../../storeRedux/slices/TourReducer'
import { H1, ContainerInitialStep as Container } from '../InitialStep/styled'
import { BtnCancel } from '../styleComponentsRecurrents'
import { BtnConfirmTotal, Li, TitleSecondary, TotalToPay, Ul } from './styled'


export const FinalTraject = () => {

    const dispatch = useDispatch()
    const NextStep = () => {
        dispatch(toggleCongratulationPay())
    }
    const list = useSelector(state => {
        console.log(state.Tour.state)
        return state.Tour.state
    })
    const listPricePersons = list.Persons.map(item => {
        const priceAndPlace = list.TourSelected.split('-')
        console.log(item)
        return (<Li
            key={item}
        >
            {"-" + item + ": $" + priceAndPlace[1] + " en " + priceAndPlace[0]}
        </Li>)
    })

    const splitPrice = list.TourSelected.split('-')
    const totalPrice = list.Persons.length * splitPrice[1]

    return (
        <Container>
            <H1>Confirme compra😀!</H1>
            <TotalToPay>
                <TitleSecondary
                    subrayado={true}
                >
                    Lista a pagar:
                </TitleSecondary>
                <Ul>
                    {
                        listPricePersons
                    }
                </Ul>
                <TitleSecondary subrayado={true}>
                    Confirme cuenta:
                </TitleSecondary>
                <TitleSecondary>
                    Total a pagar💲{totalPrice}
                </TitleSecondary>
            </TotalToPay>
            <div>
                <BtnCancel
                    onClick={() => {
                        dispatch(removeAll())
                    }}
                >
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
