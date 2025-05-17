
import { createSlice } from "@reduxjs/toolkit"

const initialState = {value: false}

const auth = createSlice({
    name: "auth",
    initialState: initialState,
    reducers:{
    login: (state)=> {state.value= !state.value}
    }
})


export const {login} = auth.actions

export default auth.reducer