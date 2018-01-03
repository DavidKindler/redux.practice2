import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actionTypes from '../store/actionTypes';

import Person from '../components/Person/Person';
import AddPerson from '../components/AddPerson/AddPerson';

class Persons extends Component {
  render() {
    return (
      <div>
        <AddPerson personAdded={this.props.onAddPerson} />
        {this.props.persons.map(person => (
          <Person
            key={person.id}
            name={person.name}
            age={person.age}
            clicked={() => this.props.onDeletePerson(person.id)}
          />
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    persons: state.persons
  };
};
const mapDispatchToProps = dispatch => {
  return {
    onAddPerson: (name, age) =>
      dispatch({
        type: actionTypes.ADD_PERSON,
        payload: {
          name: name,
          age: age
        }
      }),
    onDeletePerson: id => dispatch({ type: actionTypes.DELETE_PERSON, payload: id })
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Persons);
