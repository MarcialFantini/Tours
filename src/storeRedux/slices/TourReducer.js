import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    state: {
        initial: false,
        selectTour: false,
        selectPersons: false,
        finalTraject: false,
        Persons: [],
        TourSelected: ""
    }
}

const TourSlice = createSlice({
    name: "Tour",
    initialState,
    reducers: {
        toggleInitial: (state) => {
            const newState = { ...initialState.state, initial: true }

            state.state = newState
        },
        toggleSelectTour: (state) => {
            const TState = { ...initialState.state, selectTour: true }
            state.state = TState
        },
        toggleSelectPersons: (state) => {
            const PState = { ...initialState.state, selectPersons: true }
            state.state = PState
        },
        toggleFinalTraject: (state) => {
            const FState = { ...initialState.state, finalTraject: true }
            state.state = FState
        },
        addNewPerson: (state, action) => {

            state.state.Persons = [
                ...state.state.Persons,
                action.payload
            ]
        },
        dellPerson: (state, actions) => {
            const newStateFilter = state.state.Persons.filter(item => {
                console.log(actions)
                return item !== actions.payload
            })
            state.state.Persons = newStateFilter

        },
        changeTour: (state, actions) => {
            state.state.TourSelected = actions.payload
        }
    }
})

export default TourSlice.reducer
export const {
    toggleInitial,
    toggleSelectTour,
    toggleSelectPersons,
    toggleFinalTraject,
    addNewPerson,
    dellPerson,
    changeTour
} = TourSlice.actions