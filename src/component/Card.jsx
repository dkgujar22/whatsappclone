import React from 'react'
import { useDispatch } from 'react-redux'
import { setSelectedFriend } from '../feature/whatsapp/userSlice';

const Card = ({friend}) => {
    const dispatch=useDispatch();
  return (
       <button className='hover:bg-gray-200 hover:rounded-2xl flex justify-around cursor-pointer gap-10' onClick={()=>dispatch(setSelectedFriend(friend))}>
           <div className='flex justify-center items-center w-20'>
            <img src={friend.profileImage} alt="" className='w-15 h-15 rounded-full' />
           </div>
           <div className='w-40'>
            <p>{friend.name}</p>
            <p>{friend.lastMessage}</p>
            </div>
           <div className='flex justify-center items-center w-20'>
               <p>{friend.isOnline&&<h1 className='w-2 h-2 bg-green-500 rounded-full'></h1>}</p>
               <p>{friend.time}</p>
               
           </div>

       </button>
  )
}

export default Card
