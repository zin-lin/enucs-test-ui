import {createSlice} from "@reduxjs/toolkit";
interface RegisterState {
    value: boolean // initial State
}

// Define the initial state using that type
const initialState: RegisterState = {
    value: false
}

export const authSlice = createSlice({
    extraReducers: undefined, initialState: {value: false}, name: "auth", reducers: {
        LogOut:(state)=> {
            state.value =false;
        },
        Login: (state)=>{
            state.value = true;
        }
    }
});
export const {Login, LogOut} = authSlice.actions;
export default authSlice.reducer;