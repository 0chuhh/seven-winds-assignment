import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface EntityState {
    entityId:number;
}

const initialState: EntityState = {
    entityId:128667,
}

export const entitySlice = createSlice({
    name:'entity',
    initialState,
    reducers:{
        entityUpdate(state, action:PayloadAction<number>){
            state.entityId = action.payload;
        },
    }
})

export default entitySlice.reducer;