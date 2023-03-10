import {configureStore} from "@reduxjs/toolkit";
import AuthReducer from './authState';

let authStore;
export default authStore =  configureStore({
 enhancers: undefined, middleware: undefined, preloadedState: undefined, reducer: {
    auth: AuthReducer
 }
})
export type RootState = ReturnType<typeof authStore.getState>
export type AppDispatch = typeof authStore.dispatch