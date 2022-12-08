import {createReducer,createSlice,createAsyncThunk} from '@reduxjs/toolkit';

const initialState={
   name:"irshad",
   age:22,
   status:"coder"
 }

 export const fetchUserName = createAsyncThunk(
   'fetchuser',
   async () => {
      const res = await fetch('https://jsonplaceholder.typicode.com/users')
      const res2 =await res.json()
      return res2[Math.floor(Math.random()*10)].name;
   }
 )

const useReducer = createSlice({
   name:"person",
   initialState,
   reducers:{
      updateName(state,action){
         state.name=action.payload;
      },
      updateAge(state,action){
         state.age=action.payload;
      },
      updateStatus(state,action){
         state.status=action.payload;
      },
   },
   extraReducers:{
      [fetchUserName.fulfilled]: (state, action) => {
         // Add user to the state array
         state.name = action.payload;
       },
       [fetchUserName.pending]: (state, action) => {
         // Add user to the state array
         state.name = "loading...";
       },
       [fetchUserName.rejected]: (state, action) => {
         // Add user to the state array
         state.name = "try again";
       }
   }
})

export const {updateName,updateAge,updateStatus} = useReducer.actions
export default useReducer.reducer

//  export default createReducer(initialState,(builder)=>{
//    builder.addCase('UPDATE_AGE',(state,action)=>{
//       state.age = action.payload
//    })
//    builder.addCase('UPDATE_NAME',(state,action)=>{
//       state.name = action.payload
//  })
//  builder.addCase(updateStatus,(state,action)=>{
//    state.status = action.payload
// })
//  })

//  export default(state=initialState,action)=>{
// if(action.type==='UPDATE_AGE'){
// return{
//    ...state,
//    age:action.payload
// }

// }
// return state
//  }