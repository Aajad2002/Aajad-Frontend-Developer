

import { createSlice } from "@reduxjs/toolkit";

const capsuleSlice = createSlice({
    name: "capsule",
    initialState: {
        capsules: [],
        loading: false, // Add a loading state
        error: null, // Add an error state
    },
    reducers: {
        getCapsulesSuccess(state, action) {
            state.capsules = action.payload;
            state.loading = false;
            state.error = null;
        },
        getCapsulesFailure(state, action) {
            state.loading = false;
            state.error = action.payload;
        },
    },
});

export const { getCapsulesSuccess, getCapsulesFailure } = capsuleSlice.actions;

// Create an asynchronous thunk action
export const getCapsules = (stateKey, stateValue) => async (dispatch) => {
    try {
        const response = await fetch(`https://api.spacexdata.com/v3/capsules?${stateKey}=${stateValue}`);
        if (!response.ok) {
            throw new Error("Request failed with status: " + response.status);
        }

        const data = await response.json();
        dispatch(getCapsulesSuccess(data));
    } catch (error) {
        dispatch(getCapsulesFailure(error.message));
    }
};

export const otherCapsules = (value) => async (dispatch) => {
    try {
        const response = await fetch(`https://api.spacexdata.com/v3/capsules/${value}`);
        if (!response.ok) {
            throw new Error("Request failed with status: " + response.status);
        }

        const data = await response.json();
        dispatch(getCapsulesSuccess(data));
    } catch (error) {
        dispatch(getCapsulesFailure(error.message));
    }
};
export default capsuleSlice.reducer;
