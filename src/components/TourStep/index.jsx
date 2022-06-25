import React from 'react'
import { useDispatch } from 'react-redux'
import { changeTour, toggleSelectPersons } from '../../storeRedux/slices/TourReducer'
import { ContainerInitialStep as Container, H1 } from '../InitialStep/styled'
import { BtnCancel } from '../styleComponentsRecurrents'
import { PText, Select, Ul, BtnNext } from './styled'

export const TourStep = () => {
    const dispatch = useDispatch()

    const Next = () => {
        dispatch(toggleSelectPersons())
    }
    const HandleEventDispatch = (event) => {

        dispatch(changeTour(event.target.value))

    }

    return (
        <Container>
            <H1>
                Selecciona un Tour!
            </H1>
            <PText>
                Elige unos de nuestros cursos, actualmente
                tenemos viajes a Brasil,Cuba y Mexico.
            </PText>

            <Ul>
                <li><p>Brasil: $5000</p></li>
                <li><p>Cuba: $3000</p></li>
                <li><p>Mexico: $4000</p></li>
            </Ul>

            <Select onChange={HandleEventDispatch} >
                <option
                    value="Brasil">
                    Brasil
                </option>
                <option
                    value="Cuba">
                    Cuba
                </option>
                <option
                    value="Mexico">
                    Mexico
                </option>
            </Select>
            <BtnCancel>Cancelar</BtnCancel>
            <BtnNext
                onClick={Next}
            >
                Confirmar
            </BtnNext>

        </Container>
    )
}
