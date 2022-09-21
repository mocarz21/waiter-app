import { API_URL } from '../config'

//selectors
export const getTableData = ({table},id) =>table.find(tab=>tab.id === id)

// actions
const createActionName = actionName => `app/posts/${actionName}`;
const UPDATE_TABLES = createActionName('UPDATE_TABLES')
const EDIT_TABLE = createActionName('EDIT_TABLE')
const ADD_TABLE = createActionName('ADD_TABLE')

// action creators
export const updateTables = payload=>({type: UPDATE_TABLES, payload})
export const editTable = payload=>({type: EDIT_TABLE, payload})
export const addTable = payload=>({type: ADD_TABLE, payload})
export const fetchTables = () =>{
  return(dispatch) =>{
  fetch(API_URL)
    .then(res=>res.json())
    .then(tables => dispatch(updateTables(tables)))
  }
}
export const editTableRequest = (editTableData) =>{
  return(dispatch) =>{
    const options = {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        id: editTableData.id,
        status: editTableData.status,
        people: editTableData.people,
        maxPeople: editTableData.maxPeople,
        price: editTableData.price
      })
    };
    console.log('aa',options)
    fetch(API_URL + editTableData.id, options )  
      .then(() => dispatch(editTable(editTableData)))
  }
}
export const addTableRequest = tableData => {
  return(dispatch) =>{
    const options ={
      method: 'POST',
      headers:{
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        id: tableData.id,
        status: tableData.status,
        people: tableData.people,
        maxPeople: tableData.maxPeople,
        price: tableData.price
      })
    };
    fetch(API_URL , options )  
      .then(() => dispatch(addTable(tableData)))
  }
}


const reducer = (statePart = [], action) => {
  
  switch (action.type) {
    case UPDATE_TABLES:
      
      return [...action.payload]
    case EDIT_TABLE:
      return statePart.map(table=>{
        if(table.id === action.id){
          return action
        }else{
          return table
        } 
      })
    case ADD_TABLE:
      console.log('asda',statePart,action.payload)
      return [...statePart, action.payload]
      default:
        return statePart;
  };
};

export default reducer;
