import { ADD_NOTES } from './notesTypes';

export const addNotes = (notes = []) => {
  return {
    type: ADD_NOTES,
    payload: notes
  }
}