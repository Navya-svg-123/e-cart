import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
    name:'Counter App',
    initialState:{
        value:0
    },
    //action
    reducers:{
        //increament
        increament:(state)=>{
            state.value+=1
        },
        //decrement
        decrement:(state)=>{
            state.value-=1

        },
        //reset
        reset:(state)=>{
            state.value=0
        },
        rangeUpdate:(state,action)=>{
            state.value +=action.payload
        }

    }
})

export const {increament , decrement, reset,rangeUpdate } =counterSlice.actions

export default counterSlice.reducer