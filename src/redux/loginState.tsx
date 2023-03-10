import {createSlice} from "@reduxjs/toolkit";
interface RegisterState {
    value: string // initial State
}

// Define the initial state using that type
const initialState: RegisterState = {
    value: "Sign In"
}

export const loginSlice = createSlice({
    extraReducers: undefined, initialState: {value: "Sign In"}, name: "reg", reducers: {
        toLogin:(state)=> {
            state.value = "Sign In";
        },
        toRegister: (state)=>{
            state.value = "Register Now";
        }
    }
});
export const {toLogin, toRegister} = loginSlice.actions;
export default loginSlice.reducer;