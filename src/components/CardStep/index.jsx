import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { initialState, toggleInitial } from '../../storeRedux/slices/TourReducer'
import { FinalTraject } from '../FinalTraject'
import { InitialStep } from '../InitialStep'
import { SelectPerson } from '../SelectPersons'
import srcBackground from './back.jpg'
import { TourStep } from '../TourStep'
import { CardContainer } from './styled'
import { CongratulationPay } from '../CongratulationPay'

export const CardStep = () => {
    const dispatch = useDispatch()
    const list = useSelector(state => state.Tour.state)
    const [state, setState] = useState(initialState)
    useEffect(() => {
        dispatch(toggleInitial())
    }, [dispatch])
    useEffect(() => {
        setState(list)
    }, [list])
    return (
        <CardContainer src={srcBackground} >
            {state.initial ? <InitialStep /> : null}
            {state.selectTour ? <TourStep /> : null}
            {state.selectPersons ? <SelectPerson /> : null}
            {state.finalTraject ? <FinalTraject /> : null}
            {state.congratulationPay ? <CongratulationPay /> : null}
        </CardContainer>
    )
}
