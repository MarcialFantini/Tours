import { createSlice } from "@reduxjs/toolkit"

export const initialState = {
    state: {
        initial: false,
        selectTour: false,
        selectPersons: false,
        finalTraject: false,
        congratulationPay: false,
        Persons: [],
        TourSelected: ""
    }
}

const TourSlice = createSlice({
    name: "Tour",
    initialState,
    reducers: {
        toggleInitial: (state) => {
            const newState = {

                selectTour: false,
                selectPersons: false,
                finalTraject: false,
                congratulationPay: false,
                Persons: [],
                TourSelected: "",
                initial: true
            }

            state.state = newState
        },
        toggleSelectTour: (state) => {
            const TState = {
                initial: false,

                selectPersons: false,
                finalTraject: false,
                congratulationPay: false,
                Persons: [],
                TourSelected: "",
                selectTour: true
            }
            state.state = TState
        },
        toggleSelectPersons: (state) => {
            const PState = {
                initial: false,
                selectTour: false,

                finalTraject: false,
                congratulationPay: false,
                Persons: [...state.state.Persons],
                TourSelected: state.state.TourSelected,
                selectPersons: true
            }
            state.state = PState
        },
        toggleFinalTraject: (state) => {
            const FState = {
                initial: false,
                selectTour: false,
                selectPersons: false,
                congratulationPay: false,
                Persons: [...state.state.Persons],
                TourSelected: state.state.TourSelected,
                finalTraject: true
            }
            state.state = FState
        },
        toggleCongratulationPay: (state) => {
            const PayState = {
                initial: false,
                selectTour: false,
                selectPersons: false,
                congratulationPay: false,
                Persons: [...state.state.Persons],
                TourSelected: state.state.TourSelected,
                finalTraject: false,
                congratulationPay: true
            }
            state.state = PayState
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
        },
        removeAll: (state) => {
            state.state = { ...initialState.state, initial: true }

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
    changeTour,
    toggleCongratulationPay,
    removeAll
} = TourSlice.actions