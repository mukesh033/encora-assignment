import { ADD_NOTES } from './notesTypes'

const initialState = {
  notes: []
}

const notesReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_NOTES: return {
      ...state,
      notes: action.payload
    }

    default: return state
  }
}

export default notesReducer
