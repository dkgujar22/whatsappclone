import { useState } from 'react'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import Card from './component/Card'
import ShowFriend from './component/ShowFriend'
import { setOnlineFriends, setSearch } from './feature/whatsapp/userSlice'

function App() {
  const dispatch=useDispatch();
  const {friends,search,onlineFriends,selectedfriend}=useSelector((state)=>state.user)


  const onlinefriends=friends.filter((friend)=>friend.isOnline==="online").length
  const filterFriends=friends.filter((friend)=>{
    const searchMatch=friend.name.toLowerCase().includes(search.toLowerCase());
    const onlineMatch=friend.isOnline===onlineFriends || onlineFriends==="all"
    if(searchMatch && onlineMatch){
      console.log(friend);
      
    }
     

    return searchMatch && onlineMatch
  })

  return (
   <>
      <div className='grid grid-cols-3 h-dvh'>
           <aside className='h-dvh border-2 border-gray-200 rounded-2xl'>
               
                 <div>
                    <h1 className='text-green-500 text-2xl font-semibold'>Whatsapp</h1>
                    <input onChange={(e)=>dispatch(setSearch(e.target.value))} type="search" placeholder='search or start a new chat' className=' p-2 border-1 rounded-2xl text-gray-500' />
                 </div>
                 <div className='flex gap-5 '>
                  <button className='hover:bg-gray-50 px-3 rounded-2xl border-1 border-black tracking-wide font-semibold' onClick={()=>dispatch(setOnlineFriends("all"))}>All</button>
                  <button className='hover:bg-gray-50 px-3 rounded-2xl border-1 border-black tracking-wide font-semibold' onClick={()=>dispatch(setOnlineFriends("online"))}>online</button>
                  <button className='hover:bg-gray-50 px-3 rounded-2xl border-1 border-black tracking-wide font-semibold' onClick={()=>dispatch(setOnlineFriends("offline"))}>offline</button>
                 
                  

                 </div>
                  {/* <select value={onlineFriends} onChange={(e)=>dispatch(setOnlineFriends(e.target.value))}>
                    <option value="all">All</option>
                    <option value="online">Online</option>
                    <option value="offline">offline</option>
                  </select> */}
              
               <section className='flex'>
                <p>online friends : {onlinefriends}</p><h1 className='w-2 h-2 bg-green-500 rounded-full'></h1>
               </section>
               <section className=' px-2'>
                {
                  filterFriends.map((friend)=>(
                    <Card key={friend.id} friend={friend}  />
                  ))
                }

               </section>
           </aside>
           <main className='border-2 border-gray-400 col-span-2'>
            {/* topbar */}
                <section className='flex gap-3 shadow-2xl shadow-green-100'>
                  <div className='grid grid-cols-1'>
                    <img src={selectedfriend?.profileImage} alt="" className='w-10 h-10 rounded-full' />
                  </div>
                  <div className='flex justify-center items-center'>
                    {selectedfriend?.name}
                  </div>
                </section>
               <section>
                <ShowFriend/>
               </section>
           </main>
      </div>
   </>
  )
}

export default App
