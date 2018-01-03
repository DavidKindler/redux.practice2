import * as actionTypes from '../actionTypes';

const initialState = {
  persons: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_PERSON:
      const newPerson = {
        id: Math.random(), // not really unique but good enough here!
        name: action.payload.name,
        // age: Math.floor(Math.random() * 60)
        age: action.payload.age
      };
      return { ...state, persons: state.persons.concat(newPerson) };
    case actionTypes.DELETE_PERSON:
      const updatedArray = state.persons.filter(person => person.id !== action.payload);
      return { ...state, persons: updatedArray };
  }
  return state;
};

export default reducer;
