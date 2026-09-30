import { useState } from 'react'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import Card from './component/Card'
import ShowFriend from './component/ShowFriend'
import { setOnlineFriends, setSearch } from './feature/whatsapp/userSlice'

function App() {
  const dispatch=useDispatch();
  const {friends,search,onlineFriends}=useSelector((state)=>state.user)


  const onlinefriends=friends.filter((friend)=>friend.isOnline===true).length
  const filterFriends=friends.filter((friend)=>{
    const searchMatch=friend.name.toLowerCase().includes(search.toLowerCase());
    return searchMatch
  })

  return (
   <>
      <div className='flex'>
           <aside>
              
               <section>
                 <div>
                    <h1 className='text-green-500 text-3xl font-semibold'>Whatsapp</h1>
                    <input onChange={(e)=>dispatch(setSearch(e.target.value))} type="search" placeholder='search or start a new chat' className='w-80 p-2 border-1 rounded-2xl text-gray-500' />
                 </div>
                  <select value={onlineFriends} onChange={(e)=>dispatch(setOnlineFriends(e.target.value))}>
                    <option value="all">All</option>
                    <option value="online">Online</option>
                    <option value="offline">offline</option>
                  </select>
               </section>
               <section className='flex'>
                <p>online friends : {onlinefriends}</p><h1 className='w-2 h-2 bg-green-500 rounded-full'></h1>
               </section>
               <section className='border-2 border-gray-200 rounded-2xl px-2'>
                {
                  filterFriends.map((friend)=>(
                    <Card key={friend.id} friend={friend}  />
                  ))
                }

               </section>
           </aside>
           <main>
               <section>
                <ShowFriend/>
               </section>
           </main>
      </div>
   </>
  )
}

export default App
