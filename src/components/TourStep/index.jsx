import React from 'react'
import { useDispatch } from 'react-redux'
import { toggleSelectPersons } from '../../storeRedux/slices/TourReducer'
import { ContainerInitialStep as Container, H1 } from '../InitialStep/styled'
import { PText, Select, Ul, BtnNext } from './styled'

export const TourStep = () => {
    const dispatch = useDispatch()

    const Next = () => {
        dispatch(toggleSelectPersons())
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

            <Select >
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
            <BtnNext
                onClick={Next}
            >
                Confirmar
            </BtnNext>
        </Container>
    )
}
