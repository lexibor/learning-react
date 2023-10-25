import {useState, useReducer} from 'react';
import { data } from '../../../data';

const defaultState = 
{
  people: data,

}

const CLEAR_LIST = 'CLEAR_LIST';
const RESET_LIST = 'RESET_LIST';
const REMOVE_ITEM = 'REMOVE_ITEM';

const reducer = (state, action) =>
{
  //state is state before the object

  if(action.type === CLEAR_LIST)
  {
      return {...state, people: []}
  }

  if(action.type === RESET_LIST)
  {
    return {...state, people: data}
  }

  if(action.type === REMOVE_ITEM)
  {
    let newPeople = state.people.filter((person) => person.id !== action.payload.id);

    return {...state, people: newPeople};
  }

  throw new Error(`No matching "${action.type}" - action type`);
  // console.log(action);
};

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
