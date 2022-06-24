import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toggleInitial } from '../../storeRedux/slices/TourReducer'
import { FinalTraject } from '../FinalTraject'
import { InitialStep } from '../InitialStep'
import { SelectPerson } from '../SelectPersons'
import srcBackground from './back.jpg'
import { TourStep } from '../TourStep'
import { CardContainer } from './styled'

export const CardStep = () => {
    const dispatch = useDispatch()
    const state = useSelector(state => state.Tour.state)
    console.log(state)

    useEffect(() => {
        dispatch(toggleInitial())
    }, [dispatch])
    return (
        <CardContainer src={srcBackground} >
            {state.initial ? <InitialStep /> : null}
            {state.selectTour ? <TourStep /> : null}
            {state.selectPersons ? <SelectPerson /> : null}
            {state.finalTraject ? <FinalTraject /> : null}
        </CardContainer>
    )
}
