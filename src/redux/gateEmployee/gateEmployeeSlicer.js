import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

export const createGateEmployeeAsyncThunk = createAsyncThunk('createGateEmployeeAsyncThunk', async (employeeName) => {
    const api_url = "http://localhost:8081";
    var response = await axios.post(api_url + '/api/gateEmployee/create',  { name : employeeName})
    return response.data;
})

const gateEmployeeSlicer = createSlice({
    name : 'gateEmployeeSlicer',
    initialState : {
        lastCreatedGateEmployeeName : "",
        loading : false,
        error : false
    },
    reducers : {
        createGateEmployeeAsyncThunkCompleted : (state, action) => {
            console.log('All completed - ', action.payload)
        }
    },
    extraReducers : (builder) => {
        builder.addCase(createGateEmployeeAsyncThunk.pending, (state) => {
            console.log('createGateEmployeeAsyncThunk-pending');
            state.loading = true
        });
        builder.addCase(createGateEmployeeAsyncThunk.fulfilled, (state, action) => {
            console.log('createGateEmployeeAsyncThunk-fulfilled');
            state.loading = false
            state.lastCreatedGateEmployeeName = action.payload.name;
        });
        builder.addCase(createGateEmployeeAsyncThunk.rejected, (state) => {
            console.log('createGateEmployeeAsyncThunk-rejected');
            state.loading = false
            state.error = true
        });
    }
})

export const { createGateEmployeeAsyncThunkCompleted } = gateEmployeeSlicer.actions

export default gateEmployeeSlicer.reducer;