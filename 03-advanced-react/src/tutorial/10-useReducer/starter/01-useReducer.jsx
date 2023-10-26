import {useState, useReducer} from 'react';
import { data } from '../../../data';

import { CLEAR_LIST, RESET_LIST, REMOVE_ITEM } from './actions';
import reducer from './reducer';


const defaultState = 
{
  people: data,

}





const ReducerBasics = () => {

  //useReducer needs a default state like useState and a reducer function (reducer, state)

  const [state, dispatch] = useReducer(reducer, defaultState) //dispatch updates the state


  // const [people, setPeople] = useState(data);

  const removeItem = (id) => {
    dispatch({type: REMOVE_ITEM, payload: {id}})
    // let newPeople = people.filter((person) => person.id !== id);
    // setPeople(newPeople);
  };

  const clearList = () =>
  {
    dispatch({type: CLEAR_LIST}) //all caps with underscore is convention
    // setPeople([]);
  }

  const resetList = () =>
  {
    dispatch({type: 'RESET_LIST'})
    // setPeople(data);
  }

  console.log(state);
  return (
    <div>
      {state.people.map((person) => {
        const { id, name } = person;
        return (
          <div key={id} className='item'>
            <h4>{name}</h4>
            <button onClick={() => removeItem(id)}>remove</button>
          </div>
        );
      })}

      {
        state.people.length < 1 ? 
        ( 
          <button
              className='btn'
              style={{ marginTop: '2rem' }}
              onClick={resetList}
            >
              reset
            </button>
        )
        : 
        (
          <button
            className='btn'
            style={{ marginTop: '2rem' }}
            onClick={clearList}
          >
            clear items
          </button>
        )
    }

    </div>

      
  );
};

export default ReducerBasics;
