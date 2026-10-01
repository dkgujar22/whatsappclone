import React from 'react'
import { useDispatch } from 'react-redux'
import { setSelectedFriend } from '../feature/whatsapp/userSlice';

const Card = ({friend}) => {
    const dispatch=useDispatch();
  return (
       <button className='hover:bg-gray-200 hover:rounded-2xl grid grid-cols-7 cursor-pointer gap-3' onClick={()=>dispatch(setSelectedFriend(friend))}>
           <div className='col-span-1'>
            <img src={friend.profileImage} alt="" className='w-10 h-10 rounded-full flex justify-center items-center' />
           </div>
           <div className='col-span-4 flex justify-center items-start flex-col'>
            <p className='font-semibold'>{friend.name}</p>
            <p className='text-gray-600'>{friend.lastMessage}</p>
            </div>
           <div className='flex items-center col-span-2 border-2 border-black'>
               <p>{friend.isOnline==="online"&&<h1 className='w-2 h-2 bg-green-500 rounded-full'></h1>}</p>
               <p>{friend.time}</p>
               
           </div>

       </button>
  )
}

export default Card
