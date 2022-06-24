import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addNewPerson, dellPerson } from '../../storeRedux/slices/TourReducer'
import { ContainerInitialStep as Container, H1 } from '../InitialStep/styled'
import { BtnSubmit, FormAdd, Input, ListContainer, ListItem, PText, PTextWhite } from './styled'
export const SelectPerson = () => {
    const [value, setValue] = useState("")


    const dispatch = useDispatch()
    const list = useSelector(state => {

        return state.Tour.state.Persons
    })

    const ReturnPersons = list.map(item => {
        return <ListItem
            key={item}
        >{item}
            <button
                value={item}
                onClick={() => dellPersonFunction(item)}
                type='button'>X</button>
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

        </Container>
    )
}
