import * as actionTypes from '../actionTypes';

const initialState = {
  persons: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_PERSON:
      const newPerson = {
        id: Math.random(), // not really unique but good enough here!
        name: 'David',
        age: Math.floor(Math.random() * 60)
      };
      return { ...state, persons: state.persons.concat(newPerson) };
    case actionTypes.DELETE_PERSON:
      const updatedArray = state.persons.filter(person => person.id !== action.payload);
      return { ...state, persons: updatedArray };
  }
  return state;
};

export default reducer;

// this.setState(prevState => {
//   return { persons: prevState.persons.filter(person => person.id !== personId) };
// });

// const newPerson = {
//   id: Math.random(), // not really unique but good enough here!
//   name: 'Max',
//   age: Math.floor(Math.random() * 40)
// };
// this.setState(prevState => {
//   return { persons: prevState.persons.concat(newPerson) };
// });
