import { createSlice } from "@reduxjs/toolkit";

const initialState={
    friends:[
  {
    "id": 1,
    "name": "Ali Khan",
    "profileImage": "https://i.pravatar.cc/150?img=1",
    "lastMessage": "Bro, where are you?",
    "time": "10:30 AM",
    "unreadCount": 2,
    "isOnline": true
  },
  {
    "id": 2,
    "name": "Ahmed Raza",
    "profileImage": "https://i.pravatar.cc/150?img=2",
    "lastMessage": "Let's meet tomorrow.",
    "time": "9:45 AM",
    "unreadCount": 1,
    "isOnline": false
  },
  {
    "id": 3,
    "name": "Hamza Malik",
    "profileImage": "https://i.pravatar.cc/150?img=3",
    "lastMessage": "Did you complete the project?",
    "time": "Yesterday",
    "unreadCount": 0,
    "isOnline": true
  },
  {
    "id": 4,
    "name": "Usman Ahmed",
    "profileImage": "https://i.pravatar.cc/150?img=4",
    "lastMessage": "Okay bro 👍",
    "time": "Yesterday",
    "unreadCount": 0,
    "isOnline": false
  },
  {
    "id": 5,
    "name": "Bilal Hussain",
    "profileImage": "https://i.pravatar.cc/150?img=5",
    "lastMessage": "Send me the files.",
    "time": "Monday",
    "unreadCount": 3,
    "isOnline": true
  },
  {
    "id": 6,
    "name": "Saad Ali",
    "profileImage": "https://i.pravatar.cc/150?img=6",
    "lastMessage": "Thanks bro!",
    "time": "Monday",
    "unreadCount": 0,
    "isOnline": false
  },
  {
    "id": 7,
    "name": "Zain Abbas",
    "profileImage": "https://i.pravatar.cc/150?img=7",
    "lastMessage": "What are you doing?",
    "time": "Sunday",
    "unreadCount": 5,
    "isOnline": true
  },
  {
    "id": 8,
    "name": "Hassan Ali",
    "profileImage": "https://i.pravatar.cc/150?img=8",
    "lastMessage": "See you soon!",
    "time": "Sunday",
    "unreadCount": 0,
    "isOnline": false
  },
  {
    "id": 9,
    "name": "Fahad Sheikh",
    "profileImage": "https://i.pravatar.cc/150?img=9",
    "lastMessage": "Can you call me?",
    "time": "Saturday",
    "unreadCount": 1,
    "isOnline": true
  },
  {
    "id": 10,
    "name": "Danish Khan",
    "profileImage": "https://i.pravatar.cc/150?img=10",
    "lastMessage": "Good night bro 🌙",
    "time": "Saturday",
    "unreadCount": 0,
    "isOnline": false
  }
],
    selectedfriend:null,

    onlineFriends:null,
    search:""

     
}

export const userSlice=createSlice({
    name:"user",
    initialState,
    reducers:{
        setSelectedFriend:(state,action)=>{
            state.selectedfriend=action.payload
        },
        clear:(state)=>{
            state.selectedfriend=null
        },
        setOnlineFriends:(state,action)=>{
            state.onlineFriends=action.payload
           
        },
        setSearch:(state,action)=>{
            state.search=action.payload
        }


    }
})


export const {
    setSelectedFriend,
    clear,
    setOnlineFriends,
    setSearch
}=userSlice.actions

export default userSlice.reducer