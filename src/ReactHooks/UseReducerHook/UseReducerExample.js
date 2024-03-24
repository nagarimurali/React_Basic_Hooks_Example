import React from 'react';
import { useReducer } from 'react';


const reducer = (state,action) => {
  console.log("State",state);
  console.log("action",action);

  if(action.type==="DELETE_PERSON"){
    const newPerson=state.userData.filter((eachItem)=>eachItem.id!==action.payLoad);
 
    return{
      ...state,
      userData:newPerson,
      length:state.length-1
    }
  }
  return state;

}
const UseReducerExample = () => {
  const initialState = {
    userData: [
      {
        id: 1,
        name: "Murali",
        email: "muralin@gmail.com"

      }, {
        id: 2,
        name: "Prem",
        email: "premO@gmail.com"
      }
    ],
    length:2
  };
  const [state, dispatch] = useReducer(reducer, initialState);
  const handleDelete=(id)=>{
    dispatch({
      type:'DELETE_PERSON',
      payLoad:id
    })
  };

  return (
    <div style={{ textAlign: "center" }}>
     
      <div>Array Length:{state.length}</div>
      {
        state.userData.map((eachItem) => {
          const { id, name, email } = eachItem
          return (
            <div key={id}>
              <h3>{name}</h3>
              <p>{email}</p>
              <button onClick={()=>handleDelete(id)}>Delete</button>
            </div>

          )
        })
      }

    </div>
  )
}

export default UseReducerExample
