

//selectors
export const getTableData = ({table},id) =>table.find(tab=>tab.id === id)

// actions
const createActionName = actionName => `app/posts/${actionName}`;
const UPDATE_TABLES = createActionName('UPDATE_TABLES')
const EDIT_TABLE = createActionName('EDIT_TABLE')

// action creators
export const updateTables = payload=>({type: UPDATE_TABLES, payload})
export const editTable =payload=>({type: EDIT_TABLE, payload})
export const fetchTables = () =>{
  return(dispatch) =>{
  fetch('http://localhost:3131/api/tables')
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
    fetch('http://localhost:3131/api/tables/'+editTableData.id, options )  
      .then(() => dispatch(editTable(editTableData)))
  }
}

const reducer = (statePart = [], action) => {
  
  switch (action.type) {
    case UPDATE_TABLES:
      console.log(statePart,action.payload)
      return [...action.payload]
    case EDIT_TABLE:
      return statePart.map(table=>{
        if(table.id === action.id){
          return action
        }else{
          return table
        } 
      })
      default:
        return statePart;
  };
};

export default reducer;
