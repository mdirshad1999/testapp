import React from 'react'
import {useSelector,useDispatch} from 'react-redux';
import {updateName,updateAge,updateStatus,fetchUserName} from '../reducer/useReducer';
function Profile() {
   const{name,age,status} =  useSelector((state)=>{
      return state;
   })
   
   const dispatch = useDispatch()
   const update = (age)=>{
      dispatch(updateAge(age))
   }
   const updateNames = ()=>{
      
      dispatch(fetchUserName())
     
   }
   const updateSts = (status)=>{
      dispatch(updateStatus(status))
   }
   
  return (
    <>
      <h1>Hello I am {name}</h1>
      <h2>My age is:{age}</h2>
      <h3>My status is:{status}</h3>
      <button onClick={()=>update(40)}>Update age</button>
      <button onClick={()=>updateNames()}>Update Name</button>
      <button onClick={()=>updateSts('married')}>Update Status</button>
    </>
  )
}

export default Profile
