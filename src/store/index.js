import {createSlice,configureStore} from '@reduxjs/toolkit'
const initialState = {token: null, expirationTime: null}
const tokenSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setToken(state,action){
            state.token = action.payload.token;
            state.expirationTime = action.payload.expirationTime;
        },
        removeToken(state){
            state.token = null;
            state.expirationTime=null;
        }
    }
});
export const tokenActions = tokenSlice.actions;
const store = configureStore({
    reducer: tokenSlice.reducer
})

export default store;