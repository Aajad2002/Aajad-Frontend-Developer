import { configureStore } from "@reduxjs/toolkit";


import CapsuleReducer from"./CapsuleSlice"
import UserReducer from"./UserSlice"
export const store=configureStore({
    reducer:{       
        CapsuleReducer,
        UserReducer
    }
})