import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { clear } from '../feature/whatsapp/userSlice';

const ShowFriend = () => {
    const selectedfriend=useSelector((state)=>state.user.selectedfriend)
    const dispatch=useDispatch();

    if(!selectedfriend) return <h1 className='flex text-4xl text-green-400 justify-center items-center'>Download whatsapp</h1>
  return (
    <div className='text-center'>
        <img src={selectedfriend.profileImage} alt="" className='w-20 h-20 rounded-full'/>
        {selectedfriend.name}
         <br />
         <button onClick={()=>dispatch(clear())} className=' px-4 rounded-2xl border-2 border-gray-400'>Close</button>
      
    </div>
  )
}

export default ShowFriend
