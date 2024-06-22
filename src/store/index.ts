import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { entityAPI } from "services/entity-service";
import { rowAPI } from "services/row-service";
import entity from "./reducers/entity/entity-slice";

const rootReducer = combineReducers({
    entity,
    [entityAPI.reducerPath]: entityAPI.reducer,
    [rowAPI.reducerPath]: rowAPI.reducer
});

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
        middleware: (getDefultMiddleware) =>
            getDefultMiddleware().concat(
                entityAPI.middleware,
                rowAPI.middleware
            )
    });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];