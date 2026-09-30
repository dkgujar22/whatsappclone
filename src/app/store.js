import { configureStore } from "@reduxjs/toolkit";
import userReducer from '../feature/whatsapp/userSlice'


export const store=configureStore({
    reducer:{
        user:userReducer
    }
})