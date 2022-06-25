import React from 'react'
import { useDispatch } from 'react-redux'
import { toggleSelectTour } from '../../storeRedux/slices/TourReducer'
import { BtnCancel } from '../styleComponentsRecurrents'
import { BtnNext, ContainerInitialStep, H1, P } from './styled'


export const InitialStep = () => {
    const dispatch = useDispatch()
    const NextStep = () => {
        dispatch(toggleSelectTour())
    }

    return (
        <ContainerInitialStep>
            <H1>Bienvenido a Tours</H1>
            <P>
                Aquí podrás conseguir viajes para tus
                vacaciones este año.
            </P>
            <BtnCancel>Cancelar</BtnCancel>
            <BtnNext
                onClick={NextStep}
            >Comenzar</BtnNext>
        </ContainerInitialStep>
    )
}
