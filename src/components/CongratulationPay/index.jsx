import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { removeAll } from '../../storeRedux/slices/TourReducer'
import { ContainerInitialStep, H1 } from '../InitialStep/styled'
import { BtnContinue, TextP } from './styled'

export const CongratulationPay = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        setTimeout(() => {
            dispatch(removeAll())
        }, 35000)
    }, [])

    return (
        <ContainerInitialStep>
            <H1>
                Muchas gracias por comprar!✈️
            </H1>
            <TextP>
                Esperamos que tenga un buen viajes

                y muy buenas 🎇aventuras🎇!
            </TextP>
            <BtnContinue
                onClick={() => {
                    dispatch(removeAll())
                }}
            >
                Continuar
            </BtnContinue>
        </ContainerInitialStep>
    )
}
