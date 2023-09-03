import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "UserAuthentication",
    initialState: {
        userAuth:null,
        user:"",
        status:null,
        message:"" // Add an error state
    },
    reducers: {
        UserLogin(state, action) {
          
            state.message=action.payload.msg;
            state.userAuth=action.payload.status;
            state.status=action.payload.status;
            state.user=action.payload.name
        },
        UserRegister(state,action){
            state.message=action.payload
        }
    },
});

export const { UserLogin,UserRegister} = userSlice.actions;
export default userSlice.reducer
export const userLogin = (userData) => async (dispatch) => {
    try {
        const response = await fetch(`https://space-authentication.onrender.com/users/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userData), // Convert userData to JSON and send it in the request body
        });

        if (!response.ok) {
            throw new Error("Request failed with status: " + response.status);
        }

        const data = await response.json();
         console.log(data)
        // Assuming you have an action creator named UserLogin to dispatch the data.msg
        dispatch(UserLogin(data));
    } catch (error) {
        console.error(error);
    }
};
export const userRegistration = (userData) => async (dispatch) => {
    try {
        const response = await fetch(`https://space-authentication.onrender.com/users/register`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userData), // Convert userData to JSON and send it in the request body
        });

        if (!response.ok) {
            throw new Error("Request failed with status: " + response.status);
        }

        const data = await response.json();
         console.log(data)
        // Assuming you have an action creator named UserRegister to dispatch the data.msg
        dispatch(UserRegister(data.msg));
    } catch (error) {
        console.error(error);
    }
};
