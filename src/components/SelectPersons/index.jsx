import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addNewPerson, dellPerson, removeAll, toggleFinalTraject } from '../../storeRedux/slices/TourReducer'
import { ContainerInitialStep as Container, H1 } from '../InitialStep/styled'
import { BtnCancel } from '../styleComponentsRecurrents'
import { BtnContinue, BtnDelete, BtnSubmit, FormAdd, Input, ListContainer, ListItem, PText, PTextWhite } from './styled'
export const SelectPerson = () => {
    const [value, setValue] = useState("")


    const dispatch = useDispatch()
    const list = useSelector(state => {

        return state.Tour.state.Persons
    })

    const ReturnPersons = list.map(item => {
        return <ListItem
            key={item}
        ><PText>
                {item}
            </PText>
            <BtnDelete

                value={item}
                onClick={() => dellPersonFunction(item)}
                type='button'>X</BtnDelete>
        </ListItem>
    })
    const addPerson = (event) => {
        event.preventDefault()
        dispatch(addNewPerson(value))
        setValue("")
    }
    const dellPersonFunction = (item) => {
        dispatch(dellPerson(item))
    }
    const handleOnChangeValue = (event) => {
        setValue(event.target.value)
    }
    const NextStep = () => {
        dispatch(toggleFinalTraject())
    }
    return (
        <Container>
            <H1>
                Ingresa las persona a viajar!
            </H1>
            <ListContainer>
                {ReturnPersons}
            </ListContainer>
            <PText>
                Al ingresar las personas sabras el valor del
                viaje en total.
            </PText>

            <FormAdd
                onSubmit={addPerson}
            >
                <PTextWhite>
                    Ingresar persona:
                </PTextWhite>

                <Input
                    value={value}
                    onChange={handleOnChangeValue}
                    placeholder="Ingresar persona"
                />
                <BtnSubmit

                    type="submit"
                >Agregar</BtnSubmit>

            </FormAdd>
            <BtnCancel
                onClick={() => {
                    dispatch(removeAll())
                }}
            >Cancelar</BtnCancel>
            <BtnContinue
                onClick={NextStep}
            >
                Continuar
            </BtnContinue>
        </Container>
    )
}
